import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
    PageTitle,
    Text,
    SectionTitle,
    DefinitionList,
    List,
    ListItem,
    Contents,
    Counter,
    Toggle,
} from "@/components/lesson3";

export const metadata: Metadata = {
    title: "Lesson3 コンポーネントの作成と管理",
    description: "Lesson3 コンポーネントの作成と管理",
};

export default function Page() {
    const fullName: string = "福原美侑";
    const homeTown: string = "東京都";
    const age: number | null = null;
    const hobbiesSkills: { hobbies: string; skills: string } = {
        hobbies: "ゲーム・漫画・アニメ",
        skills: "動物に好かれること",
    };
    const favoriteFoods: string[] = ["ブドウ", "イチゴ", "梅干し"];
    const favoriteManga: string[] = [
        "ハンターハンター",
        "ナルト",
        "ドラゴンボール",
    ];
    return (
        <Contents>
            <PageTitle>自己紹介</PageTitle>
            <Text>
                私の名前は{fullName}です。
                <br />
                出身は{homeTown}です。
                <br />
                年齢は{age !== null ? `${age}歳` : "非公開"}です。
            </Text>
            <SectionTitle>趣味・特技</SectionTitle>
            <DefinitionList dt="趣味" dd={hobbiesSkills.hobbies} />
            <DefinitionList dt="特技" dd={hobbiesSkills.skills} />
            <SectionTitle>好きな食べ物</SectionTitle>
            <List list={favoriteFoods}></List>
            <SectionTitle>好きな漫画ランキング</SectionTitle>
            <List listType="ol">
                {favoriteManga.map((item, i) => (
                    <ListItem key={i}>{item}</ListItem>
                ))}
            </List>
            <SectionTitle>画像の練習</SectionTitle>
            <Image src="/monhan.png" width={150} height={150} alt="" priority />
            <SectionTitle>リンクの練習</SectionTitle>
            <Link href="/">トップページ</Link>
            <SectionTitle>カウンター</SectionTitle>
            <Counter />
            <SectionTitle>トグル</SectionTitle>
            {/* opened={true}初めから開いている状態にしたいなら */}
            <Toggle title="トグルボタン" opened={true}>
                コンテンツ
            </Toggle>
        </Contents>
    );
}
