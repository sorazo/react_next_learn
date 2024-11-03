"use client";
import React, { useState } from "react";

export const Counter: React.FC = () => {
    // 0は、初期値
    const [count, setCount] = useState(0);

    const handleClickCountUp = () => {
        // イベントハンドラー
        alert("クリックされました");

        // count + 1;だけでもできるがコールバック関数を使ったほうが都合がいい
        setCount((count) => count + 1);
    };

    const handleClickCountDown = () => {
        setCount((count) => count - 1);
    };

    return (
        <>
            <button onClick={handleClickCountUp}>+</button>
            {count}
            <button onClick={handleClickCountDown}>-</button>
        </>
    );
};
