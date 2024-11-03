import { Metadata } from "next";
import { Contents, PageTitle, SectionTitle } from "@/components/lesson3";
import { TextfiledExample } from "@/features/lesson5/lesson5-1/textfiled-example";
import { RadioExample } from "@/features/lesson5/lesson5-1/radio-example";
import {
    CheckboxExample,
    CheckboxExample2,
} from "@/features/lesson5/lesson5-1/checkbox-example";
import { SelectExample } from "@/features/lesson5/lesson5-1/select-example";

export const metadata: Metadata = {
    title: "Lesson5 フォームとユーザー入力",
    description: "Lesson5 フォームとユーザー入力",
};

export default function Page() {
    return (
        <Contents>
            <PageTitle>入力要素の実装</PageTitle>
            <SectionTitle>input(もしくはtextarea)</SectionTitle>
            <TextfiledExample></TextfiledExample>
            <SectionTitle>ラジオボタン</SectionTitle>
            <RadioExample></RadioExample>
            <SectionTitle>ラジオボタン</SectionTitle>
            <CheckboxExample />
            <CheckboxExample2 />
            <SectionTitle>プルダウン</SectionTitle>
            <SelectExample />
        </Contents>
    );
}
