import Title from "@/components/molecules/Title";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import SendEmail from "@/components/organisms/home/SendEmail";

const LINKS = [{ name: "Github", link: "" }];
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
              <li
                key={link.name}
                className="py-1 px-2 border-[1px] rounded-lg border-custom-lightgray hover:border-blue-transition hover:text-custom-blue"
              >
                <Link
                  href="https://github.com/dv970406"
                  className="flex gap-2"
                  target="_blank"
                >
                  <Image
                    src={`/${link.name}.png`}
                    width={24}
                    height={24}
                    alt={link.name}
                  />
                  <p className="text-sub ">{link.name}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <SendEmail />
      </div>
    </section>
  );
};

export default Contact;
