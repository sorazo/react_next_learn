import { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import styles from "./Layout.module.scss";

interface LayoutProps {
    children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
    return (
        <>
            <Header />
            <main className={styles.container}>{children}</main>
            <Footer />
        </>
    );
}
