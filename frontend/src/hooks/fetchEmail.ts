import { useState } from "react";

export const useFetchEmail = () => {
  const [loading, setLoading] = useState(false);

  const fetchEmail = async (name: string, email: string, message: string) => {
    setLoading(true);
    const response = await fetch(`/api/email`, {
      method: "POST",
      body: JSON.stringify({ name, email, message, createdAt: Date.now() }),
    });

    const { ok } = await response.json();

    if (!ok) {
      alert("이메일 전송에 실패했습니다. 양식을 다시 한번 확인해주세요.");
      setLoading(false);
      return;
    }
    alert("성공적으로 발신되었습니다.");
    setLoading(false);
  };

  return { fetchEmail, loading };
};
