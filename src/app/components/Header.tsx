import styles from "./Layout.module.scss";

export default function Header() {
    return (
        <header className={styles.navigation}>
            <p>Furniture Design</p>
            <nav>
                <div className={styles.hamburgerMenu}>
                    <span></span>
                    <span></span>
                </div>
            </nav>
        </header>
    );
}
