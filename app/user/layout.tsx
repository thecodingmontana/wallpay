import { Toaster } from "@/components/ui/sonner";
import BottomSheetTabs from "@/components/wallet/BottomSheetTabs";
import React from "react";

export default function UserLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex justify-center min-h-svh">
      <div className="flex relative flex-col max-w-md w-full min-h-svh bg-muted">
        {children}
        <BottomSheetTabs />
        {/* <ModalProvider /> */}
        <Toaster richColors closeButton />
      </div>
    </main>
  );
}
