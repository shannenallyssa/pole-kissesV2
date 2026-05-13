import styles from '../styles/Work.module.css'
import WorkProject from './WorkProject'
import BlogCard from './BlogCard';
import { projects } from '../Constants/projects'
import { custom_blogs, medium_blogs, dev_to } from '../Constants/blogs'
import { headings, userinfo, buttonTexts } from '../Constants/userinfo'
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from './Experiences';
import contactStyles from '../styles/Contact.module.css'
import Link from 'next/link'
import { faLink } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImdb, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { React, useState, useEffect } from 'react';
import { Pagination, Navigation, Keyboard } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import swiperStyles from '../styles/Swiper.module.css'


// import ArtDeck from '/POLE KISSES Art Direction and Production Design Deck.pdf'





const OurVision = ({ currentTheme }) => {
  const iconStyles = {
    backgroundColor: currentTheme.accent,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  }
  const creativeDeck = [
    'https://source.unsplash.com/random/800x400?sig=1',
    'https://source.unsplash.com/random/800x400?sig=2',
    'https://source.unsplash.com/random/800x400?sig=3',
  ];
  
  
  

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
            <div className={styles.aboutPersonHeading}>Our Vision</div>
            <div className={styles.aboutPersonSubHeading}> Creative Deck</div>
           <div>
           <div className='control-section'>
    {/* Render the PDF Viewer */}
    <div>
<div className={swiperStyles.swiper} style={{paddingLeft:"30%", paddingRight:"30%"}}>
   <Swiper
        pagination={{
          type: 'progressbar',
        }}
        // keyboard={{
        //   enabled: true,
        // }}
        loop={true}
        navigation={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <div className={swiperStyles.slide}>
        <SwiperSlide><img src="/CreativeDeck1.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck2.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck3.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck4.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck5.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck6.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck7.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck8.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck9.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck10.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck11.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck12.png"/></SwiperSlide>
        <SwiperSlide><img src="/CreativeDeck13.png"/></SwiperSlide>
        </div>
      </Swiper>
</div>
    </div>
    </div>
           </div>
           <br/>
           <div className={styles.aboutPersonSubHeading}> Art Deck </div>
           <div>
<div className={swiperStyles.swiper} style={{paddingLeft:"30%", paddingRight:"30%"}}>
   <Swiper
        pagination={{
          type: 'progressbar',
        }}
        // keyboard={{
        //   enabled: true,
        // }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <div className={swiperStyles.slide}>
        <SwiperSlide><img src="/ArtDirectionTitle.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection1.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection2.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection3.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection4.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection5.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection6.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection7.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection8.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection9.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection10.png"/></SwiperSlide>
        <SwiperSlide><img src="/ArtDirection11.png"/></SwiperSlide>
        </div>
      </Swiper>
</div>
    </div>
           <br/>
           <div className={styles.aboutPersonSubHeading}> Costume Lookbook </div>
           <div>
<div className={swiperStyles.swiper} style={{paddingLeft:"30%", paddingRight:"30%"}}>
   <Swiper
        pagination={{
          type: 'progressbar',
        }}
        // keyboard={{
        //   enabled: true,
        // }}
        navigation={true}
        loop={true}
        modules={[Pagination, Navigation, Keyboard]}
        className="mySwiper"
      >
        <div className={swiperStyles.slide}>
        <SwiperSlide><img src="/LookbookTitlePage.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookIntro.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookFemaleGaze.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookFantasyTitle Page.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookDomRoxie.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookSubViolet.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookFantasyTitle Page2.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookClassicRoxie.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookContemporaryViolet.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookStudioTitlePage.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookStudioRoxanne.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookStudioViolet.png"/></SwiperSlide>
        <SwiperSlide><img src="/LookbookHair.png"/></SwiperSlide>
        </div>
      </Swiper>
</div>
    </div>
            <div className={styles.aboutPersonText} >
              <div  style={{ textAlign: 'center', padding: 20, paddingTop: 30, position: 'center', color: currentTheme.subtext }}>
                    <Link href="/#about"><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>BACK</a></Link>
                </div>

            </div> 
            </div>
        </div>
    )
}

export default OurVision
