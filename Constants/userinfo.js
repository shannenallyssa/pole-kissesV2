//PLEASE FOLLOW THE FORMAT OF THIS FILE.

import { faGithubAlt, faLinkedinIn, faMediumM, faFacebook, faTwitter, faInstagram, faYoutube, faBehance } from "@fortawesome/free-brands-svg-icons"

export const userinfo = {
    logoText: "Pole Kisses | Short Film", //This text is visible on your navbar and footer like your logo.
    contact: {
        email: 'polekissesshortfilm@gmail.com', //It is always a good idea to mention your email on your website. Good platform to communicate.
        phone: '1234567890', //Phone number is optional, if you dont want it, consider leaving it blank .
        countrycode: '+91' //It is advisable to add the country code incase you mention your contact number.
    },
    socials: [
        //For aesthetics, it is advisable for you to mention upto 4 social media links only. Fill in the links.
        //more icons are imported above, use as you like them.
        { type: 'github', link: '', icon: faGithubAlt },
        { type: 'linkedin', link: '', icon: faInstagram },
        { type: 'medium', link: '', icon: faMediumM },
    ],
    greeting: {
        //this text goes on your landing page
        title: "POLE KISSES",
        subtitle: "A Short Film"
    },
    capabilities: [
        //this text goes on your home page in table format.
        //For aesthetics, it is advisable for you to mention upto 4 catgeories links only.
        //For aesthetics, it is advisable for you to keep similar number of skills in each category
        {
            category: "Category", // eg.frontend, backend, devops etc
            skills: ["Skillset1", "Skillset1", "Skillset1"] //eg. react, html, python etc.
        },
        {
            category: "Category",
            skills: ["Skillset2", "Skillset2", "Skillset2"]
        },
        {
            category: "Category",
            skills: ["Skillset3", "Skillset3", "Skillset3"]
        },
        {
            category: "Category",
            skills: ["Skillset4", "Skillset4", "Skillset4"]
        },
    ],
    about: {
        //this text goes at the bottom of your home page.
        logline: "'A timid pole dancing student must overcome her insecurities when she develops feelings for her more experienced classmate.'",
        resume: "/" //link your resume here. it can be drive link or any other link
    },
    education: {
        visible: true, //set this to false if you want to omit this section
        educationList: [
            {
                time: 'May - Oct 2020', //timespan
                title: 'Degree name', //eg. BTech in Compuster Engineering
                organization: 'School Name', //eg. VJTI, Mumbai
                description: 'Lorem ipsum dolor sit amet consectetur' //eg. secured a cgpa of 9.25 in all sems appeared in so far
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
            {
                time: 'May - Oct 2020',
                title: 'Degree name',
                organization: 'School Name',
                description: 'Lorem ipsum dolor sit amet consectetur'
            },
        ],
    },
    crew: {
        visible: true, //set this to false if you want to omit this section
        crewList: [
            {
                crewName: 'Kristina McHale', //company name eg.Microsoft
                crewHeadshot: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*', //companylogo
                position: 'Director', //post you held eg.Senior SDE
                time: '', //timespan
                instagram:'https://www.instagram.com/xt.na/',
                website:'https://xtinamchale.com/',
                imdb:'',
                linkedIn:'',
                aboutLink:'/kristinaMcHale', 
                avatar:'',
            },
            {
                crewName: 'Shannen Velasco',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Executive Producer, Writer',
                time: '',
                instagram:'https://www.instagram.com/realshannenigans/',
                website:'https://shannenvelascovo.vercel.app',
                imdb:'https://www.imdb.com/name/nm13639366/',
                linkedIn:'',
                aboutLink:'/shannenVelasco', 
                avatar:'',
            },
            {
                crewName: 'Angel E. Warren',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Producer',
                time: '',
                instagram:'https://www.instagram.com/artis_angel/',
                linkedIn:'https://www.linkedin.com/in/angel-warren-53695b143',
                imdb:'',
                aboutLink:'/angelEWarren',
                avatar:'', 
            },
            {
                crewName: 'Isabel Peinado',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Assistant Director',
                time: '',
                instagram:'https://www.instagram.com/isabelthegirl',
                website:'',
                imdb:'',
                linkedIn:'',
                aboutLink:'/isabelPeinado', 
                avatar:'',
            },
            {
                crewName: 'Patricia Reyes',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Cinematographer',
                time: '',
                instagram:'https://www.instagram.com/patriciakmreyes/',
                website:'',
                imdb:'',
                linkedIn:'',
                aboutLink:'/patriciaReyes', 
                avatar:'',
            },
            {
                crewName: 'Chai Simone',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Art Director',
                time: '',
                instagram:'https://www.instagram.com/limina_1999/',
                website:'',
                imdb:'https://www.imdb.com/name/nm12009235/',
                linkedIn:'',
                aboutLink:'/chaiSimone', 
                avatar:'',
            },
            {
                crewName: 'Carissa Fennell',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Costume Designer',
                time: '',
                instagram:'https://www.instagram.com/crisfenzo',
                website:'',
                imdb:'',
                linkedIn:'',
                aboutLink:'/carissaFennell',
                avatar:'', 
            },
            {
                crewName: 'Helen Oliviero',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Makeup Artist',
                time: '',
                website:'https://olivierohelen.myportfolio.com/',  
                instagram:'https://www.instagram.com/helens.huemua/',
                linkedIn:'',
                aboutLink:'/helenOliviero', 
                avatar:'',
            },
            {
                crewName: 'Taylor Jayne',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Choreographer',
                time: '',
                website:'',  
                instagram:'https://www.instagram.com/taylorjaynedance/',
                linkedIn:'',
                aboutLink:'/taylorJayne', 
                avatar:'',
            },
            {
                crewName: 'Sharmaine Velasco',
                companylogo: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/why-did-steve-carell-leave-the-office-1585597666.jpg?crop=0.563xw:0.844xh;0.287xw,0.128xh&resize=480:*',
                position: 'Composer',
                time: '',
                website:'',  
                instagram:'https://www.instagram.com/artanna.exe/',
                linkedIn:'',
                aboutLink:'/sharmaineVelasco', 
                avatar:'',
            },
        ],
    },
    blogs: {
        //set this to false if you want to omit this section
        visible: true
    },
}

export const headings = {
    //you can customise all the headings here.
    workHomePage: 'FUNDING',
    workMainPage: 'Projects',
    capabilities: 'Capabilities',
    about: 'ABOUT',
    education: 'Education',
    experience: 'MEET THE CREW',
    blogs: 'I write!',
    contact: 'CONTACT US',
}

export const ctaTexts = {
    //you can customise all the cta texts here.
    landingCTA: 'My work',
    workCTA: 'View All',
    capabCTA: 'Get in Touch',
    educationCTA: 'About Me',
    resumeCTA: 'Resume',
    submitBTN: 'Submit'
}

export const buttonTexts = {
    returnToCrew: 'BACK'
}