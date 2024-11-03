import { z } from "zod";

export const loginFormSchema = z.object({
    id: z.string().min(1, { message: "IDは必須です" }),
    password: z
        .string()
        .min(1, { message: "パスワードは必須です" })
        .min(6, { message: "6文字以上入れてください" }),
});

export type LoginFormInputs = z.infer<typeof loginFormSchema>;
