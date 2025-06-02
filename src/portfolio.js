/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ahmed Alvi",
  title: "Hi all, I'm Ahmed Alvi",
  subTitle: emoji(
    "A dedicated Full Stack Software Developer with hands-on experience in building high-quality web and mobile applications using JavaScript, React.js, Node.js, React Native, and a range of modern libraries and frameworks."
  ),
  resumeLink:
    "https://drive.google.com/file/d/1ofFdKF_mqscH8WvXkSObnVvC9kK7Ldlu/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ahmedalvi29",
  linkedin: "https://www.linkedin.com/in/ahmedalvi29",
  gmail: "ahmedalvi229@gmail.com",
  gitlab: "https://gitlab.com/ahmedalvi29",
  stackoverflow: "https://stackoverflow.com/users/10422806/ahmedalvi29",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section
const skillsSection = {
  title: "What I Do",
  subTitle: "Full Stack Developer with a Passion for Building Scalable and Efficient Solutions",
  skills: [
    emoji(
      "⚡ Develop responsive and dynamic front-end user interfaces for web and mobile applications"
    ),
    emoji(
      "⚡ Build Progressive Web Applications (PWAs) using both traditional and Single Page Application (SPA) architectures"
    ),
    emoji(
      "⚡ Integrate third-party services and APIs, including Firebase, AWS, and DigitalOcean"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "PHP",
      fontAwesomeClassname: "fab fa-php"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Pakistan College of Science",
      logo: require("./assets/images/harvardLogo.png"), // Placeholder image path
      subHeader: "Intermediate in Pre-Engineering",
      duration: "August 2016 – May 2018",
      desc: "Focused on foundational science subjects including Mathematics, Physics, and Chemistry. Built a strong academic base for a career in technology and engineering.",
      descBullets: [
        "Achieved excellent academic performance in science subjects",
        "Participated in science exhibitions and technical seminars",
        "Laid the groundwork for further studies in computer science"
      ]
    },
    {
      schoolName: "Bahria College",
      logo: require("./assets/images/stanfordLogo.png"), // Placeholder image path
      subHeader: "Matriculation in Science",
      duration: "April 2014 – May 2016",
      desc: "Completed secondary education with a focus on science and technology. Actively participated in academic and co-curricular activities.",
      descBullets: [
        "Secured high grades in core science subjects",
        "Engaged in computer lab sessions and basic programming",
        "Developed early interest in software and application development"
      ]
    }
  ]
};


// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "60%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "90%"
    },
    {
      Stack: "Programming",
      progressPercentage: "80%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, // Set it to true to show workExperiences Section
  experience: [
    {
      role: "Full Stack Developer",
      company: "FaceBook Inc.",
      companylogo: require("./assets/images/facebookLogo.png"), // Placeholder logo
      date: "March 2023 – Present",
      desc: "Designing and developing scalable web applications using React.js, Node.js, and MongoDB. Collaborating with cross-functional teams to implement user-friendly features.",
      descBullets: [
        "Developed dynamic dashboards and data visualizations for internal tools",
        "Integrated third-party APIs and optimized RESTful services",
        "Worked in Agile/Scrum environment and led code reviews"
      ]
    },
    {
      role: "Front-End Developer",
      company: "Quora",
      companylogo: require("./assets/images/quoraLogo.png"), // Placeholder logo
      date: "July 2021 – February 2023",
      desc: "Built responsive and accessible user interfaces using modern JavaScript frameworks. Maintained performance and browser compatibility across platforms."
    },
    {
      role: "Software Development Intern",
      company: "Airbnb",
      companylogo: require("./assets/images/airbnbLogo.png"), // Placeholder logo
      date: "June 2020 – December 2020",
      desc: "Contributed to front-end development of a real estate platform. Gained hands-on experience in version control, teamwork, and real-world coding standards."
    }
  ]
};
const openSource = {
  showGithubProfile: "true", // Show GitHub profile link
  display: true // Set false to hide this section
};


// Some big projects you have worked on
const bigProjects = {
  title: "Projects",
  subtitle: "Key Projects and Contributions",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"), // Keep or replace with your own
      projectName: "MediTrack",
      projectDesc: "A health record and appointment management system for clinics, built using MERN stack.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://meditrack.example.com" // Replace with real URL if applicable
        }
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"), // Keep or replace
      projectName: "EduSphere",
      projectDesc: "An e-learning platform offering live classes and course management for students and teachers.",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://edusphere.example.com"
        }
      ]
    }
  ],
  display: true // Set false to hide this section
};

// Achievement Section
// Include certificates, talks etc
const achievementSection = {
  title: emoji("Achievements & Certifications 🏆"),
  subtitle: "Recognitions, Certifications, and Noteworthy Accomplishments",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "Recognized as a Google Code-in Finalist among 4,000 global participants from 77 countries—first finalist selected from Pakistan.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "View Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Open Source Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Developer",
      subtitle:
        "Created a Google Assistant Action called 'JavaScript Guru', deployed globally across over 2 billion devices.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Logo",
      footerLink: [
        {
          name: "View Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },
    {
      title: "Certified PWA Developer",
      subtitle:
        "Completed Progressive Web App (PWA) development certification from Saylani Mass IT Training (SMIT) and deployed a fully functional OLX clone.",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Certification Logo",
      footerLink: [
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
        // You can add a real certification link if available
      ]
    }
  ],
  display: true // Set to false to hide this section
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "Speaking Engagements",
  subtitle: emoji(
    "Passionate about sharing knowledge and connecting with the tech community"
  ),

  talks: [
    {
      title: "Building Actions for Google Assistant",
      subtitle: "Workshop at GDG DevFest Karachi 2019",
      slides_url: "",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Discussing technology, software development, and personal growth",

  // Please provide your podcast embedded link(s)
  podcast: [
    ""
  ],
  display: true // Set false to hide this section, defaults to true
};


// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+92 311 2933137", // Replace with your phone number
  email_address: "ahmedalvi229@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
