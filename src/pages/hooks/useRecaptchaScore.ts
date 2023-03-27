// hooks/useRecaptchaScore.ts

import { useState, useEffect, useCallback } from "react";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

export function useRecaptchaScore(): number | null {
    const [recaptchaScore, setRecaptchaScore] = useState<number | null>(null);
    const { executeRecaptcha } = useGoogleReCaptcha();

    const validateRecaptcha = useCallback(async () => {
        if (!executeRecaptcha) {
            console.log("Execute recaptcha not yet available");
            return;
        }

        const token: string = await executeRecaptcha("contact_form");
        const score: number = parseFloat(token);
        console.log("reCAPTCHA score:", score);
        setRecaptchaScore(score);
    }, [executeRecaptcha]);

    useEffect(() => {
        validateRecaptcha();
    }, [validateRecaptcha]);

    return recaptchaScore;
}
