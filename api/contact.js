const ALLOWED_SUBJECTS = new Set([
    'Oportunidade de trabalho',
    'Projeto freelance',
    'Análise de dados',
    'Outro assunto'
]);

function sendJson(res, status, payload) {
    res.status(status).setHeader('Content-Type', 'application/json; charset=utf-8');
    res.end(JSON.stringify(payload));
}

module.exports = async function handler(req, res) {
    if (req.method !== 'POST') {
        res.setHeader('Allow', 'POST');
        return sendJson(res, 405, { success: false, message: 'Método não permitido.' });
    }

    let data = req.body;
    if (typeof data === 'string') {
        try {
            data = JSON.parse(data);
        } catch {
            return sendJson(res, 400, { success: false, message: 'Requisição inválida.' });
        }
    }

    if (!data || typeof data !== 'object' || Array.isArray(data)) {
        return sendJson(res, 400, { success: false, message: 'Requisição inválida.' });
    }

    const { name, email, whatsapp, company, subject, message, website } = data;
    if (typeof website === 'string' && website.trim()) {
        return sendJson(res, 400, { success: false, message: 'Requisição inválida.' });
    }

    if (
        typeof name !== 'string' || name.trim().length < 1 || name.length > 120 ||
        typeof email !== 'string' || email.length > 254 ||
        !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim()) ||
        typeof subject !== 'string' || !ALLOWED_SUBJECTS.has(subject) ||
        typeof message !== 'string' || message.trim().length < 20 || message.length > 1000 ||
        (whatsapp !== undefined && (typeof whatsapp !== 'string' || whatsapp.length > 40)) ||
        (company !== undefined && (typeof company !== 'string' || company.length > 120))
    ) {
        return sendJson(res, 400, { success: false, message: 'Verifique os campos do formulário.' });
    }

    const { RESEND_API_KEY, CONTACT_EMAIL_TO, CONTACT_EMAIL_FROM } = process.env;
    if (!RESEND_API_KEY || !CONTACT_EMAIL_TO || !CONTACT_EMAIL_FROM) {
        console.error('Contact API is missing RESEND_API_KEY, CONTACT_EMAIL_TO, or CONTACT_EMAIL_FROM.');
        return sendJson(res, 503, { success: false, message: 'O envio de e-mail não está configurado.' });
    }

    const text = [
        `Nome: ${name.trim()}`,
        `E-mail: ${email.trim()}`,
        whatsapp ? `WhatsApp: ${whatsapp.trim()}` : '',
        company ? `Empresa: ${company.trim()}` : '',
        '',
        message.trim()
    ].filter(Boolean).join('\n');

    try {
        const response = await fetch('https://api.resend.com/emails', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${RESEND_API_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                from: CONTACT_EMAIL_FROM,
                to: [CONTACT_EMAIL_TO],
                reply_to: email.trim(),
                subject: `${subject} - ${name.trim()}`,
                text
            })
        });

        if (!response.ok) {
            console.error(`Resend rejected contact email with status ${response.status}.`);
            return sendJson(res, 502, { success: false, message: 'O serviço de e-mail recusou o envio.' });
        }

        return sendJson(res, 200, { success: true });
    } catch (error) {
        console.error('Contact email request failed:', error);
        return sendJson(res, 502, { success: false, message: 'Não foi possível conectar ao serviço de e-mail.' });
    }
};
