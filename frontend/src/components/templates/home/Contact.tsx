import Title from "@/components/atomics/Title";
import React from "react";
import SendEmailForm from "@/components/organisms/home/SendEmailForm";
import SocialLinkItem from "@/components/organisms/home/SocialLinkItem";

const LINKS = [{ name: "github", href: "https://github.com/dv970406" }];
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

          <p className="my-10 text-main">dv970406@gmail.com</p>

          <ul className="flex gap-4">
            {LINKS.map((link) => (
              <SocialLinkItem
                key={link.name}
                name={link.name}
                href={link.href}
              />
            ))}
          </ul>
        </div>
        <SendEmailForm />
      </div>
    </section>
  );
};

export default Contact;
