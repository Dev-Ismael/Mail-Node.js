const nodemailer = require("nodemailer");
const emailConfig = require("../emailConfig");

const transporter = nodemailer.createTransport(emailConfig.sendgrid);

const sendMail = (email, subject, html) => {
    const mailOptions = {
        from: "info@cpapai.com",
        to: email || "a.ismael@bluskyint.com",
        subject: subject || "Nodemailer Test",
        html: html || "<p> Test Mail </p>",
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.error(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

module.exports = {
    sendMail,
};
