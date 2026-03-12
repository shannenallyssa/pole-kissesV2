import styles from '../styles/NavbarFooter.module.css';
import { userinfo } from '../Constants/userinfo'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../styles/PoleKisses_LogoTransparent.png'
import contactStyles from '../styles/Contact.module.css'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = ({ currentTheme }) => {
    const iconStyles = {
        backgroundColor: currentTheme.accent,
        color: '#101010',
        boxShadow: currentTheme.boxShadow,
      }
    return (
        <div className={styles.footercontent} style={{ backgroundColor: currentTheme.footerColor, color: currentTheme.subtext }}>
            <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr>
         
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
               
                    {/* <Link href='/#home'><a><h1>↑ Back to Top ↑ </h1></a></Link>
                     */}
                    <div style={{paddingTop:10}}>
                    <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href=''><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            </div>
                        {/* <div align='center'>
                    <Image src={logo} alt='thumbnail image' height='100' width='100'/>
                    </div> */}
                    <Link href='/#home'><a> Home </a></Link>
                    <b>|</b>
                    <Link href='/#about'><a> About </a></Link>
                    <b>|</b>
                    <Link href='/#funding'><a> Funding </a></Link>
                    <b>|</b>
                    <Link href='/#crew'><a> Crew </a></Link>
                    <b>|</b>
                    <Link href='/#contact'><a> Contact </a></Link>
                    </div>
            
            {/* <hr style={{ height: '1px', backgroundColor: currentTheme.subtext, border: 'none', opacity: '0.5' }}></hr> */}
            {/* <h2 className={styles.footercontent} style={{color: currentTheme.lightText}}>Template by Asavari Ambavane</h2> */}
            <h2  style={{color: currentTheme.lightText}}>Pole Kisses © {new Date().getFullYear()} Shannen Velasco </h2>
        </div>
    )
}

export default Footer
