import BankAccounts from "@/components/my-wallet/BankAccounts";
import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function MyWalletPage() {
  const { isAuthenticated, isUserAuthenticated } = await validateRequest();

  if (!isUserAuthenticated || !isAuthenticated) {
    redirect("/auth/signin");
  }

  return (
    <div className="px-4 grid gap-y-3">
      <BankAccounts />
    </div>
  );
}
