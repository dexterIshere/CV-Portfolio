import { NextApiRequest, NextApiResponse } from "next";
import fetch from "node-fetch";

interface RecaptchaResponse {
    success: boolean;
    score?: number;
    challenge_ts?: string;
    hostname?: string;
    'error-codes'?: string[];
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const { recaptchaToken } = req.body;

    const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${recaptchaToken}`,
        { method: "POST" }
    );

    const data = await response.json() as RecaptchaResponse;

    if (data.success && data.score && data.score >= 0.5) {
        res.status(200).json({ success: true, score: data.score });
    } else {
        res.status(400).json({ success: false });
    }
}