import React from "react";

type ListProps = {
    listType?: "ul" | "ol";
    list?: string[];
    children?: React.ReactNode;
};

export const List: React.FC<ListProps> = ({
    children,
    listType = "ul",
    list,
}) => {
    const newList = list?.map((item, i) => <ListItem key={i}>{item}</ListItem>);
    return (
        <>
            {listType === "ul" && <ul>{newList ? newList : children}</ul>}
            {listType === "ol" && <ol>{newList ? newList : children}</ol>}
        </>
    );
};

type ListItemProps = {
    children: React.ReactNode;
};

export const ListItem: React.FC<ListItemProps> = ({ children }) => {
    return <li>{children}</li>;
};
