"use client";
import React from "react";
import { Navigation, NavigationItem } from "@/components/lesson4/navigation";
import { usePathname } from "next/navigation";

export const Lesson4Navigation: React.FC = () => {
    const pathname = usePathname();

    const navList = [
        { text: "Top", href: "/lesson4/lesson4-2" },
        { text: "About", href: "/lesson4/lesson4-2/about" },
        { text: "News", href: "/lesson4/lesson4-2/news" },
        { text: "Service", href: "/lesson4/lesson4-2/service" },
    ];

    return (
        <Navigation>
            {navList.map((item) => (
                <NavigationItem
                    key={item.href}
                    href={item.href}
                    current={pathname === item.href}
                >
                    {item.text}
                </NavigationItem>
            ))}
        </Navigation>
    );
};
