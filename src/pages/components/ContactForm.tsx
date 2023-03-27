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

    const score = await executeRecaptcha("contact_form");
    console.log("reCAPTCHA score:", score);
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

  const onSubmit = async (data: any) => {
    handleReCaptchaVerify();
    console.log(data);

    // Update the timestamp of the user's last attempt
    localStorage.setItem("lastAttemptTimestamp", Date.now().toString());

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        console.log("Email envoyé avec succès.");
      } else {
        console.error("Erreur lors de l'envoi de l'email.");
      }
    } catch (error) {
      console.error("Erreur lors de l'envoi de la requête:", error);
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
        <input className={style.contactSub} type="submit" value="Submit" />
        {/* {canSubmit ? (
          
        ) : (
          <p className={style.contactError}>
            You can submit the form again in {countdown} minute
            {countdown > 1 ? "s" : ""}.
          </p>
        )} */}
      </form>

      <div className={style.messAndCit}>
        <p className={style.PmessAndCit}>
          Des questions où des propositions ? N'hésitez pas à utiliser ce
          formulaire pour me contacter. Je m'engage à vous répondre dès que
          possible. Merci de votre intérêt !
        </p>
        <p className={style.CmessAndCit}>
          "Nous ne pouvons pas nous permettre de travailler sans relâche à la
          perfection la communication."
        </p>
        <p className={style.CPmessAndCit}>Sun Tzu, L'Art de la guerre</p>
      </div>
    </div>
  );
}
