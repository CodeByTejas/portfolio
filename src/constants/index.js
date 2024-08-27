import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Cyber Security Analyst",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Robotics",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "kali Linux",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "ROS1",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "Splunk",
    icon: figma,
  },
  {
    name: "Burpsuite",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Red Team Intern",
    company_name: "CyberSapiens United LLP",
    icon: starbucks,
    iconBg: "#383E56",
    date: "April 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Chief Technical Officer",
    company_name: "IEEE-RAIT",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "June 2024 - Present",
    points: [
      "Led the IEEE RAIT Research Wing, aligning teams across Web Development, Infrastructure, Inventory, and Event Management with strategic goals.",
      "Developed training programs and mentored students to enhance learning and boost academic contributions.",
    ],
  },
  {
    title: "Research Wing Head",
    company_name: "IEEE-RAIT",
    icon: shopify,
    iconBg: "#383E56",
    date: "June 2023 - June 2024",
    points: [
      "Oversaw research initiatives and projects, focusing on leveraging technology to enhance educational outcomes.",
      "Collaborated with faculty and students to foster a culture of innovation and research within the institution.",
    
    ],
  },
  {
    title: "Technical Content Curator",
    company_name: "MyEquation(formerly TechAnalogy)",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "December 2023 - January 2024",
    points: [
      "Developed educational tools and platforms using React.js and Node.js to enhance learning experiences.",
      "Implemented interactive features and user interfaces based on educator and student feedback.",
      "Ensured scalability and performance of applications through effective database management and backend optimization.",
      "Contributed to all phases of the agile development lifecycle from design to deployment.",
    ],
  },

  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Tejas proved me wrong.",
    name: "Khushi Suryawanshi",
    designation: "Student",
    company: "D.Y. Patil University",
    // image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "As someone new to cybersecurity, the complex concepts of ethical hacking seemed daunting, thanks for help.",
    name: "Lokesh Kelab",
    designation: "Student",
    company: "D.Y. Patil University",
    image: "https://drive.google.com/drive/my-drive",
  },
  {
    testimonial:
      "Thanks for helping in making my semester project using 3D models",
    name: "Rahul Barna",
    designation: "Student",
    company: "D.Y. Patil University",
    // image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Intelli-Pick Robotic Arm",
    description:
      " Developed and built a robotic arm with 6 degrees of freedom, incorporating an ultrasonic sensor for precise object detection and distance measurement. Engineered a continuous object scanning system, enhancing the arm’s ability to autonomously detect, interact with objects in its environment and successfully filed a patent for the innovative design (Application No. 4131124001).",
    tags: [
      {
        name: "robotics",
        color: "blue-text-gradient",
      },
      {
        name: "arduino",
        color: "green-text-gradient",
      },
      {
        name: "3D print",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/CodeByTejas/advanceRoboticArm",
  },
  {
    name: "E-Learning  Platform",

    description:
      "A seamless learning experience for both learners and educators by developing an intuitive platform that enhances user engagement, integrated an inbuilt ChatBot that efficiently addresses user queries in real time. Additionally, implemented timed quizzes to evaluate learner performance, providing instant feedback and ensuring a robust and interactive learning process.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "bootsrap",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
      {
        name: "javascript",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/CodeByTejas/ElearningWebsite",
  },
  {
    name: "Pay Secure-Docs",
    description:
      "I designed and implemented an asymmetric encryption algorithm, elevating document security and protecting sensitive data. I also developed a robust decryption mechanism, ensuring secure key management and data integrity. By integrating the Zero Trust Model, I enhanced user verification and access control.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "PyCryptodome",
        color: "green-text-gradient",
      },
      {
        name: "OAuth 2.0",
        color: "pink-text-gradient",
      },
      {
        name: "AES",
        color: "green-text-gradient",
      },
      {
        name: "cybersecurity",
        color: "blue-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/CodeByTejas/paySecureDocs",
  },

  
];


export { services, technologies, experiences, testimonials, projects};
