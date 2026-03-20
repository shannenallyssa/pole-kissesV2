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




const sharmaineAbout = ({ currentTheme }) => {
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
            <div className={styles.aboutPersonHeading}>Sharmaine Velasco</div>
            <div className={styles.aboutPersonSubHeading}> Composer </div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/artanna.exe/' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            </div>
            <div className={styles.aboutPersonText} >
           <p>Sharmaine Velasco is a Filipina filmmaker who studied at University of Las Vegas (UNLV) graduating with a BA in film. Though her focus was in video editing, she found her home as a composer and a producer. A music lover from a young age, she’s a vocalist as well as a writer and is self taught in many instruments. With over 15+ years of personal writing experience, she experiments with different genres whenever she can. From pop to classical, she can do it all.</p> 
         <br/>
            <p>Known for her work on award winning documentary, <i>Home: A Mother of 3000</i>, web series, <i>Local Time</i>, and upcoming short film, <i>Gamu-Gamo</i>, she has adapted to musical styles as needed, throwing herself into the history and culture of the music to better understand it. Her aim with <i>Pole Kisses</i>  is to create a soundscape featuring vivid and sultry instrumentals, while still giving an ode to r&b stylings. She’s even using her skills as a lyricist to write an original song to be performed for the film to pair with the choreography. </p>
            <br/>
            <p>Currently, Sharmaine is a video editor for an ad agency, though takes on many composing jobs where she can, especially for stories she believes in, including <i>Pole Kisses</i>.</p>


              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>

            </div> 
            </div>
        </div>
    )
}

export default sharmaineAbout
