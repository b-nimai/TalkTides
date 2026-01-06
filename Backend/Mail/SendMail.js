// const nodemailer = require('nodemailer');

// const mailSender = async (email, sub, body)=> {

//   const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//       user: process.env.MAIL_USER,
//       pass: process.env.MAIL_PASS
//     }
//     })

//     const mailOptions = {
//       from: 'inquiriestides@gmail.com',
//       to: `${email}`,
//       subject: `${sub}`,
//       html: `${body}`,
//     };

//     try {
//       await transporter.sendMail(mailOptions) 
//       return "OTP Send."
//     } catch (error) {
//       return error.message
//     }
// }
// module.exports = { mailSender }


// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//     host: process.env.MAIL_HOST,
//     port: 587,
//     secure: false,
//     auth: {
//         user: process.env.MAIL_USER,
//         pass: process.env.MAIL_PASS,
//     },
//     connectionTimeout: 20000,
//     greetingTimeout: 20000,
//     socketTimeout: 20000,
// });

// // Verify transporter once at startup
// transporter.verify((err) => {
//     if (err) {
//         console.error("❌ Mail server error:", err.message);
//     } else {
//         console.log("✅ Mail server ready");
//     }
// });

// const mailSender = async (to, subject, html) => {
//     try {
//         await transporter.sendMail({
//             from: `"TalkTides" <${process.env.MAIL_USER}>`,
//             to,
//             subject,
//             html,
//         });
//     } catch (error) {
//         console.error("❌ Mail send failed:", error.message);
//         throw error; // IMPORTANT
//     }
// };

// module.exports = { mailSender };



const { Resend } = require("resend");

const resend = new Resend(process.env.RESEND_API_KEY);

const mailSender = async (to, subject, html) => {
    try {
        await resend.emails.send({
            from: "TalkTides <onboarding@resend.dev>",
            to,
            subject,
            html,
        });
    } catch (error) {
        console.error("Mail failed:", error.message);
        throw error;
    }
};

module.exports = { mailSender };
