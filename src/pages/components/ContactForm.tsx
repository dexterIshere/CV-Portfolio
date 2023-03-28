import React, { useCallback, useEffect, useState } from "react";
import { useForm, Resolver } from "react-hook-form";
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha,
  useGoogleReCaptcha,
} from "react-google-recaptcha-v3";
import style from "../../styles/modules/components/contactForm.module.scss";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const contactSchema = z.object({
  companyEmail: z.string().email("Invalid email address."),
  yourName: z.string().nonempty("This is required."),
  companyWebsite: z.string().optional(),
  message: z.string().nonempty("This is required."),
});

type FormValues = z.infer<typeof contactSchema>;

const resolver: Resolver<FormValues> = async (values) => {
  return {
    values: values.companyEmail ? values : {},
    errors: !values.companyEmail
      ? {
          companyEmail: {
            type: "required",
            message: "This is required.",
          },
          yourName: {
            type: "required",
            message: "This is required.",
          },
          message: {
            type: "required",
            message: "This is required.",
          },
        }
      : {},
  };
};

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(contactSchema),
  });

  const { executeRecaptcha } = useGoogleReCaptcha();
  const [canSubmit, setCanSubmit] = useState(true);
  const [countdown, setCountdown] = useState(0);

  const handleReCaptchaVerify = useCallback(async () => {
    if (!executeRecaptcha) {
      console.log("Execute recaptcha not yet available");
      return;
    }

    const token = await executeRecaptcha("contact_form");
    setRecaptchaToken(token);
  }, [executeRecaptcha]);

  useEffect(() => {
    const lastAttemptTimestamp = localStorage.getItem("lastAttemptTimestamp");

    if (lastAttemptTimestamp) {
      const diffInMinutes = Math.floor(
        (Date.now() - parseInt(lastAttemptTimestamp)) / (1000 * 60)
      );

      if (diffInMinutes < 5) {
        setCanSubmit(false);
        const countdown = 5 - diffInMinutes;
        setCountdown(countdown);
      } else {
        setCanSubmit(true);
      }
    }
  }, []);

  useEffect(() => {
    handleReCaptchaVerify();
  }, [handleReCaptchaVerify]);

  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState("");
  const [recaptchaToken, setRecaptchaToken] = useState("");

  const sendApiRequest = async (url: string, data: any) => {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return response;
  };

  const showMessage = (message: string, type: "success" | "error") => {
    setMessage(message);
    setMessageType(type);
  };

  const onSubmit = async (data: FormValues) => {
    handleReCaptchaVerify();

    // Update the timestamp of the user's last attempt
    localStorage.setItem("lastAttemptTimestamp", Date.now().toString());

    try {
      const verifyResponse = await sendApiRequest("/api/verifyRecaptcha", {
        recaptchaToken,
      });
      const verifyData = await verifyResponse.json();

      if (!verifyData.success) {
        showMessage("reCAPTCHA validation failed", "error");
        return;
      }

      // Pas besoin de vérifier le score reCAPTCHA ici, car il est vérifié côté serveur

      const response = await sendApiRequest("/api/sendEmail", {
        ...data,
        recaptchaToken,
      });

      if (response.ok) {
        showMessage("Email envoyé avec succès.", "success");
      } else {
        showMessage("Erreur lors de l'envoi de l'email.", "error");
      }
    } catch (error) {
      showMessage("Erreur lors de l'envoi de la requête: " + error, "error");
    }
  };

  return (
    <div className={style.contactC}>
      <form
        id="CformC"
        className={style.contactForm}
        onSubmit={handleSubmit(onSubmit)}
      >
        <h1 className={style.TcontactC}>Contact Me</h1>
        <div className={style.ContactBox}>
          <div className={style.contactneed}>
            <div className={style.contactInputContainer}>
              <label htmlFor="">company Email</label>
              <input
                className={style.contactEmail}
                {...register("companyEmail")}
                // placeholder="company@example.com"
              />
              {errors?.companyEmail && (
                <p className={style.contactError}>
                  {errors.companyEmail.message}
                </p>
              )}
            </div>
            <div className={style.contactInputContainer}>
              <label htmlFor="">Your Name</label>
              <input
                className={style.contactName}
                {...register("yourName")}
                // placeholder="Your Name"
              />
              {errors?.yourName && (
                <p className={style.contactError}>{errors.yourName.message}</p>
              )}
            </div>
          </div>

          <div className={style.contactInputContainer}>
            <label htmlFor="Company Website">Company Website (optional)</label>
            <input
              className={style.contacturl}
              {...register("companyWebsite", { required: false })}
              // placeholder="Company Website (optional)"
            />
          </div>
          <div className={style.contactInputContainerMess}>
            <label htmlFor="">Message</label>
            <textarea
              className={style.contactMess}
              {...register("message")}
              // placeholder="Your Message"
            />
            {errors?.message && (
              <p className={style.contactError}>{errors.message.message}</p>
            )}
          </div>
        </div>
        <div className={style.endForm}>
          {message && <p className={style[messageType]}>{message}</p>}
          <input className={style.contactSub} type="submit" value="Submit" />

          {/* {canSubmit ? (
            <input className={style.contactSub} type="submit" value="Submit" />
          ) : (
            <p className={style.contactError}>
              You can submit the form again in {countdown} minute
              {countdown > 1 ? "s" : ""}.
            </p>
          )} */}
          <GoogleReCaptcha onVerify={handleReCaptchaVerify} />
        </div>
      </form>
      <div className={style.messAndCit}>
        <p className={style.PmessAndCit}>
          Des questions où des propositions ? N'hésitez pas à utiliser ce
          formulaire pour me contacter. Je m'engage à vous répondre dès que
          possible.
          <br /> Merci de votre intérêt !
        </p>
        <p className={style.CmessAndCit}>
          "La victoire dépend de la capacité de l'oreille à écouter et de la
          langue à parler."
        </p>
        <p className={style.CPmessAndCit}>Sun Tzu, L'Art de la guerre</p>
      </div>
    </div>
  );
}
