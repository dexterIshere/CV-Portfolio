import { useState, useEffect } from "react";

export default function useRecaptchaScore(recaptchaToken: string | null): number | null {
  const [recaptchaScore, setRecaptchaScore] = useState<number | null>(null);

  useEffect(() => {
    const fetchRecaptchaScore = async () => {
      if (!recaptchaToken) {
        return;
      }

      try {
        const response = await fetch("/api/verifyRecaptcha", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ recaptchaToken }),
        });

        const data = await response.json();

        if (data.success) {
          console.log("reCAPTCHA score:", data.score);
          setRecaptchaScore(data.score);
        } else {
          console.log("reCAPTCHA validation failed");
        }
      } catch (error) {
        console.error("Error fetching reCAPTCHA score:", error);
      }
    };

    fetchRecaptchaScore();
  }, [recaptchaToken]);

  return recaptchaScore;
}