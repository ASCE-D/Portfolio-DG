// Enter all your detials in this file
// Logo images
import logogradient from "./assets/logo.png";
import logo from "./assets/logo2.svg";
// Profile Image
import profile from "./assets/profile.jpg";
// Tech stack images
import html from "./assets/techstack/html.png";
import css from "./assets/techstack/css.png";
import django from "./assets/techstack/django.png";
import js from "./assets/techstack/js.png";
import react from "./assets/techstack/react.png";
import redux from "./assets/techstack/redux.png";
import tailwind from "./assets/techstack/tailwind.png";
import bootstrap from "./assets/techstack/bootstrap.png";
import vscode from "./assets/techstack/vscode.png";
import github from "./assets/techstack/github.png";
import git from "./assets/techstack/git.png";
import npm from "./assets/techstack/npm.png";
import postman from "./assets/techstack/postman.png";
import node from "./assets/techstack/node.png";
import express from "./assets/techstack/express.png";
import mongodb from "./assets/techstack/mongodb.png";
import python from "./assets/techstack/python.png";
import docker from "./assets/techstack/docker.png";
import aws from "./assets/techstack/aws.png";
import graphql from "./assets/techstack/graphql.png";
import redis from "./assets/techstack/redis.png";
import next from "./assets/techstack/next.png";
import postgresql from "./assets/techstack/postgresql.png";
import typescript from "./assets/techstack/typescript.png";
// Porject Images
import twitterimg from "./assets/projects/twitter.png";
import projectImage1 from "./assets/projects/urban.png";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/mi.png";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";
import hero from "./assets/projects/hero.webp";


// Logos
export const logos = {
  logogradient: logogradient,
  logo: logo,
};

// Enter your Personal Details here
export const personalDetails = {
  name: "Deepesh Genani",
  tagline: "I build things for web",
  img: profile,
  about: `Experienced Full Stack developer, with strong fundamentals & hands-on experience in building scalable, secure & fast backend APIs using TypeScript.
My expertise lies in JS/TS technologies, including the MERN stack (MongoDB, Express.js, React.js, Node.js), PostgreSQL, NESTJs, TypeScript, Next.js, GraphQL,  AWS services & CI/CD
I have a strong passion for learning new technologies and building innovative products. I am a quick learner and a team player who loves to work in a collaborative environment.
`,
};

// Enter your Social Media URLs here
export const socialMediaUrl = {
  linkdein: "https://www.linkedin.com/in/deepeshgenani",
  github: "https://github.com/ASCE-D",
  twitter: "https://twitter.com/deepesh_genani",
  instagram: "https://www.instagram.com/deepesh_genani",
};

// Enter your Work Experience here
export const workDetails = [
  {
    Position: "Backend Developer",
    Company: `Walkout`,
    Location: "Noida",
    Type: "Full Time",
    Duration: "Feb 2024 - Apr 2024",
  },
  {
    Position: "Full Stack Developer",
    Company: `Sock8`,
    Location: "Remote India",
    Type: "Internship",
    Duration: "Oct 2023 - Feb 2024",
  },
];

// Enter your Education Details here
export const eduDetails = [
  {
    Position: "Full Stack Web Development",
    Company: "YouTube, Google, Medium",
    Location: "Online",
    Type: "Full Time",
    Duration: "Jan 2022 - Present",
  },
  {
    Position: "Bachelor in Metallugical & Materials Science",
    Company: `National Institute of Technology, Raipur`,
    Location: "Raipur",
    Type: "Full Time",
    Duration: "Dec 2021 - Present",
  },
];

