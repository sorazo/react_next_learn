import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import styles from "./challenge.module.scss";
// import Layout from "../../components/Layout";
import { Header } from "@/components/challenge";

export const metadata: Metadata = {
    title: "Top",
    description: "Top",
};

export default function Page() {
    const writings: number = 21;
    const images: number = 3;

    return (
        <>
            {/* 後で、headerとfooterをまとめるコンポーネント作る（あるけど） */}
            <Header>Furniture Design</Header>
            <Image
                src="/challenge/furniture/main-image.png"
                className={styles.mainImage}
                width={1280}
                height={600}
                alt=""
                priority
            />
            <div className={styles.concent}>
                <h1 className={styles.title}>About</h1>
                <div className={styles.letter}>
                    {Array.from({ length: writings }).map((_, index) => (
                        <p key={index}>テキスト</p>
                    ))}
                </div>
            </div>
            <div className={styles.concent}>
                <h1 className={styles.title}>Products</h1>
                <div className={styles.shopping}>
                    {Array.from({ length: images }).map((_, index) => (
                        <div key={index}>
                            <Image
                                src="/challenge/furniture/item1.png"
                                width={294.5}
                                height={294.5}
                                alt=""
                                priority
                            />
                            <p>プロダクトタイトルプロダクトタイトル</p>
                            <p>¥99,999 +tax</p>
                        </div>
                    ))}
                </div>
            </div>
            <Link href="/" className={styles.viewMore}>
                View More
            </Link>
        </>
    );
}
