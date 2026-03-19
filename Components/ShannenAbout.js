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




const shannenAbout = ({ currentTheme }) => {
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
            <div className={styles.aboutPersonHeading}>Shannen Velasco</div>
            <div className={styles.aboutPersonSubHeading}> Executive Producer & Writer</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/realshannenigans/' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://shannenvelascovo.vercel.app'><a target="_blank"><FontAwesomeIcon icon={faLink} /></a></Link>            
            </div>
            </div>
            <div className={styles.aboutPersonText} >
              <p>Shannen Velasco is an actor and writer based in Las Vegas, Nevada. Since graduating from the University of Nevada, Las Vegas film program in 2021, they have been steadily learning more about the industry through acting in various independent short films, narrative podcasts, audio books, and video games. <i>Pole Kisses</i> is set to be their first venture on the other side of production as an executive producer.</p>
              <br/>
                <p> Inspired by their experiences as a queer pole dancing student, they originally wrote <i>Pole Kisses </i> as a submission for the 2021 UNLV “Write Stuff Screenwriting Competition” and was pleased to receive honorable mention for the original draft. After years of workshopping the screenplay, they are ecstatic to see it come to life with a strong team of dedicated and highly skilled filmmakers. </p>
              <br/>
                <p> Outside of their acting and screenwriting pursuits, they enjoy creating comedic content online as well as supporting the local band scene in Las Vegas. </p>
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>

            </div> 
            </div>
        </div>
    )
}

export default shannenAbout
