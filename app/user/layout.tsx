import { Toaster } from "@/components/ui/sonner";
import React from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center min-h-svh">
      <div className="flex flex-col max-w-md w-full min-h-svh bg-muted">
        {children}
        {/* <ModalProvider /> */}
        <Toaster richColors closeButton />
      </div>
    </main>
  );
}
