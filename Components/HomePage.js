import styles from '../styles/Home.module.css'
import Link from 'next/link'
import HomeProject from './HomeProject'
import Skills from './Skills'
import { projects } from '../Constants/projects'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons"
import { userinfo, ctaTexts, headings } from '../Constants/userinfo'
import Education from './Education'
import Image from 'next/image';
import blog from '../styles/PoleKisses_LogoTransparent.png'
import Contact from './Contact'
import React from 'react'
import { Box, Avatar } from "@chakra-ui/react"
import workStyles from '../styles/Work.module.css'
import { Stack, Input, Textarea, useToast } from "@chakra-ui/react"
import { useState } from 'react'
import contactStyles from '../styles/Contact.module.css'


import placeHolder from '../styles/PoleKisses_LogoTransparent.png'


const HomePage = ({ currentTheme }) => {

    const toast = useToast()

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [message, setMessage] = useState('')
  const [submitted, setSubmitted] = useState(false)

  // const iconStyles = {
  //   backgroundColor: currentTheme.tertiary,
  //   color: '#101010',
  //   boxShadow: currentTheme.boxShadow,
  // }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending')
    let data = {
      name: name,
      email: email,
      phone: phone,
      message: message
    }
    setName('')
    setEmail('')
    setPhone('')
    setMessage('')

    toast({
      description: "You reached us!",
      status: "success",
      duration: 5000,
      isClosable: true,
    })

    fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    }).then((res) => {
      console.log('Response received')
      if (res.status === 200) {
        console.log('Response succeeded!')
        setSubmitted(true)
        setName('')
        setEmail('')
        setPhone('')
        setMessage('')
      }
    })
  }
    return (
        <div>
            <div id='home' className={styles.homeheading} style={{ backgroundColor: currentTheme.secondary }}>
                {/* <h1 className={styles.heading}>{userinfo.greeting.title}</h1> */}
                {/* <img src={"/styles/PoleKisses_LogoTransparent.png"} /> */}
                <Image src={blog} alt='thumbnail image' height='600' width='600'/>
                {/* <h2 className={styles.subheading} style={{ color: currentTheme.subtext }}>{userinfo.greeting.subtitle}</h2> */}
                {/* <Link href="#work"><a className={styles.cta1} style={{ backgroundColor: currentTheme.accent, color: currentTheme.contrastText, boxShadow: currentTheme.boxShadow }}>{ctaTexts.landingCTA}</a></Link> */}
            </div>
            <div id="about" className={styles.homeAboutSection} style={{ backgroundColor: currentTheme.secondary }}>
                <h1 className={styles.workheading} data-aos="fade-up">{headings.about}</h1>
                <i><p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.logline}</p></i>
                <br/>
                <p className={styles.aboutText} style={{ color: currentTheme.subtext }} data-aos="fade-up">{userinfo.about.content}</p>
                {/* <div data-aos="fade-up" style={{ textAlign: 'center', padding: '1rem 0', margin: '1rem 0', position: 'relative', display: 'flex', color: currentTheme.subtext }}>
                    <Link href={userinfo.about.resume} target="_blank"><a className={styles.cta4} style={{ background: 'transparent', border: `2px solid ${currentTheme.subtext}`, display: 'flex', alignItems: 'center' }}>{ctaTexts.resumeCTA}&nbsp;&nbsp;&nbsp;&nbsp;<FontAwesomeIcon width="15px" height="15px" icon={faExternalLinkAlt} /></a></Link>
                </div> */}
            </div>
            <div className={styles.homeWorkSection} id="funding">
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
                <div id="crew" className={workStyles.experienceWrapper}>
            <h1 className={workStyles.workHeading} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">{headings.experience}</h1>
            <div className={workStyles.experienceCardWrapper} data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
                {
                    userinfo.crew.crewList ?
                    userinfo.crew.crewList.map((crewMember, key) => {
                            return (
                                <div className={workStyles.experienceCard} key={key} data-aos="fade-up">
                                    <Box borderWidth="1px" borderRadius="md" overflow="hidden">
                                        <div style={{ background: currentTheme.secondary, height: '150px' }}></div>
                                        <div className={workStyles.experienceCardContent}>
                                            <h1>{crewMember.crewName}</h1>
                                            <div className={workStyles.avatar}>
                                               {/* <Avatar size="xl" name={exp.company} src={exp.companylogo} /> */}
                                               <Image size="xl" name={crewMember.crewName} src={placeHolder} width={400} height={400}/>
                                            </div>
                                            <div style={{ position: 'relative', top: '20px' }}>
                                                <h2>{crewMember.position}</h2>
                                                {/* <h3>{crewMember.description}</h3> */}
                                            </div>
                                            <h4 style={{ color: currentTheme.subtext }}>{crewMember.time}</h4>
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
      <form onSubmit={(e) => { handleSubmit(e) }} className={contactStyles.form} style={{ borderColor: currentTheme.text, backgroundColor: currentTheme.name === 'light' ? '#fafafa' : 'transparent' }}>
        <Stack spacing={4}>
          <Input type="text" name="name" value={name} placeholder="Your Name" focusBorderColor={currentTheme.tertiary} isRequired autoComplete="off" onChange={(e) => { setName(e.target.value) }} />
          <Input type="email" name="email" value={email} placeholder="yourname@email.com" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => { setEmail(e.target.value) }} />
          {/* <Input type="tel" name="phone" value={phone} placeholder="Phone Number" focusBorderColor={currentTheme.tertiary} autoComplete="off" isRequired onChange={(e) => { setPhone(e.target.value) }} /> */}
          <Textarea
            placeholder="Message for me!"
            resize="vertical"
            focusBorderColor={currentTheme.tertiary}
            isRequired
            name="email"
            value={message}
            autoComplete="off"
            onChange={(e) => { setMessage(e.target.value) }}
          />
          <div>
            <div className={contactStyles.submit} style={{ backgroundColor: currentTheme.accent }}>
              <button type="submit">{ctaTexts.submitBTN}</button>
            </div>
          </div>
        </Stack>
      </form>
      <div style={{ textAlign: 'center'}}>
      <p>Or send us a message at </p>
        <Link href={`mailto:${userinfo.contact.email ? userinfo.contact.email : ''}`}><a><u>{userinfo.contact.email}</u></a></Link>
      </div>
    </div>
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
    )
}

export default HomePage