// Tech Stack and Tools
export const techStackDetails = {
  html: html,
  css: css,
  js: js,
  node: node,
  express: express,
  mongodb: mongodb,
  docker: docker,
  react: react,
  redux: redux,
  tailwind: tailwind,
  bootstrap: bootstrap,
  vscode: vscode,
  postman: postman,
  npm: npm,
  git: git,
  github: github,
  django: django,
  python: python,
  aws: aws,
  graphql: graphql,
  redis: redis,
  next: next,
  postgresql: postgresql,
  typescript: typescript,
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "Insightaction",
    image: hero,
    description: `Master your Habits with atomic precision, start tracking now.`,
    techstack: "NextJs · Server actions · Nextauth · Prisma ORM · PostgreSQL · Shadcn",
    previewLink: "https://insightaction.vercel.app/",

  },
  {
    title: "Twitter Clone",
    image: twitterimg,
    description: `Responsive Twitter clone.`,
    techstack: "NextJs · ExpressJs · GraphQL · Prisma ORM · PostgreSQL · Redis · AWS",
    previewLink: "https://twitter-client-ten.vercel.app/",
    githubLink: "https://github.com/ASCE-D/twitter-clone",
  },
  {
    title: "UrbanMarketplace",
    image: projectImage1,
    description: `Responsive E-commerce website`,
    techstack: "Redux · MongoDB · Express.js · Node.js · React.js",
    previewLink: "https://urban-marketplace.vercel.app/",
    githubLink: "https://github.com/ASCE-D/UrbanMarketplace",
  },
  {
    title: "ExamProcter",
    image: projectImage2,
    description: `Anti-cheat platform to conduct fair google forms tests.
    `,
    techstack: "Django, sqlite3, Html/css, javascript, bootstrap",
    previewLink: "https://github.com/ASCE-D/examProctor",
    githubLink: "https://github.com/ASCE-D/examProctor",
  },
  {
    title: "Mi Clone",
    image: projectImage3,
    description: `Mi website clone using Reactjs, just frontend`,
    techstack: "React, CSS",
    previewLink: "https://mi-clone-ten.vercel.app/",
    githubLink: "https://github.com/ASCE-D/mi_clone",
  },
  {
    title: "Full Stack TODO",
    image: projectImage4,
    description: `Full stack TODO list`,
    techstack: "HTML/CSS, JavaScript",
    previewLink: "https://reactjs-todo-topaz.vercel.app/register",
    githubLink: "https://github.com/ASCE-D/reactjs_todo",
  },
  {
    title: "Anime News Notification",
    image: projectImage5,
    description: `Anime news on windows notification panel.`,
    techstack: "Python - Plyer,Beautiful Soup,Request",
    previewLink: "https://gist.github.com/ASCE-D/20c7c88ff2f65f2b1679f4b300d57cbe",
    githubLink: "https://github.com/ASCE-D/Desktop-Notifier",
  },
  {
    title: "Plastic_World",
    image: projectImage6,
    description: `Products Gallery for Vanilla CSS practice`,
    techstack: "HTML/CSS, JavaScript, Bootstrap",
    previewLink: "asce-d.github.io/Plastic_World/",
    githubLink: "https://github.com/ASCE-D/Plastic_World",
  },
];

// Enter your Contact Details here
export const contactDetails = {
  email: "deepeshgenani@gmail.com",
  phone: "+91 7869947476",
};

export const experiences = [
  {
    title: "Full Stack Developer",
    type: "Contract",
    company: "EL's Experiences",
    location: "Genoa, Italy (Remote)",
    period: "Sep. 2024 - Current",
    technologies: ["NextJS", "PostgreSQL", "Prisma", "Redis", "AWS", "Stripe", "i18n"],
    achievements: [
      "Built scalable reservation platform with NextJS/Prisma, serving 500+ monthly clients reducing manual booking time by 90%",
      "Integrated WhatsApp Business API and i18n, increasing customer engagement by 40%",
      "Built real-time parking management system using Redis and task queues, eliminating double-booking issues",
      "Deployed AWS infrastructure with load balancing, achieving 99.9% uptime",
      "Developed unified admin dashboard with Stripe integration for cross-app revenue tracking"
    ]
  },
  {
    title: "Backend Engineer",
    type: "Internship",
    company: "Walkout - B2B SaaS Platform",
    location: "Noida (Remote)",
    period: "Feb. 2024 - Apr. 2024",
    technologies: ["NestJS", "PostgreSQL", "Prisma", "AWS", "Postman"],
    achievements: [
      "Architected and deployed production-ready MVP, reducing client onboarding time by 60%",
      "Built scalable backend infrastructure using TypeSafe NestJS and PostgreSQL with Prisma, handling 1000+ daily transactions",
      "Implemented AWS cost optimization, reducing cloud expenses by 30% through efficient EC2 and S3 usage",
      "Achieved 99.9% API reliability through comprehensive Postman testing and monitoring"
    ]
  }
]
