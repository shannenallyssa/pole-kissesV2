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



const mariaAbout = ({ currentTheme }) => {
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
          <img src="/MariaAbout.png" alt='glamour shot of Maria Tran' height='375' width='350'/>
          </div>
            <div className={styles.aboutPersonHeading}>Maria Trần</div>
            <div className={styles.aboutPersonSubHeading}> Director</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/mariatran.co/' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://www.mariatran.com/?utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAc3J0YwZhcHBfaWQMMjU2MjgxMDQwNTU4AAGnn5K2XxZPowiPrK7PsExichg3LF1Q0Aqv0XheBQqZOpEPZi0ijpPDyTvyS1c_aem_YLAV0Szu6geWfZ5dV5A3xg'><a target="_blank"><FontAwesomeIcon icon={faLink} /></a></Link>            
            </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://www.imdb.com/name/nm3489824/'><a target="_blank"><FontAwesomeIcon icon={faImdb} /></a></Link>            
            </div>

            </div>
            <div className={styles.aboutPersonText} >
              <p> Maria Trần is a multidisciplinary creative (film director, actor, producer) from Australia, now based in Las Vegas, and the founder of Phoenix Eye Films, a female-led production company. She holds a Bachelor of Psychology.
              </p>
              <br/>
              <p>
                  She developed and directed the <i>Echo 8 Trilogy</i>, an independent action feature film series produced outside traditional industry systems and released on Amazon Prime. Rooted in microbudget filmmaking, her work emphasizes efficiency, physical storytelling, and practical execution, while centering female-led narratives within genre-driven stories.
              </p>
              <br/>
              <p>
                  Her early career includes work on international productions with Jackie Chan and Roger Corman, contributing to her foundation in action filmmaking. In addition to her feature work, Maria has directed short films including <i>Operation Kung Flu</i>, <i>Obsidian</i>, and <i>Hit Girls</i>. She received Best Director for the horror film <i>Midnight Never Sleeps</i>, starring Ana Thu Nguyen (Mortal Kombat 2).
              </p>
              <br/>
              <p>
                  Maria has delivered over 100 workshops in acting and filmmaking across Australia and internationally, and has been featured as a speaker at TEDx. She is a Community Leader with the Sundance Institute Collab program (2025–2026) and teaches at the Las Vegas Actor’s Academy.
              </p>
              <br/>
              <p>

                  She also works as a game show host for Family Feud Live at the MGM Grand, provides business and creative consulting for the Las Vegas business community, and leads the Vegas Asian Network.

              </p>
              <br/>
              {/* <div align="center" style={{padding:20}}>
                <div  className={styles.video} >
            <ReactPlayer
              url="https://youtu.be/lWDgz7Za3EA"
              controls={true}
              volume={.5}
              width='relative'
              config={{
                youtube: {
                  playerVars: { color: "white" },
                },
              }}
            />
            </div>
          </div> */}
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default mariaAbout
