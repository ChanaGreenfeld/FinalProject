const nodeMailerBll = require("../bll/nodeMailerBll");
const express = require("express");

const router=express.Router();


router.post('/sendemail', async (req, res) => {
    const emailDatas = req.body;
    const emailData={
        recipient:"b0504180093@gmail.com",
        subject:"שלום ברכי!",
        text :"מטורף לא? פה אמור להישלח קבלה עם פרטי הקניה"
    }
    try {
        const result = await nodeMailerBll.sendEmail(emailData);
        res.status(result.status).send(result.message);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

module.exports = router;