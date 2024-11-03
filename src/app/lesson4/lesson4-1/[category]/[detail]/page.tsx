import { notFound } from "next/navigation";
import { Contents, PageTitle, Text } from "@/components/lesson3";
import { UrlMethods } from "@/features/lesson4/lesson4-1/category/detail/url-methods";

type PageProps = {
    params: {
        // category: string;
        detail: string;
    };
};

const data = [
    {
        id: "AA",
        title: "タイトルA",
        contents: "コンテンツA",
    },
    {
        id: "BB",
        title: "タイトルB",
        contents: "コンテンツB",
    },
    {
        id: "CC",
        title: "タイトルC",
        contents: "コンテンツC",
    },
    {
        id: "DD",
        title: "タイトルD",
        contents: "コンテンツD",
    },
];

export default function Page({ params }: PageProps) {
    const detailData = data.find((item) => item.id === params.detail);

    if (detailData === undefined) {
        notFound();
    }

    return (
        <Contents>
            {/* 動的にコンテンツを出し分け（data）を */}
            <PageTitle>{detailData?.title}</PageTitle>
            <Text>{detailData?.contents}</Text>
            {/* Linkではない遷移の仕方 */}
            {/* 基本的にはLinkでよいが、条件によって遷移先が2つあるときに使う */}
            {/* 例えば、ログイン機能とか？Laravelでいうコントローラーでの処理が必要な時 */}
            <UrlMethods></UrlMethods>
        </Contents>
    );
}

// metaデータはgenerateMetadataを使う
export const generateMetadata = ({ params }: PageProps) => {
    const detailData = data.find((item) => item.id === params.detail);
    return {
        title: `タイトル: ${detailData?.title}`,
        description: `ディスクリプション: ${detailData?.contents}`,
    };
};
