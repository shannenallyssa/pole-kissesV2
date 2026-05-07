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
import { faInstagram, faImdb} from '@fortawesome/free-brands-svg-icons';
import React from "react";
import ReactPlayer from "react-player";



const jadaAbout = ({ currentTheme }) => {
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
          <div align="center" className={styles.aboutHeadshot}>
          <img src="/TaylorJayneAbout.jpeg" alt='glamour shot of Jada Jones' height='375' width='350'/>
          </div>
            <div className={styles.aboutPersonHeading}>Jada Jones</div>
            <div className={styles.aboutPersonSubHeading}> Actress - ROXANNE</div>
            {/* <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/mariatran.co/' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://www.mariatran.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnn5K2XxZPowiPrK7PsExichg3LF1Q0Aqv0XheBQqZOpEPZi0ijpPDyTvyS1c_aem_YLAV0Szu6geWfZ5dV5A3xg'><a target="_blank"><FontAwesomeIcon icon={faLink} /></a></Link>            
            </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://www.imdb.com/name/nm3489824/'><a target="_blank"><FontAwesomeIcon icon={faImdb} /></a></Link>            
            </div>

            </div> */}
            <div className={styles.aboutPersonText} >
              <p> 
              </p>
              <br/>
              <p>
              Jada Jones is a multifaceted performer whose work bridges the worlds of dance and film. She has been training in pole dance for the past two years, developing a strong foundation in both pole and heels choreography. Her movement style blends strength, fluidity, and sensuality, allowing her to convey emotion and story through every performance. She has also performed in burlesque shows, further refining her stage presence and ability to captivate live audiences.
              </p>
              <br/>
              <p>
              In addition to her dance background, Jada Jones has appeared in two feature films, continuing to build her on-screen experience and deepen her acting craft. This project marks her first lead role, a milestone that reflects her dedication to growth as a performer. She is especially drawn to roles that challenge her physically and emotionally, and that allow her to bring authenticity and vulnerability to the screen.
              </p>
              <br/>
              <p>
              Beyond acting, her experience in modeling and visual media has given her a keen understanding of presence, body awareness, and storytelling through the lens—skills that naturally elevate her performances.
              </p>
              <br/>
              <p>
              She was particularly drawn to this project for its celebration of pole dance as a powerful and positive art form. The all-female crew and cast and the diversity of women involved deeply resonated with her, making this story both meaningful and empowering to be a part of.
              </p>
              <br/>
              <p>
              Passionate, driven, and continuously evolving, Jada Jones is excited to bring depth, intention, and individuality to this role.
              </p>
             

              <br/>
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#cast"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default jadaAbout
