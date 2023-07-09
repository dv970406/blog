"use client";

import React from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { reactQueryClient } from "@/client/client";

interface IReactQuery {
  children: React.ReactNode;
}

export default function ReactQuery({ children }: IReactQuery) {
  return (
    <QueryClientProvider client={reactQueryClient}>
      {children}
    </QueryClientProvider>
  );
}
