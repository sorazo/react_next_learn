import React from "react";
import styles from "./index.module.scss";

type HeaderProps = {
    children: React.ReactNode;
};

export const Header: React.FC<HeaderProps> = ({ children }) => {
    return (
        <header className={styles.navigation}>
            <p>{children}</p>
            <nav>
                <div className={styles.hamburgerMenu}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
};
