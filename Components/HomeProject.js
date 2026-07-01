import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
// import goFundMe from '../styles/GoFundMe_logo.png';
import indieGogo from '../styles/indiegogo-logo.png';
import { faMoneyBill, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';
import contactStyles from '../styles/Contact.module.css';

const HomeProject = ({ currentTheme, project, id }) => {
    return (
        
        <div className={styles.projectmain} style={{borderColor: currentTheme.accent, borderRadius: id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0'}}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon} style={{color: currentTheme.accent, backgroundColor: currentTheme.footerColor, borderColor: currentTheme.accent, cursor: 'default'}}>
                    <FontAwesomeIcon icon={faMoneyCheck} />
                    <i class="fa fa-money-check-dollar" title="edit"></i>
                    </div>
                    {/* <div align="center" style={{paddingBottom:10}}>
                    <h1 className={styles.projectTitle}>Want to join?</h1>
                    </div> */}
              
               <div align='center' >
                <a href='https://www.indiegogo.com/en/projects/shanav/pole-kisses-short-film' target='_blank'><img src={indieGogo.src} width={400} height={75}/> </a>
                </div>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext, paddingTop: 20}}> Become a valuable part of our filmmaking journey by following our project on Indiegogo. 
                <br/>NOW LIVE - CLOSES AUGUST 14</h2>
                <div className={contactStyles.submit} style={{ backgroundColor: currentTheme.accent }}>
              <Link href='https://www.indiegogo.com/en/projects/shanav/pole-kisses-short-film'> MAKE A PLEDGE HERE</Link>
              {/* <Link href='https://www.indiegogo.com/en'>DONATE HERE</Link> */}
            </div>
                {/* <Link href='/work'><a className={styles.cta2} style={{ color: currentTheme.tertiary }}>View More</a></Link> */}
            </div>
        </div>
    )
}

export default HomeProject
