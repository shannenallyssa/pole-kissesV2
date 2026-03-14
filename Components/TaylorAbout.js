import styles from "../styles/Work.module.css";
import WorkProject from "./WorkProject";
import BlogCard from "./BlogCard";
import { projects } from "../Constants/projects";
import { custom_blogs, medium_blogs, dev_to } from "../Constants/blogs";
import { useState, useEffect } from "react";
import { headings, userinfo, buttonTexts } from "../Constants/userinfo";
import Carousel, { CarouselItem } from "./Carousel";
import Experiences from "./Experiences";
import contactStyles from "../styles/Contact.module.css";
import Link from "next/link";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import taylorJayneAbout from "../styles/taylorJayneAbout.jpeg";
import Image from "next/image";
import React from "react";
import ReactPlayer from "react-player";

const taylorAbout = ({ currentTheme }) => {
  const iconStyles = {
    backgroundColor: currentTheme.accent,
    color: "#101010",
    boxShadow: currentTheme.boxShadow,
  };

  const [blogList, setBlogList] = useState([]);

  // CUSTOM BLOGS SUPPORT: UNCOMMENT THE FOLLOWING CODE FOR CUSTOM BLOGS
  useEffect(() => {
    setBlogList(custom_blogs);
  }, []);

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
      <div>
        <div data-aos="fade-up">
          <div align="center" className={styles.aboutHeadshot}>
          <Image src={taylorJayneAbout} alt='glamour shot of Taylor Jayne' height='400' width='325'/>
          </div>
          <div className={styles.aboutPersonHeading}>Taylor Jayne</div>
          <div className={styles.aboutPersonSubHeading}> Choreographer</div>
          <div className={contactStyles.socialIconAbout}>
            <div className={contactStyles.socialIcon} style={iconStyles}>
              <Link href="https://www.instagram.com/taylorjaynedance/">
                <a target="_blank">
                  <FontAwesomeIcon icon={faInstagram} />
                </a>
              </Link>
            </div>
          </div>
        </div>
        <div className={styles.aboutPersonText} data-aos="fade-up">
          <p>
            Taylor Jayne is flying through life atop a 20-foot pole spinning
            fire, booty popping, and pampering her purse pooch… cause girl's a
            multi-tasker.{" "}
          </p>
          <br />
          <p>
            {" "}
            Taylor danced her way out of the womb in the early 90s already
            wearing her Hammer pants and now in her third decade of lighting up
            the stage she’s chassé’d her way across 12 countries, reaching a
            personal highpoint when she met the Queen Bee, Beyonce, and got to
            join her hive helping dancers train on Sway Poles for The
            Renaissance Tour.
          </p>
          <br />
          <p>
            {" "}
            A BFA dance grad, NBA dancer alum, Taylor is a certified fire
            performer/eater, sway pole/pole aerialist, flow artist and
            roller-skater extraordinaire, with more than 10 years’ experience
            working professionally in LA and Las Vegas. She is thrilled to be
            choreographing "Pole Kisses" and especially to be working with an
            all female production cast!
          </p>
          <br />
          <p>
            {" "}
            Taylor is a sharknado of enthusiasm and lives for audience
            connection. This beautiful rare dancing queen wouldn’t be where she
            is without her circle of support and love, her fellow deviant
            dancers – and you amazing audience members who will never let art
            die.
          </p>
          <div>
          <div style={{paddingTop:'1rem'}}>
            <ReactPlayer
              url="https://vimeo.com/704984031"
              controls={true}
              volume={.5}
              className={styles.video}
              width='relative'
              config={{
                vimeo: {
                  playerVars: { color: "white" },
                },
              }}
            />
            </div>
          </div>
          <div
            style={{
              textAlign: "center",
              padding: 20,
              paddingTop: 30,
              position: "center",
              color: currentTheme.subtext,
            }}
          >
            <Link href="/#crew">
              <a
                className={contactStyles.aboutButton}
                style={{
                  background: "transparent",
                  border: `2px solid ${currentTheme.subtext}`,
                  alignItems: "center",
                }}
              >
                {buttonTexts.returnToCrew}
              </a>
            </Link>
          </div>
        </div>
        <div>
        </div>
      </div>
    </div>
  );
};

export default taylorAbout;
