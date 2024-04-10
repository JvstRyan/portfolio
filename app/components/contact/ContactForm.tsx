"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm = () => {
  const form = useRef<HTMLFormElement>(null);
  const [alert, setAlert] = useState(false);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      const serviceId =
        process.env.NEXT_PUBLIC_SERVICE_ID || "default_service_id";
      const templateId =
        process.env.NEXT_PUBLIC_TEMPLATE_ID || "default_template_id";
      const userId = process.env.NEXT_PUBLIC_USER_KEY || "default_user_id";
      emailjs.sendForm(serviceId, templateId, form.current, userId).then(
        (result) => {
          console.log(result.text);
          if (form.current) form.current.reset();
          setAlert(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-8 text-black">
     {alert && <div className="alert rounded border-none alert-success flex bg-primary">
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Message has been sent!</span>
      </div>}
      <input
        required
        placeholder="Enter your name"
        type="text"
        name="user_name"
        className="input input-primary w-80 sm:w-96 bg-white"
      />
      <input
        required
        placeholder="Enter your email"
        type="email"
        name="user_email"
        className="input input-primary w-80 sm:w-96 bg-white"
      />
      <textarea
        required
        className="textarea h-40 textarea-primary bg-white w-80 sm:w-96"
        name="message"
      />
      <button
        className="btn btn-secondary w-80 sm:w-96 text-white"
        type="submit"
        value="Send"
      >
        Submit
      </button>
    </form>
  );
};
