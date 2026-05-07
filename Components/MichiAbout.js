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



const michiAbout = ({ currentTheme }) => {
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
          <img src="/MichiAbout.jpeg" alt='glamour shot of Michi Kollette' height='375' width='350'/>
          </div>
            <div className={styles.aboutPersonHeading}>Michi Kollette</div>
            <div className={styles.aboutPersonSubHeading}> Actress - VIOLET</div>
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
                 Lorem Ipsum
              </p>
              <br/>
              <p>
                 Lorem Ipsum
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

export default michiAbout
