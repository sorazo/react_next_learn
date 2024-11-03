"use client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
    loginFormSchema,
    type LoginFormInputs,
} from "@/libs/lesson5/validation-schema";
import { loginFormAction } from "@/actions/lesson5/login-form";

export const LoginForm: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormInputs>({
        // オプション
        mode: "onBlur",
        // FE（クライアント）のregisterエラー
        resolver: zodResolver(loginFormSchema),
    });

    const [serverError, setServerError] = useState(false);

    const onSubmit = async (data: LoginFormInputs) => {
        const result = await loginFormAction(data);
        if (!result) {
            setServerError(true);
            console.log("不明なエラー");
            return;
        }

        if (result.error) {
            setServerError(true);
            console.log(result.error);
            return;
        }

        // 正常時の処理を記載
        // サブミット後の処理を記載
        // 本来は、ここに入力値をAPIに渡す処理を記述する
        setServerError(false);
        console.log(data);
    };

    return (
        <>
            {serverError && <div>不正な操作が行われました</div>}
            <form onSubmit={handleSubmit(onSubmit)}>
                <label>ID</label>
                <br />
                {/* スプレッド演算子 */}
                <input type="text" {...register("id")} />
                {errors.id && <div>{errors.id.message}</div>}
                <br />
                <label>パスワード</label>
                <br />
                <input type="password" {...register("password")} />
                {errors.password && <div>{errors.password.message}</div>}
                <br />
                <button>送信</button>
            </form>
        </>
    );
};
