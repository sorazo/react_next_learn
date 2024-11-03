"use client";
import React, { useState } from "react";

export const TodoListExample: React.FC = () => {
    const [todoList, setTodoList] = useState<{ id: number; content: string }[]>(
        [],
    );
    const [id, setId] = useState(0);
    const [contentVal, setContentVal] = useState("");
    const addTodo = () => {
        if (contentVal === "") return;
        const newTodo = {
            id: id,
            content: contentVal,
        };
        setTodoList((todoList) => [...todoList, newTodo]);
        setId((id) => id + 1);
    };

    const deleteTodo = (id: number) => {
        const newTodoList = todoList.filter((item) => item.id !== id);
        setTodoList(newTodoList);
    };
    return (
        <>
            <input
                type="text"
                value={contentVal}
                onChange={(e) => setContentVal(e.target.value)}
            />
            <button value={contentVal} onClick={addTodo}>
                追加
            </button>
            <ul>
                {todoList.map((item) => (
                    <li key={item.id} data-id={item.id}>
                        {item.content}
                        <button onClick={() => deleteTodo(item.id)}>
                            削除
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
