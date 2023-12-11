const express = require("express");
const router = express.Router();
const { sendMail } = require("../controllers/mailController");

router.post("/send", (req, res) => {
    // Call the controller method
    sendMail("a.ismael@bluskyint.com", "Test Subject", "<p>Test Mail Content</p>");
    res.send("Email sent!");
});

module.exports = router;