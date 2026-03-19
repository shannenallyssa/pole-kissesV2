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
import React from "react";
import ReactPlayer from "react-player";



const kristinaAbout = ({ currentTheme }) => {
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
            <div className={styles.aboutPersonHeading}>Kristina McHale</div>
            <div className={styles.aboutPersonSubHeading}> Director</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/xt.na/'><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://xtinamchale.com/'><a target="_blank"><FontAwesomeIcon icon={faLink} /></a></Link>            
            </div>
         
            </div>
            <div className={styles.aboutPersonText} >
              <p>Kristina McHale is an Irish-Filipino writer and director born and raised in Okinawa, Japan. She moved to Las Vegas in 2017 to attend the University of Nevada, Las Vegas, where she earned a B.A. in Film. Her work explores stylized, atmospheric worlds that blend tension, vulnerability, and surreal visual storytelling. Outside of directing, she works as a commercial art director and as a food and prop stylist, experiences that shape her visual approach to filmmaking.</p>
              <br/>
              <p>Her short film Omakase won Best Thriller Short at the 2024 Indie Vegas Film Festival and was a Quarter Finalist at lil’ Spooky fest the same year. Her previous short, Oyasumi, received the Most Original Concept Award at the Oregon Short Film Festival in 2021 and was also recognized as an Award Winner at the Florence Film Awards in 2020.</p>
              <br/>
              <p>She was drawn to the story of Pole Kisses because of the unique perspective on femininity and the relationship between performance and vulnerability. She feels a connection to the main character as she navigates her own sensuality while trying to untangle feelings of admiration and identity. With Pole Kisses, she hopes to bring a stylized yet intimate perspective to a story about identity, desire, and self-discovery.</p>
              <div align="center" style={{padding:20}}>
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
          </div>
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>
            </div> 
            </div>
        </div>
    )
}

export default kristinaAbout
