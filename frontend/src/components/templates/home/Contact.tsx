import Title from "@/components/atomics/Title";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import SendEmail from "@/components/organisms/home/SendEmail";
import SocialLink from "@/components/organisms/home/SocialLink";

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
              <SocialLink key={link.name} name={link.name} href={link.href} />
            ))}
          </ul>
        </div>
        <SendEmail />
      </div>
    </section>
  );
};

export default Contact;
