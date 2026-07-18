import Link from "next/link"
import logoImg from '@/assets/logo.png'
import styles from './header-main.module.css'
import Image from "next/image"
import MainHeaderBackground from "../main-header-background/main-header-background"
import NavLink from "../nav-link/nav-link"

export default function MainHeader() {

    return (
        <>
            <MainHeaderBackground />

            <header className={styles.header}>
                <Link href={'/'} className={styles.logo}>
                    <Image src={logoImg} alt="logo, a plate of food" priority />
                    NextLevel Food
                </Link>

                <nav className={styles.nav}>
                    <ul>
                        <li>
                            <NavLink href='/meals'> Meals</NavLink>
                        </li>
                        <li>
                            <NavLink href='/community'>Foodies Community</NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        </>
    )
}