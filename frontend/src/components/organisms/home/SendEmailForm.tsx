"use client";
import Input from "@/components/molecules/Input";
import Textarea from "@/components/molecules/Textarea";
import { useFetchEmail } from "@/hooks/fetchEmail";
import React, { FormEventHandler, useRef } from "react";

const SendEmailForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { fetchEmail, loading } = useFetchEmail();
  const handleSendMessage: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const message = messageRef?.current?.value;

    if (!name || !email || !message) {
      alert("양식을 확인해주세요.");
      return;
    }

    fetchEmail(name, email, message).then(() => {
      if (!name || !email || !message) return;

      // reset 작업
      nameRef.current.value = "";
      emailRef.current.value = "";
      messageRef.current.value = "";
    });
  };
  return (
    <form
      className="p-4 mt-10 rounded-lg lg:mt-0 lg:w-1/2 bg-custom-darkgray"
      onSubmit={handleSendMessage}
    >
      <Input title="Name" inputRef={nameRef} minLength={2} />
      <Input title="Email" inputRef={emailRef} type="email" />

      <Textarea title="Message" textareaRef={messageRef} minLength={2} />
      <div className="flex justify-end">
        <button
          disabled={loading}
          className={`px-4 py-2 mt-4 border-2 border-white rounded-xl text-blue-transition hover:border-custom-blue ${
            loading && "pointer-events-none opacity-30"
          }`}
        >
          {loading ? "wait..." : "Send"}
        </button>
      </div>
    </form>
  );
};

export default SendEmailForm;
