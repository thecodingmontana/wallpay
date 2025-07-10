import { z } from "zod"

export const signinFormSchema = z.object({
    email: z.email({
        message: "Invalid email!"
    }),
    password: z.string()
        .min(8, { message: "Password must be at least 8 characters." })
        .regex(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/, {
            message: "Password must contain at least one uppercase letter, one number, and one special character."
        }),
})