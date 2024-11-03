"use client";
import React, { useState } from "react";

export const TextfiledExample: React.FC = () => {
    const [val, setVal] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setVal(e.target.value);
    };
    return (
        <>
            <input onChange={handleChange} type="txet" />
            <br />
            <p>入力値：{val}</p>
        </>
    );
};
