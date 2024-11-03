// src/app/components/Footer.tsx
import Link from "next/link";
import styles from "./Layout.module.scss";

export default function Footer() {
    return (
        <footer className={styles.navigation}>
            <nav>
                <ul className={styles.menu}>
                    <li>
                        <Link href="../challenge/furniture/products">
                            PRODUCTS
                        </Link>
                    </li>
                    <li>
                        <Link href="../challenge/furniture/about">ABOUT</Link>
                    </li>
                    <li>
                        <Link href="../challenge/furniture/company">
                            COMPANY
                        </Link>
                    </li>
                    <li>
                        <Link href="/contact">CONTACT</Link>
                    </li>
                </ul>
            </nav>
            <div>
                <p>&copy; Furniture Design</p>
            </div>
        </footer>
    );
}
