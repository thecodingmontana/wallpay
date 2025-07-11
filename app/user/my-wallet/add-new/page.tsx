import { validateRequest } from "@/lib/auth";
import { redirect } from "next/navigation";

export default async function AddNewPage() {
  const { isAuthenticated, isUserAuthenticated } =
    await validateRequest();

  if (!isUserAuthenticated || !isAuthenticated) {
    redirect("/auth/signin");
  }

  return <div className="p-4">AddNewPage</div>;
}
