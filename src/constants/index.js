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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React JS",
    icon: mobile,
  },
  {
    title: "Good at Programming in C++",
    icon: backend,
  },
  {
    title: "Tech Enhusiast",
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Research Intern ",
    company_name: "Prof. Manish Kumar",
    icon: backend,
    iconBg: "#383E56",
    date: "May 2023 - Present",
    points: [
      "Engaged in Reseaching for Optimizing various Parameter for UAV communications ",
      "Working On developing Novel algorithm for path optimizing the UAV traversal for maximum data collection and minimum energy consumption ",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Pranav proved me wrong.",
    name: "Vihar Shah",
    designation: "Product Engineer",
    company: "Sprinlr",

  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their Details like Pranav does.",
    name: "Krupal Shah",
    designation: "Product Engineer",
    company: "Sprinklr",

  },
  {
    testimonial:
      "After Pranav optimized our website, it lookes more applealing",
    name: "Kandarp Devmurari",
    designation: "Software Developer",
    company: "Mircrosoft",

  },
];

const projects = [
  {
    name: "Chaos Based AES encrption system",
    description:
      "Our double pendulum-based cryptosystem bolsters AES security by generating secret keys, offering two versions: one with a master key and another generating round keys from pendulum motion. Despite increased computational complexity, it ensures heightened security and performance for data protection. (Team of 4)",
    tags: [
      {
        name: "AES",
        color: "blue-text-gradient",
      },
      {
        name: "encryption",
        color: "green-text-gradient",
      },
      {
        name: "algorithm",
        color: "pink-text-gradient",
      },
      {
        name: "double Pendulum",
        color: "blue-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/PranavPatil-21/Encryption_system",
  },
  {
    name: "Track Management system",
    description:
      "Created a user-friendly competition organizing webapp with MERN stack, utilizing ReactJS for frontend, Axios API for integration, Context API for state management, and Chatengine.io for the chat feature. Collaborated in a team of 3, handled complete frontend development and integration, ensuring a seamless user experience.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "chatengine.io",
        color: "pink-text-gradient",
      },
      {
        name: "Webapp",
        color: "blue-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/PranavPatil-21/Track_Mangement_system",
  },
  {
    name: "MY-BOT",
    description:
      "Created a robot simulation by creating a robot using the ROS operating system and Webot, the functionality of the robot includes navigating in the room and detecting humans available in the room. It uses OpenCV and DARK-NET ROS (YOLO) for identifying images, making it capable of robust real-time object recognition and tracking. This project leverages cutting-edge technologies for advanced robotic perception and interaction.",
    tags: [
      {
        name: "ROS",
        color: "blue-text-gradient",
      },
      {
        name: "robotics",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/PranavPatil-21/MY_BOT",
  },
];

export { services, technologies, experiences, testimonials, projects };
