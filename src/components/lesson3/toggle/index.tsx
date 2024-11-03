"use client";
// next特有の宣言文
// サーバー通信なしで行う操作・動くものは、この宣言をする必要がある。
// 宣言したほうが、動作が軽い
import React, { useState } from "react";
import styles from "./index.module.scss";
import clsx from "clsx";

type ToggleProps = {
    title: string;
    children: React.ReactNode;
    opened?: boolean;
};

export const Toggle: React.FC<ToggleProps> = ({
    children,
    title,
    opened = false,
}) => {
    const [open, setOpen] = useState(opened);
    const handleClick = () => setOpen((open) => !open);
    // クリックすると、falseからtrueになってopenが付与される
    return (
        <div className={clsx(styles.wrapper, open && styles.open)}>
            {/* openがあるならstyles.openを適用させる */}
            {/* npm install clsx --save：審議の値（falseなど）を文字列として表示させない拡張機能 */}
            <button className={styles.btn} onClick={handleClick}>
                {title}
            </button>
            <div className={styles.contents}>{children}</div>
        </div>
    );
};
