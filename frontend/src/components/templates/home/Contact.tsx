import Title from "@/components/atomics/Title";
import React from "react";
import SendEmailForm from "@/components/organisms/home/SendEmailForm";
import SocialLinkItem from "@/components/organisms/home/SocialLinkItem";

const SOCIAL_LINKS_ARRAY = [
  { name: "github", href: "https://github.com/dv970406" },
  { name: "velog", href: "https://velog.io/@dv970406" },
  {
    name: "notion",
    href: "https://choiseongjun.notion.site/4d21c59ba84740a582a972b9884745b7?v=dbfc6f9e9c5340e689f627bb6552c47f&pvs=4",
  },
];
const Contact = () => {
  return (
    <section id="contact" className="h-screen py-4">
      <Title title="CONTACT" />

      <div className="flex flex-col w-full gap-4 lg:flex-row">
        <div className="lg:w-1/2">
          <h2>Frontend Developer who loves NextJS!</h2>

          <div className="my-10">
            <h2>Seong Jun, Choi</h2>
            <h3>South Korea</h3>
          </div>

          <div className="my-10 text-main">
            <p>✉️ dv970406@gmail.com</p>
            <p>☎ 010-7169-5404</p>
          </div>

          <ul className="flex gap-4">
            {SOCIAL_LINKS_ARRAY.map((link) => (
              <SocialLinkItem
                key={link.name}
                name={link.name}
                href={link.href}
              />
            ))}
          </ul>
        </div>
        <div className="lg:w-1/2">
          <SendEmailForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
