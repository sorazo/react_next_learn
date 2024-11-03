"use server";

import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";

export async function loginFormAction(data: LoginFormInputs) {
    const result = loginFormSchema.safeParse(data);

    if (result.success) {
        /**
         * 必要あれば何かしらサーバーサイド処理を入れる
         */
        return { success: true, data: result.data };
    }

    if (result.error) {
        return { success: false, error: result.error.format() };
    }

    return { success: false };
}
