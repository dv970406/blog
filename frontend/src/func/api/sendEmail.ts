import * as nodemailer from "nodemailer";

interface IEmailInfo {
  name: string;
  email: string;
  message: string;
  createdAt: string | Date;
}
export const sendEmail = async ({
  name,
  email,
  message,
  createdAt,
}: IEmailInfo) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.NODE_MAILER_AUTH_EMAIL,
        pass: process.env.NODE_MAILER_AUTH_PASS,
      },
    });

    // (nodemailer 관련 이슈 존재 : from에 설정된 이메일이 아니라 내가 nodemailer에서 API KEY를 발급받은 계정의 이메일이 from으로 송신자가 됨)
    const mailOptions = {
      from: `${email}`, //송신할 이메일(유저의 Email)
      to: process.env.NODE_MAILER_ADMIN_EMAIL, //수신할 이메일(관리자의 Email)
      subject: `${name}님에게서 도착한 이메일입니다.`,
      html: `
        <div style="width: 100%">
      
      <div
       style="margin-bottom: 8px;"
      >
        <h3 style="font-size: 20px">이름</h3>
        <b style="font-size: 16px">${name}</b>
      </div>
      <div
       style="margin-bottom: 8px;"
      >
        <h3 style="font-size: 20px">이메일</h3>
        <b style="font-size: 16px">${email}</b>
      </div>
      <div
       style="margin-bottom: 8px;"
      >
        <h3 style="font-size: 20px;">메세지</h3>
        <p style="font-size: 16px">${message}</p>
      </div>
      <div
        style="margin-bottom: 8px;"
      >
        <h3 style="font-size: 20px; ">작성일</h3>
        <p style="font-size: 14px">${new Date(createdAt).toLocaleString()}</p>
      </div>

     
    </div>
      `,
    };
    await transporter.sendMail(mailOptions);

    return { ok: true };
  } catch (error) {
    return { ok: false };
  }
};
