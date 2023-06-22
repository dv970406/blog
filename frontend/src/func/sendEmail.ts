export const sendMessage = async (
  name: string,
  email: string,
  message: string
) => {
  const response = await fetch(`/api/email`, {
    method: "POST",
    body: JSON.stringify({ name, email, message, createdAt: Date.now() }),
  });

  const { ok } = await response.json();

  if (!ok) {
    alert("이메일 전송에 실패했습니다.");
    return;
  }
  alert("성공적으로 발신되었습니다.");
};
