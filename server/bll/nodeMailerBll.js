const nodemailer = require('nodemailer');

exports.sendEmail = async (emailData) => {
    const { recipient, subject, text } = emailData;
    const transport = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
            user: 'toysway1@gmail.com',
            pass: 'ltxrqpumlkmcszpf'
        }
    });
    const mailOptions = {
        from: 'Toys Way <toysway1@gmail.com>',
        to: recipient,
        subject: subject,
        html: text
    };
    try {
        const result = await transport.sendMail(mailOptions);
        return {
            status: 200,
            message: 'Email sent successfully'
        };
    } catch (err) {
        throw new Error('Failed to send email');
    }
}