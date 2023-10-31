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
// Porject Images
import projectImage1 from "./assets/projects/project1.jpg";
import projectImage2 from "./assets/projects/project2.jpg";
import projectImage3 from "./assets/projects/project3.jpg";
import projectImage4 from "./assets/projects/project4.jpg";
import projectImage5 from "./assets/projects/project5.jpg";
import projectImage6 from "./assets/projects/project6.jpg";

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
  about: `Full Stack Developer with a strong foundation in web development and a positive mindset. Passionate about creating impactful applications using MongoDB, ExpressJS, ReactJS, and NodeJS. Eager to learn and grow in a dynamic tech environment. Open to exciting opportunities in the field. `,
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
    Position: "Frontend Web Developer",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Full Time",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
  },
  {
    Position: "Internship",
    Company: `Company Name here`,
    Location: "Bengaluru",
    Type: "Internship",
    Duration: "Sep 2021 - Dec 2021",
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
};

// Enter your Project Details here
export const projectDetails = [
  {
    title: "UrbanMarketplace",
    image: projectImage1,
    description: `A e-commerce website involves designing an intuitive frontend with product pages, shopping cart, and a streamlined checkout process. Meanwhile, the backend manages user data, product listings, order processing, and ensures robust security. The admin panel empowers administrators to oversee users, orders, content, and access critical insights through reports and analytics. Integrating Stripe as the payment gateway ensures secure transactions, subscription management, and real-time payment event updates via webhooks, while a testing environment ensures payment accuracy before going live. Collaboration with experts and staying updated with industry trends is essential for a successful e-commerce venture.`,
    techstack: "Redux · MongoDB · Express.js · Node.js · React.js",
    previewLink: "https://urban-marketplace.vercel.app/",
    githubLink: "https://github.com/ASCE-D/UrbanMarketplace",
  },
  {
    title: "ExamProcter",
    image: projectImage2,
    description: `This is project is mainly based on Django framework and main purpose is to develop an anti-cheat platform to conduct fair online exams in this period.
    `,
    techstack: "Django, sqlite3, Html/css, javascript, bootstrap",
    previewLink: "https://github.com/ASCE-D/examProctor",
    githubLink: "https://github.com/ASCE-D/examProctor",
  },
  {
    title: "Mi Clone",
    image: projectImage3,
    description: `Mi website clone using Reactjs`,
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
    title: "Anime News Notification Pogram",
    image: projectImage5,
    description: `This Program displays anime news on windows notification panel.`,
    techstack: "Python - Plyer,Beautiful Soup,Request",
    previewLink: "https://gist.github.com/ASCE-D/20c7c88ff2f65f2b1679f4b300d57cbe",
    githubLink: "https://github.com/ASCE-D/Desktop-Notifier",
  },
  {
    title: "Plastic_World",
    image: projectImage6,
    description: `This is sample project description random things are here in description This is sample
project lorem ipsum generator for dummy content`,
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
