// mailRoutes.js
import express from "express";
import { sendMail } from "../controllers/mailController";

const router = express.Router();

router.get("/send", (req, res) => {
    sendMail(
        "a.ismael@bluskyint.com",      
        "Test Subject",
        "<p>Test Mail Content</p>"
    );
    res.send("Email sent!");
});

export default router;