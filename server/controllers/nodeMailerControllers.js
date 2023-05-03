const nodeMailerBll = require("../bll/nodeMailerBll");
const express = require("express");

const router=express.Router();


router.post('/sendemail', async (req, res) => {
    const emailDatas = req.body;
    const emailData={
        recipient:emailDatas.recipient,
        subject:emailDatas.subject,
        text :emailDatas.text
    }
    try {
        const result = await nodeMailerBll.sendEmail(emailData);
        res.status(result.status).send(result.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;