import { z } from "zod";

export const createAccountSchemaEn = z
    .object({
        username: z.string().min(6, { message: "Username must be at least 6 characters long" }).max(15, { message: "Username must be at most 15 characters long" }),
        email: z.string().email({ message: "Invalid email address" })
                .refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
                    message: "Email must be a valid Gmail address with the @gmail.com domain",
                }),
        password: z.string().min(6, { message: "Password must be at least 6 characters long" }),
        confirmPassword: z.string().min(6, { message: "Confirm Password must be at least 6 characters long" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "Passwords must match",
        path: ["confirmPassword"],
    });
export type CreateAccountInputEn = z.infer<typeof createAccountSchemaEn>;

export const createAccountSchemaFa = z
    .object({
        username: z.string().min(6, { message: "نام کاربری باید حداقل 6 کاراکتر باشد" }).max(15, { message: "نام کاربری باید حداکثر 15 کاراکتر باشد" }),
        email: z.string().email({ message: "آدرس ایمیل نامعتبر است" })
                .refine((email) => email.toLowerCase().endsWith("@gmail.com"), {
                    message: "ایمیل باید یک آدرس جیمیل معتبر با دامنه مناسب باشد", 
                }),
        password: z.string().min(6, { message: "رمز عبور باید حداقل 6 کاراکتر باشد" }).max(15, { message: "رمز عبور باید حداکثر 15 کاراکتر باشد" }),
        confirmPassword: z.string().min(6, { message: "رمز عبور تأیید باید حداقل 6 کاراکتر باشد" }).max(15, { message: "رمز عبور تأیید باید حداکثر 15 کاراکتر باشد" }),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: "گذرواژه ها باید مطابقت داشته باشند",
        path: ["confirmPassword"],
    });
export type CreateAccountInputFa = z.infer<typeof createAccountSchemaFa>;
