import { SigninForm } from "@/components/auth/SigninForm";
import React from "react";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function SigninPage() {
  const cookieStore = await cookies();
  const userCookie = cookieStore.get('user');
  const authenticatedCookie = cookieStore.get('authenticated');

  const isUserAuthenticated = userCookie && userCookie.value && userCookie.value !== 'null';
  const isAuthenticated = authenticatedCookie && authenticatedCookie.value && authenticatedCookie.value !== 'null';

  if (isUserAuthenticated && isAuthenticated) {
    redirect('/user/wallet');
  }

  return (
    <div className="flex-1 flex w-full flex-col items-center justify-center gap-6">
      <div className="w-full max-w-sm">
        <SigninForm />
      </div>
    </div>
  );
}