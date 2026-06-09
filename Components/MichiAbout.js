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
          <img src="/MichiAbout.jpg" alt='glamour shot of Michi Kollette' height='375' width='350'/>
          </div>
            <div className={styles.aboutPersonHeading}>Michi Kollette</div>
            <div className={styles.aboutPersonSubHeading}> Actress - VIOLET</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='https://www.instagram.com/michigo.xo/' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
    
            </div>
            <div className={styles.aboutPersonText} >
              <p> 
              Michi Kollette is a queer Filipino-Japanese Actor, Dancer, and Musician from the Bay Area, California. Now a Vegas local, they are a member of the local urban dance team Exodus and bassist of fem-fronted metal band Lunacy. In their spare time they participate in their local ballroom scene - training hand performance vogue; and have studied pole dance at home for roughly 3 years. Their love for acting began in their hometown theatre productions, then made its way online with narration, impression work, and vocals. Only briefly stepping into student film and industry work before lockdown, they are ecstatic to return to acting with their first lead film role.
              </p>
              <br/>
              <p>
              As a sapphic & non-binary individual - participating in beauty pageants from age 2-12 years old - Michi formed a complicated relationship with gender, confidence, and femininity. In many ways, Michi has used performance to navigate this journey, pulling from each new pursuit new tools of expression. Taking one pole class led by a male instructor in 2023 - Michi found pole dance as a way to reconnect with their femininity on their own terms. Within this space: strength, sensuality, softness, and emotion combined into the most physically challenging yet cathartic form of performance they’ve ever encountered. This intersection of queer identity, feminine confidence, and pole dance drew Michi instantly to this project - where they aim to bring upmost care to the role of Violet.
              </p>
              <br/>
              <p>
              Outside of performance, Michi is passionate about activism and community - wishing to dedicate their life to advocating for queer rights. A dual graduate of Criminology and Psychology, they aim to acquire a PhD. in Counseling Psychology with focus on Asian-American and LGBTQIA+ mental health. 
              </p>
             <br/>
             <p>
             Growing up with minimal representation and countless “queer stories” written by straight-cis men, Michi is honored to be supported by the fully fem team behind Pole Kisses.
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
