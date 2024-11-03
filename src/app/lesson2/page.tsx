import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./style.module.scss";

export const metadata: Metadata = {
    title: "Lesson2 簡易的なページ作成",
    description: "Lesson2 簡易的なページ作成",
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
        <>
            <h1 className={styles["h1-title"]}>自己紹介</h1>
            <p>
                私の名前は{fullName}です。
                <br />
                出身は{homeTown}です。
                <br />
                年齢は{age !== null ? `${age}歳` : "非公開"}です。
            </p>
            <h2>趣味・特技</h2>
            <dl>
                <dt>趣味</dt>
                <dd>{hobbiesSkills.hobbies}</dd>
            </dl>
            <dl>
                <dt>特技</dt>
                <dd>{hobbiesSkills.skills}</dd>
            </dl>
            <h2>好きな食べ物</h2>
            <ul>
                {favoriteFoods.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ul>
            <h2>好きな漫画ランキング</h2>
            <ol>
                {favoriteManga.map((item, i) => (
                    <li key={i}>{item}</li>
                ))}
            </ol>
            <h2>画像の練習</h2>
            <Image src="/monhan.png" width={150} height={150} alt="" priority />
            <h2>リンクの練習</h2>
            <Link href="/">トップページ</Link>
        </>
    );
}
