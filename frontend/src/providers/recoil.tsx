"use client";

import React from "react";
import { RecoilRoot } from "recoil";

interface IRecoil {
  children: React.ReactNode;
}

export default function Recoil({ children }: IRecoil) {
  return <RecoilRoot>{children}</RecoilRoot>;
}
