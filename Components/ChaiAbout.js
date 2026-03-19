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
import { faImdb, faInstagram } from '@fortawesome/free-brands-svg-icons';



const chaiAbout = ({ currentTheme }) => {
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
            <div className={styles.aboutPersonHeading}>Chai Simone</div>
            <div className={styles.aboutPersonSubHeading}> Art Director & Production Designer</div>
            <div className={contactStyles.socialIconAbout} >
            <div className={contactStyles.socialIcon} style={iconStyles} >
                 <Link href='' ><a target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></Link>            
               </div>
            <div className={contactStyles.socialIcon} style={iconStyles} >
                    <Link href='https://www.imdb.com/name/nm12009235/'><a target="_blank"><FontAwesomeIcon icon={faImdb} /></a></Link>            
            </div>
         
            </div>
            <div className={styles.aboutPersonText} >
              <p>Chai Simone is a queer, multifaceted artist born and raised in Las Vegas. Following her education at Las Vegas Academy and UNLV majoring in visual art and film, Simone's interests and output intersects between different artforms. </p>
                <br/>
                <p>Her first graphic novel, <i>Just Another Meat-Eating Dirtbag</i>, written by Michael Anthony, was published in 2022 by Street Noise. Shortly after, Simone would go on applying her love for the arts to film as a director, writer, art director, puppet maker, production designer, stylist, creature designer, storyboard artist, and whatever else she could get her hands on in the art department. She also enjoys creative photography and has been writing as a film critic for <a href='http://filmsnobreviews.com/' target='_blank'><u>Filmsnobreviews.com</u></a> since 2019, having attended festivals such as Sundance and Fantastic Fest. </p>
                 <br/>
                 
               <p> A lover of nu metal music, horror movies, and any video essay over an hour long, Simone currently resides in her hometown with her partner and cat, currently working as a painter, freelance illustrator, and in the art department for film. </p>
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#crew"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>{buttonTexts.returnToCrew}</a></Link>
                </div>

            </div> 
            </div>
        </div>
    )
}

export default chaiAbout
