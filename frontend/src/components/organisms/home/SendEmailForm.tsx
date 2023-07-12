"use client";
import InputWithTitle from "@/components/molecules/inputs/InputWithTitle";
import Textarea from "@/components/molecules/inputs/Textarea";
import { useFetchEmail } from "@/hooks/fetchEmail";
import React, { FormEventHandler, useRef } from "react";

const SendEmailForm = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const { fetchEmail, loading } = useFetchEmail();

  // 이 부분 추상화 더 할 수 있을 듯
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
      className="p-4 mb-6 rounded-lg lg:mt-0 bg-custom-darkgray"
      onSubmit={handleSendMessage}
    >
      <InputWithTitle title="Name" inputRef={nameRef} minLength={2} />
      <InputWithTitle title="Email" inputRef={emailRef} type="email" />

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
