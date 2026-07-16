import Link from "next/link"
import logoImg from '@/assets/logo.png'
import styles from './header-main.module.css'

export default function MainHeader() {
    return (
        <header className={styles.header}>
            <Link href={'/'} className={styles.logo}>
                <img src={logoImg.src} alt="logo, a plate of food" />
                NextLevel Food
            </Link>

            <nav className={styles.nav}>
                <ul>
                    <li>
                        <Link href={'/meals'}>Meals</Link>
                    </li>
                    <li>
                        <Link href={'/community'}>Foodies Community</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}