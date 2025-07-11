"use client";

import { GalleryVerticalEnd, Loader2 } from "lucide-react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { capitalize, cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import PasswordInput from "./PasswordInput";
import { toast } from "sonner";
import { faker } from "@faker-js/faker";
import { signinFormSchema } from "@/types/forms";
import HugeiconsAlertCircle from "../svgs/HugeiconsAlertCircle";
import { redirectToWallet, signinAction } from "@/actions/auth-actions";

export function SigninForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const form = useForm<z.infer<typeof signinFormSchema>>({
    resolver: zodResolver(signinFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof signinFormSchema>) {
    setIsAuthenticating(true);
    try {
      const userData = {
        email: data.email,
        avatar: `https://avatar.vercel.sh/${data.email}`,
        username: `${capitalize(faker.person.firstName())} ${capitalize(
          faker.person.lastName()
        )}`,
      };

      // Use server action to set cookies
      const result = await signinAction(userData);

      if (result.success) {
        toast.info("You've successfully signed in!", {
          position: "top-center",
        });

        await redirectToWallet();
      } else {
        throw new Error(result.message);
      }
      
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong. Please try again.", {
        position: "top-center",
      });
    } finally {
      setIsAuthenticating(false);
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <a
                href="#"
                className="flex flex-col items-center gap-2 font-medium"
              >
                <div className="flex size-8 items-center justify-center rounded-md">
                  <GalleryVerticalEnd className="size-6" />
                </div>
                <span className="sr-only">Wallpay.</span>
              </a>
              <h1 className="text-2xl font-bold">
                Welcome to <span className="font-bebas-neue">Wallpay</span>.
              </h1>
              <p className="text-center text-base text-muted-foreground">
                Sign in to access your account.
              </p>

              <p className="text-xs text-muted-foreground flex items-center gap-x-1">
                <HugeiconsAlertCircle className="size-3" />
                use any valid email and a password of 8 characters
              </p>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2.5">
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input
                          type="email"
                          disabled={
                            isAuthenticating || form.formState.isSubmitting
                          }
                          placeholder="e.g m@example.com"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem className="grid gap-3">
                      <FormLabel>Password</FormLabel>
                      <FormControl>
                        <PasswordInput
                          value={field.value}
                          onChange={field.onChange}
                          disabled={
                            isAuthenticating || form.formState.isSubmitting
                          }
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-brand hover:bg-brand-secondary cursor-pointer dark:text-white gap-x-2"
                disabled={isAuthenticating}
              >
                {isAuthenticating && (
                  <Loader2 className="animate-spin size-5" />
                )}
                Signin
              </Button>
            </div>
          </div>
        </form>
      </Form>
      <div className="text-muted-foreground *:[a]:hover:text-primary text-center text-xs text-balance *:[a]:underline *:[a]:underline-offset-4">
        By clicking continue, you agree to our <a href="#">Terms of Service</a>{" "}
        and <a href="#">Privacy Policy</a>.
      </div>
    </div>
  );
}