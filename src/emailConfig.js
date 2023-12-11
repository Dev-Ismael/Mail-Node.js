const mailConfig = {
    gmail: {
        service: "gmail",
        auth: {
            user: "a.ismael@bluskyint.com",
            pass: "rudffcinrufeoxkn",
        },
    },
    mailtrap: {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "89ac273faebfc4",
            pass: "71b1bdd5ab4820",
        },
    },
    sendgrid: {
        host: 'smtp.sendgrid.net',
        port: 587,
        auth: {
            user: "apikey",
            pass: "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"
        }
    },
};

module.exports = mailConfig;
