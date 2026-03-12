import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'
import BlogCard from './BlogCard';
import { projects } from '../Constants/projects'
import { custom_blogs, medium_blogs, dev_to } from '../Constants/blogs'
import { useState, useEffect } from 'react';
import { headings, userinfo, buttonTexts } from '../Constants/userinfo'
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from './Experiences';
import contactStyles from '../styles/Contact.module.css'
import Link from 'next/link'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import logo from '../styles/PoleKisses_LogoTransparent.png'
import Image from 'next/image';



const helenAbout = ({ currentTheme }) => {
  const iconStyles = {
    backgroundColor: currentTheme.accent,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  }

    const [blogList, setBlogList] = useState([])

    // CUSTOM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR CUSTOM BLOGS
    useEffect(() => {
        setBlogList(custom_blogs)
    }, [])

    // MEDIUM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR MEDIUM BLOGS
    // useEffect(() => {
    //     fetch(`https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@${medium_blogs.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data.items))
    //         .catch(err => console.error(err));
    // }, [])

    // DEV.TO BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR DEV.TO BLOGS
    // useEffect(() => {
    //     fetch(`https://dev.to/api/articles?username=${dev_to.username}`)
    //         .then(response => response.json())
    //         .then(data => setBlogList(data))
    //         .catch(err => console.error(err));
    // }, [])

    return (
        <div>
          <div data-aos="fade-up">
            {/* <div align="center" >
         <Image size="xl" name="helen" src={logo} width={400} height={400}/>
         </div> */}
            <div className={styles.aboutPersonHeading}>Helen Oliviero</div>
            <div className={styles.aboutPersonSubHeading}> Makeup Artist</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/helens.huemua/'><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://olivierohelen.myportfolio.com/'><a target="_blank"><FontAwesomeIcon icon={faLink} /></a></Link>            
            </div>
         
            </div>
            <div className={styles.aboutPersonText} >
              <p>Helen Oliviero is a Las Vegas-based Makeup Artist and a graduate of the L Makeup Institute, where she completed specialized programs in Beauty, Hair Styling, Airbrush, and Advanced SFX Prosthetics. Her technical excellence was recognized early in her career when she was awarded "Best in Class" for Hair at the institute.</p>
              <br/>
                <p>Helen’s professional film credits highlight her range in both specialized character work and traditional beauty for the screen. Her portfolio includes SFX prosthetic work for Sav Rodgers’ <i>Pancake Skank</i> and SFX artistry for John DiMarco’s <i>Missing</i>. </p>
                <br/>
              <p>In addition to her work with practical effects, she provides comprehensive beauty makeup and hair styling for film productions, ensuring a cohesive look across various genres.
              Beyond her work on set, she utilizes her production background to create and edit digital content for the beauty industry.
              </p>
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>

            </div> 
            </div>
        </div>
    )
}

export default helenAbout
