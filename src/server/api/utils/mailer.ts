import nodemailer from 'nodemailer';

export async function sendMail(to: string, subject: string, html: string) {
    const transporter = nodemailer.createTransport({
        host: 'your_smtp_host', // e.g., smtp.gmail.com
        port: 587,
        secure: false,
        auth: {
            user: 'your_email@example.com',
            pass: 'your_email_password',
        },
    });

    const info = await transporter.sendMail({
        from: '"Your Name" <your_email@example.com>',
        to,
        subject,
        html,
    });

    return info;
}
