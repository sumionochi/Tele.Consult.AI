"use client";

import { SessionProvider } from "next-auth/react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query"

const queryClient = new QueryClient();
export default function Provider({
  children,
}:{
  children: React.ReactNode
}){
  return (
    <QueryClientProvider client={queryClient}>
    <SessionProvider>{children}</SessionProvider>
    </QueryClientProvider>
  )
}