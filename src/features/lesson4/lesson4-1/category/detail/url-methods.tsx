"use client";
import React from "react";
import { SectionTitle } from "@/components/lesson3";
import {
    useRouter,
    usePathname,
    useParams,
    useSearchParams,
} from "next/navigation";

export const UrlMethods: React.FC = () => {
    const router = useRouter();
    const pathname = usePathname();
    const params = useParams();
    const searchParams = useSearchParams();
    // クエリパラメーターが「?hoge=fuga」だった場合のhogeの値取得
    // aタグでデータを送りたいときとかのパラメータのこと、その値を取得できる
    const paramHogeValue = searchParams.get("hoge");
    return (
        <>
            <SectionTitle>useRouter</SectionTitle>
            <button type="button" onClick={() => router.push("/")}>
                トップページ
            </button>
            <SectionTitle>usePathname</SectionTitle>
            <p>{pathname}</p>
            <SectionTitle>useParams</SectionTitle>
            <p>{JSON.stringify(params)}</p>
            <SectionTitle>useSearchParams</SectionTitle>
            <p>{paramHogeValue}</p>
        </>
    );
};
