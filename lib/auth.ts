import { cookies } from "next/headers";

export const validateRequest = async () => {
const cookieStore = await cookies();
  const userCookie = cookieStore.get("user");
  const authenticatedCookie = cookieStore.get("authenticated");

  const isUserAuthenticated =
    userCookie && userCookie.value && userCookie.value !== "null";
  const isAuthenticated =
    authenticatedCookie &&
    authenticatedCookie.value &&
    authenticatedCookie.value !== "null";

    return {
        isAuthenticated,
        isUserAuthenticated,
        userCookie
    }
}