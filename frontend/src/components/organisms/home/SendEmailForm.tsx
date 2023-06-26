"use client";
import Input from "@/components/molecules/Input";
import Textarea from "@/components/molecules/Textarea";
import { fetchEmailApi } from "@/func/fetchEmailApi";
import React, { FormEventHandler, useRef } from "react";

const SendEmailForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const handleSendMessage: FormEventHandler<HTMLFormElement> = async (
    event
  ) => {
    event.preventDefault();
    const name = nameRef?.current?.value;
    const email = emailRef?.current?.value;
    const message = messageRef?.current?.value;

    if (!name || !email || !message) return;
    fetchEmailApi(name, email, message);

    // reset 작업
    nameRef.current.value = "";
    emailRef.current.value = "";
    messageRef.current.value = "";
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
        <button className="px-4 py-2 mt-4 border-2 border-white rounded-xl text-blue-transition hover:border-custom-blue ">
          Send
        </button>
      </div>
    </form>
  );
};

export default SendEmailForm;
