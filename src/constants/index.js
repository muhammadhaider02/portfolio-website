
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  project1,
  mysql,
  express,
  postgresql,
  aws,
  mui,
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  python, 
  cpp, 
  tableau, 
  powerbi, 
  gcp, 
  linux, 
  docker,
  n8n, 
  flask, 
  fastapi, 
  apachespark, 
  apachekafka, 
  cuML, 
  pytorch, 
  tensorflow, 
  scikit,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
  testimonial1,
  testimonial2,
  testimonial3,
} from '../assets'


import dml from "../assets/company/dml.png";
import frack from "../assets/company/frack.png";
import hrms from "../assets/company/hrms.png";

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
    title: "AI & Machine Learning",
    icon: "uil uil-brain",
    skills: [
      { name: "TensorFlow", level: 85 },
      { name: "PyTorch", level: 80 },
      { name: "Scikit-learn", level: 90 },
      { name: "cuML", level: 80 },
      { name: "CNNs", level: 80 },
    ],
  },
  {
    title: "Programming & Databases",
    icon: "uil uil-brackets-curly",
    skills: [
      { name: "Python", level: 95 },
      { name: "C++", level: 85 },
      { name: "SQL", level: 90 },
      { name: "JavaScript", level: 75 },
      { name: "MongoDB", level: 80 },
    ],
  },
  {
    title: "Data Engineering & Cloud",
    icon: "uil uil-cloud-computing",
    skills: [   
      { name: "Distributed Computing", level: 90 },
      { name: "AWS", level: 85 },
      { name: "GCP", level: 75 },
      { name: "Apache Spark/PySpark", level: 85 },
      { name: "Apache Kafka", level: 80 },
    ],
  },
  {
    title: "Automation, Frameworks & Visualization",
    icon: "uil uil-server-network",
    skills: [
      { name: "FastAPI", level: 85 },
      { name: "Flask", level: 85 },
      { name: "n8n", level: 90 },
      { name: "Tableau", level: 80 },
      { name: "Power BI", level: 75 },
    ],
  },
];

const technologies = [
  {
    name: "python",
    icon: python,
  },
  {
    name: "cpp",
    icon: cpp,
  },
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
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "Express Js",
    icon: express,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "flask",
    icon: flask,
  },
  {
    name: "fastapi",
    icon: fastapi,
  },
  {
    name: "n8n",
    icon: n8n,
  },
  {
    name: "tensorflow",
    icon: tensorflow,
  },
  {
    name: "pytorch",
    icon: pytorch,
  },
  {
    name: "scikit",
    icon: scikit,
  },
  {
    name: "apachespark",
    icon: apachespark,
  },
  {
    name: "apachekafka",
    icon: apachekafka,
  },
  {
    name: "MySql",
    icon: mysql,
  },
  {
    name: "Postgresql",
    icon: postgresql,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "AWS",
    icon: aws,
  },
  {
    name: "gcp",
    icon: gcp,
  },
  {
    name: "Docker",
    icon: docker,
  },
  {
    name: "linux",
    icon: linux,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "tableau",
    icon: tableau,
  },
  {
    name: "powerbi",
    icon: powerbi,
  },
 
];

const experiences = [
  {
    title: "AI Engineer",
    company_name: "DMLytics",
    icon: dml,
    iconBg: "#FFFFFF",
    date: "Feb 2025 - May 2025",
    points: [
      "Developed an image-processing pipeline to generate orthomosaic maps from raw drone imagery.",
      "Engineered a KMZ-based mission planner pipeline for automated drone image acquisition.",
    ],
  },
  {
    title: "AI Intern",
    company_name: "FRACK Technologies",
    icon: frack,
    iconBg: "#FFFFFF",
    date: "Sep 2024 - Oct 2024",
    points: [
      "Assisted in developing and fine-tuning AI models to improve prediction accuracy and task automation.",
      "Conducted data preprocessing, feature extraction, and model evaluation to support ongoing AI projects.",
    ],
  },
  {
    title: "Database Intern",
    company_name: "PrimeHRMS",
    icon: hrms,
    iconBg: "#FFFFFF",
    date: "Jul 2024 - Aug 2024",
    points: [
      "Designed and maintained relational databases in MySQL and wrote optimized SQL queries for data extraction.",
      "Utilized MongoDB to store, retrieve and manage application data for backend operations.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "Calm under pressure, creative in approach, Haider delivers results every time.",
    name: "Mahnoor Tariq",
    designation: "Founder",
    company: "DMLytics",
    image: testimonial1,
  },
  {
    testimonial:
      "Haider brought precision, reliability and out-of-the-box thinking to every challenge.",
    name: "Taimur Hashim",
    designation: "Product Manager",
    company: "Frack Technologies",
    image: testimonial2,
  },
  {
    testimonial:
      "Exceptionally committed and hardworking, Haider is a true asset to any team.",
    name: "Sheikh Haad Ali",
    designation: "Project Manager",
    company: "H3 Solution - Prime HRMS",
    image: testimonial3,
  },
];

const projects = [
  {
    name: "High-Performance Binary Classification",
    description:
      "A scalable ML solution designed to handle large, imbalanced datasets using distributed computing and GPU acceleration. Built with PySpark and hybrid CPU-GPU training, the system leverages cuML Random Forest to achieve a 98% reduction in training time while boosting model accuracy, delivering faster, more efficient predictions for high-volume data environments.",
    tags: [
      {
        name: "pySpark",
        color: "blue-text-gradient",
      },
      {
        name: "cuML",
        color: "green-text-gradient",
      },
      {
        name: "GPU Acceleration",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "white-text-gradient",
      },
 
    ],
    image: project1,
    source_code_link: "https://github.com/muhammadhaider02",
  },
  {
    name: "Music Recommendation Streaming Platform",
    description:
      "A real-time music streaming platform with a built-in recommendation engine, combining distributed technologies with full-stack deployment. Leveraging Apache Kafka and Spark MLlib for collaborative filtering, the system delivers personalized music suggestions instantly through a Flask-based interface, ensuring a seamless and dynamic user experience.",
    tags: [
      {
        name: "Apache Kafka",
        color: "blue-text-gradient",
      },
      {
        name: "Spark MLlib",
        color: "green-text-gradient",
      },
      {
        name: "Flask",
        color: "pink-text-gradient",
      },
      {
        name: "Machine Learning",
        color: "white-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/muhammadhaider02",
  },
  {
    name: "Electric Load Forecasting System",
    description:
      "An intelligent forecasting system for predicting electricity demand using advanced time-series models, including LSTM and ARIMA, combined with DBSCAN clustering for consumption pattern analysis. Features a React based interface for dynamic model tuning and interactive data visualization, enabling data-driven decision making in energy management.",
    tags: [
      {
        name: "LSTM",
        color: "blue-text-gradient",
      },
      {
        name: "ARIMA",
        color: "green-text-gradient",
      },
      {
        name: "React",
        color: "pink-text-gradient",
      },
      {
        name: "Data Visualization & Analytics",
        color: "white-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/muhammadhaider02",
  },
];

export { services, technologies, experiences, testimonials, projects };
