import { useState, useEffect } from 'react'
import styles from '../styles/NavbarFooter.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

const Navlinks = () => {
    const router = useRouter()
    const [activeLink, setActiveLink] = useState('/')

    useEffect(() => {
        setActiveLink(router.asPath)
    }, [router.asPath])

    return (
        <>
            <div className={styles.navlinks}>
                <Link href='/#home'><a style={{ opacity: activeLink === '/#home' ? '100%' : '80%' }}>Home</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#about'><a style={{ opacity: activeLink === '/#about' ? '100%' : '80%' }}>About</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#funding'><a style={{ opacity: activeLink === '/#funding' ? '100%' : '80%' }}>Funding</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#crew'><a style={{ opacity: activeLink === '/#crew' ? '100%' : '80%' }}>Crew</a></Link>
            </div>
            <div className={styles.navlinks}>
                <Link href='/#contact'><a style={{ opacity: activeLink === '/#contact' ? '100%' : '80%' }}>Contact</a></Link>
            </div>
        </>

    )
}

export default Navlinks
