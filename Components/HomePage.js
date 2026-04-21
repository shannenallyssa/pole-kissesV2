import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt, faLink } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'
import logo from '../styles/PoleKisses_LogoTransparent.png'
import Contact from './Contact'
import React from 'react'
import { Box, Avatar, Center } from "@chakra-ui/react"
import workStyles from '../styles/Work.module.css'
import { Stack, Input, Textarea, useToast } from "@chakra-ui/react"
import { useRef, useState } from 'react'
import contactStyles from '../styles/Contact.module.css'
import emailjs from "@emailjs/browser";

import placeHolder from '../styles/PoleKisses_LogoTransparent.png'
import { faImdb, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'



const HomePage = ({ currentTheme }) => {

  const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const iconStyles = {
    backgroundColor: currentTheme.accent,
    color: '#101010',
    boxShadow: currentTheme.boxShadow,
  }

  const sendEmail = (e) => {
    console.log("[E]", form.current);
    e.preventDefault();
    setLoading(true);

    emailjs

      .sendForm(
        "service_evahxl9", // e.g., service_gmail

        "template_u9g481h", // e.g., template_contact

        form.current,

        "tqAoOA5P9WonkHdvB" // e.g., your user/public key from EmailJS
      )

      .then(
        (result) => {
          console.log(result.text);

          // setStatus("SUCCESS");

          toast({
                 description: "You reached us!",
                 status: "success",
                 duration: 5000,
                 isClosable: true,
               });

          setName('')
          setEmail('')
          setMessage('')
          setLoading(false)
        },

        (error) => {
          console.log("ERROR", error.text);

          setLoading(false)

          setStatus("FAILED");
          toast({
            description: "Failed to Send. Please Try Again.",
            status: "failed",
            duration: 5000,
            isClosable: true,
          });
        }
      );
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault()
  //   console.log('Sending')
  //   let data = {
  //     name: name,
  //     email: email,
  //     phone: phone,
  //     message: message
  //   }
  //   setName('')
  //   setEmail('')
  //   setPhone('')
  //   setMessage('')

  //   toast({
  //     description: "You reached us!",
  //     status: "success",
  //     duration: 5000,
  //     isClosable: true,
  //   })

  //   fetch('/api/contact', {
  //     method: 'POST',
  //     headers: {
  //       'Accept': 'application/json, text/plain, */*',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(data)
  //   }).then((res) => {
  //     console.log('Response received')
  //     if (res.status === 200) {
  //       console.log('Response succeeded!')
  //       setSubmitted(true)
  //       setName('')
  //       setEmail('')
  //       setPhone('')
  //       setMessage('')
  //     }
  //   })
  // }

  console.log('[crewlist]', userinfo.crew.crewList.socials)
    return (
        <div>
            <div id='home' className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                {/* <h1 className={styles.heading}>{userinfo.greeting.title}</h1> */}
                {/* <img src={"/styles/PoleKisses_LogoTransparent.png"} /> */}
                <div  styles={styles.headingImage}>
                <img data-aos="fade-up" src={logo.src} alt='thumbnail image' height="600" width="600"/>
                </div>
                {/* <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2> */}
                {/* <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>{ctaTexts.landingCTA}</a></Link> */}
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <i><p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up"> 'A timid pole dancing student must overcome her insecurities when she develops feelings for her more experienced classmate.' </p> </i>
                <br/>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up"><i>Pole Kisses</i> is an upcoming short film based in Las Vegas, Nevada. With a blend of humor, drama, and specialized dance sequences, screenwriter SHANNEN VELASCO has created a female-driven narrative that celebrates femininity, queerness, and— <i>of course </i>— the art and athleticism behind pole dancing. Led by award-winning short film director KRISTINA MCHALE, this production has compiled a diverse and passionate team of filmmakers to bring this story of self-discovery to life.</p>
                <br/>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up"> Principal photography is set to begin in September 2026.</p>
                {/* <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>{ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div> */}
            </div>

            {/* FUNDING SECTION - UNCOMMENT WHEN FUNDING CAMPAIGN IS AVAILABLE */}
            {/* <div className={styles.homeWorkSection} id="funding">
                <h1 className={styles.workheading} data-aos="fade-up">{headings.workHomePage}</h1>
                {
                    projects.slice(0, 3).map((project, key) => {
                        return (
                            <div key={key} data-aos="fade-up">
                                <HomeProject currentTheme={currentTheme} project={project} id={key} />
                            </div>
                        )
                    })
                }
                   </div> */}


                   <div className={workStyles.crewWrapper}>
              <div id="crew" className={workStyles.experienceWrapper}>
            <h1 className={workStyles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{headings.experience}</h1>
            <div className={workStyles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                {
                    userinfo.crew.crewList ?
                    userinfo.crew.crewList.map((crewMember, key) => {
                            return (
                                <div className={workStyles.experienceCard} key={key} data-aos="fade-up" id={crewMember.crewName}>
                                    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                                        <div style={{ background: currentTheme.secondary, height: '110px'}}></div>
                                        <div className={workStyles.experienceCardContent}>
                                            <h1>{crewMember.crewName}</h1>
                                            <div className={workStyles.avatar}>
                                             
                                            </div>
                                            <div style={{ position: 'relative', top: '20px' }}>
                                                <h2><i>{crewMember.position}</i></h2>
                                                <div  style={{ textAlign: 'center', padding: 20, paddingTop: 20, position: 'center', color: currentTheme.subtext }}>
                                                    <Link href={crewMember.aboutLink}><a className={contactStyles.aboutButton} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`,  alignItems: 'center' }}>ABOUT</a></Link>
                                                </div>
                                               
                                                {/* <div>
                                                <div className={contactStyles.submit} style={{ backgroundColor: currentTheme.accent }}>
                                              <button type="submit">About</button>
                                            </div></div> */}
                                                {/* <h3>{crewMember.description}</h3> */}
                                                <div className={contactStyles.socialIconDiv} >
                                                  {crewMember.instagram &&
                                                <div className={contactStyles.socialIcon} style={iconStyles} key={key}>
                                                   <Link href={crewMember.instagram}><a><FontAwesomeIcon icon={faInstagram} /></a></Link>            
                                               </div>
                                               }
                                                  {crewMember.website &&
                                                <div className={contactStyles.socialIcon} style={iconStyles} key={key}>
                                                   <Link href={crewMember.website}><a ><FontAwesomeIcon icon={faLink} /></a></Link>            
                                               </div>
                                               }
                                                  {crewMember.imdb &&
                                                <div className={contactStyles.socialIcon} style={iconStyles} key={key}>
                                                   <Link href={crewMember.imdb}><a><FontAwesomeIcon icon={faImdb} /></a></Link>            
                                               </div>
                                               }
                                                  {crewMember.linkedIn &&
                                                <div className={contactStyles.socialIcon} style={iconStyles} key={key}>
                                                   <Link href={crewMember.linkedIn}><a><FontAwesomeIcon icon={faLinkedin}/></a></Link>            
                                               </div>
                                               }
                                             
      
                                        </div>
      
                                            </div>
                                            {/* <h4 style={{ color: currentTheme.subtext }}>{crewMember.time}</h4> */}
                                        </div>
                                    </Box>
                                </div>
                            )
                        }) : null
                }
            </div>
            </div>
                <div style={{ textAlign: 'center', paddingBottom: '2rem' }}>
                    {/* <Link href="/work"><a className={styles.cta3} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText }}>{ctaTexts.workCTA} <span>&gt;</span></a></Link> */}
                    </div>
            </div>
            <div id="contact" className={contactStyles.contactFullDiv} data-aos="fade-up">
            <div className={contactStyles.contactWrapper}>
      <div className={contactStyles.contactHeading}>
        <h2 className={contactStyles.contact}>{headings.contact}</h2>
      </div>
      <form ref={form} onSubmit={(e) => { sendEmail(e) }} className={contactStyles.form} style={{ borderColor: currentTheme.text, backgroundColor: currentTheme.name === 'light' ? '#fafafa' : 'transparent' }}>
        <Stack spacing={4}>
          <Input type="text" name="name" id="name" value={name} placeholder="Your Name" focusBorderColor={currentTheme.tertiary} isRequired autoComplete="off" onChange={(e) => { setName(e.target.value) }} />
          <Input type="email" name="email" id="email" value={email} placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => { setEmail(e.target.value) }} />
          <Textarea
            placeholder="Your Message"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            type="message"
            id="message"
            name="message"
            rows="5"
            value={message}
            autoComplete="off"
            onChange={(e) => { setMessage(e.target.value) }}
          />
          <div>
            <div align="center" >
              <button className={contactStyles.submit} id="submit" type="submit" disabled={loading}>{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>
      <div style={{ textAlign: 'center'}}>
      <p>Or send us a message at </p>
        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><u>{userinfo.contact.email}</u></a></Link>
      </div>
      {/* {
        userinfo.contact.phone ?
          <div style={{ textAlign: 'center', paddingTop: '0.2rem', color: currentTheme.tertiary }}>
            <Link href={`tel:${userinfo.contact.countrycode}${userinfo.contact.phone}`}><a>{`${userinfo.contact.countrycode}${userinfo.contact.phone}`}</a></Link>
          </div> : null
      } */}
      {/* <div className={styles.socialIconDiv}>
        {userinfo.socials ?
          userinfo.socials.map((social, key) => {
            return (
              <div className={styles.socialIcon} style={iconStyles} key={key}>
                <Link href={social.link}><a><FontAwesomeIcon icon={social.icon} /></a></Link>
              </div>
            )
          }) : null
        }
      </div> */}
    </div>
            {/* <div id="skills" className={styles.homeSkillSection} style={{ backgroundColor: currentTheme.secondary }}>
                <Skills currentTheme={currentTheme} />
            </div>
            <div>
                {
                    userinfo.education.visible ? <Education currentTheme={currentTheme} /> : null
                }
            </div> */}
        </div>
        </div>
    )
}

export default HomePage
