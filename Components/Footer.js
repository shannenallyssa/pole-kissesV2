import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'

const Footer = ({ currentTheme }) => {
    return (
        <div className={styles.footermain} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
            <br/>
                {/* <Link href='/'><a><h2 className={styles.footerlogo}>{userinfo.logoText}</h2></a></Link> */}
                {/* <ul>
                    <li className={styles.listHeading}>Socials</li>
                    {userinfo.socials ?
                        userinfo.socials.map((social, key) => {
                            return (
                                <Link href={social.link} key={key}><a><li>{social.type}</li></a></Link>
                            )
                        }) : null
                    }
                    <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><li>Mail</li></a></Link>
                </ul> */}
               
                    <Link href='/#home'><a><h1>↑ Back to Top ↑ </h1></a></Link>
                    
                    
                    {/* <Link href='/#about'><a> About </a></Link>
                    <b>|</b> */}
                    <Link href='/#about'><a> About </a></Link>
                    <b>|</b>
                    <Link href='/#funding'><a> Funding </a></Link>
                    <b>|</b>
                    <Link href='/#crew'><a> Crew </a></Link>
                    <b>|</b>
                    <Link href='/#contact'><a> Contact </a></Link>
               
            
            {/* <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr> */}
            {/* <h2 className={styles.footercontent} style={{color: currentTheme.lightText}}>Template by Asavari Ambavane</h2> */}
            <h2 className={styles.footercontent} style={{color: currentTheme.lightText}}>Pole Kisses © {new Date().getFullYear()} Shannen Velasco </h2>
        </div>
    )
}

export default Footer
