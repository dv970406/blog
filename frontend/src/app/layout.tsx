import Header from "@/components/templates/layout/Header";
import { Metadata } from "next";
import "./globals.css";
import "./tailwind.css";
import Recoil from "@/providers/recoil";
import ReactQuery from "@/providers/react-query";

export const metadata: Metadata = {
  title: "SJ's Archive",
  description: "최성준의 프로젝트 블로그",
  icons: {
    icon: "/sj.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body
        className={`bg-custom-black text-custom-lightgray layout font-pretandard`}
      >
        <Recoil>
          <ReactQuery>
            <Header />

            <main>{children}</main>
          </ReactQuery>
        </Recoil>
      </body>
    </html>
  );
}
