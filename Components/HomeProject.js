import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTelegramPlane } from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'
import Image from 'next/image';
// import goFundMe from '../styles/GoFundMe_logo.png';
import indieGogo from '../styles/indiegogo-logo.png';
import { faMoneyBill, faMoneyCheck } from '@fortawesome/free-solid-svg-icons';

const HomeProject = ({ currentTheme, project, id }) => {
    return (
        
        <div className={styles.projectmain} style={{borderColor: currentTheme.accent, borderRadius: id % 2 === 0 ? '50px 0 0 0' : '0 0 50px 0'}}>
            <div className={styles.projectContent}>
                <div className={styles.projectIcon} style={{color: currentTheme.accent, backgroundColor: currentTheme.footerColor, borderColor: currentTheme.accent}}>
                    <FontAwesomeIcon icon={faMoneyCheck} />
                    <i class="fa fa-money-check-dollar" title="edit"></i>
                    </div>
                {/* <h1 className={styles.projectTitle}>{project.name}</h1> */}
                {/* <a href='https://www.gofundme.com/' target='_blank'><Image src={indieGogo} width={300} height={100}/> </a> */}
               <div align='center'>
                <a href='https://www.indiegogo.com/en' target='_blank'><Image src={indieGogo} width={400} height={75}/> </a>
                </div>
                <h2 className={styles.projectSubTitle} style={{color: currentTheme.subtext}}>{project.description}</h2>
                {/* <Link href='/work'><a className={styles.cta2} style={{ color: currentTheme.tertiary }}>View More</a></Link> */}
            </div>
        </div>
    )
}

export default HomeProject
