// pages/api/sendEmail.ts
import type { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {

    const email = process.env.EMAIL;
    const pass = process.env.EMAIL_PASS;

    if (req.method === "POST") {
        const { companyEmail, yourName, companyWebsite, message } = req.body;

        try {
            const transporter = nodemailer.createTransport({
                service: "gmail",
                auth: {
                    user: email,
                    pass,
                },
            });

            const mailOptions = {
                from: email,
                to: email,
                subject: `New Contact Form Submission - ${yourName}`,
                text: `
                    Company Email: ${companyEmail}
                    Your Name: ${yourName}
                    Company Website: ${companyWebsite || "N/A"}
                    Message:
                    ${message}
                    `,
            };

            const info = await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true, messageId: info.messageId });
        } catch (error) {
            res.status(500).json({ success: false, error: error instanceof Error ? error.message : "An unknown error occurred." });
        }
    } else {
        res.setHeader("Allow", "POST");
        res.status(405).end("Method Not Allowed");
    }
}
