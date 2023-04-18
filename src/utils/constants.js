import { TbBrandGithub, TbFileText } from 'react-icons/tb';
import { SlSocialLinkedin, SlGraduation } from 'react-icons/sl';
import { MdOutlineContactPage } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';

import {
  furniStore,
  bestEats,
  digitalVision,
  js,
  html,
  css,
  sass,
  react,
  redux,
  tailwindcss,
  antdesign,
  nextjs,
  typescript,
  restapi,
  motion,
  github,
} from '../../public';

export const navList = [
  { id: 0, text: 'Home', url: '/' },
  { id: 1, text: 'About', url: '/about' },
  { id: 2, text: 'Projects', url: '/projects' },
  { id: 3, text: 'Contact', url: '/contact' },
];

export const socials = [
  { id: 0, text: 'Github', icon: <TbBrandGithub />, url: '/' },
  {
    id: 1,
    text: 'Linkedin',
    icon: <SlSocialLinkedin />,
    url: 'https://www.linkedin.com/in/nghia-pham-90bbb0272/',
  },
  { id: 2, text: 'resume', icon: <TbFileText />, url: '/' },
];

export const aboutMenu = [
  { id: 0, text: 'Education', icon: <SlGraduation /> },
  { id: 1, text: 'Contact', icon: <MdOutlineContactPage /> },
];
export const onlineCourses = [
  {
    id: 0,
    title: 'Advanced CSS and Sass',
    url: 'https://www.udemy.com/course/advanced-css-and-sass/',
  },
  {
    id: 1,
    title: 'The Complete JavaScript Course',
    url: 'https://www.udemy.com/course/the-complete-javascript-course/',
  },

  {
    id: 2,
    title: 'React - The Complete Guide',
    url: 'https://www.udemy.com/course/react-the-complete-guide-incl-redux/',
  },
  {
    id: 3,
    title: 'React 18 Tutorial and Projects Course',
    url: 'https://www.udemy.com/course/react-tutorial-and-projects-course/',
  },
];

export const skills = [
  { id: 0, text: 'HTML', icon: html },
  { id: 1, text: 'CSS', icon: css },
  { id: 2, text: 'SASS', icon: sass },
  { id: 3, text: 'Javascript', icon: js },
  { id: 4, text: 'React', icon: react },
  { id: 5, text: 'Redux', icon: redux },
  { id: 6, text: 'REST API', icon: restapi },
  { id: 7, text: 'Tailwindcss', icon: tailwindcss },
  { id: 8, text: 'Ant Design', icon: antdesign },
  { id: 9, text: 'Motion', icon: motion },
  { id: 10, text: 'Github', icon: github },
];

export const skillsLearning = [
  { id: 0, text: 'Nextjs', icon: nextjs },
  { id: 1, text: 'Typescript', icon: typescript },
];

export const projects = [
  {
    id: 0,
    title: 'Furni Store',
    description: 'E-commerce Project',
    image: furniStore,
    url: '/',
    github: '/',
    techStacks: [
      { id: 0, text: 'CSS', icon: css },
      { id: 1, text: 'Javascript', icon: js },
      { id: 2, text: 'React', icon: react },
      { id: 3, text: 'Redux', icon: redux },
      { id: 4, text: 'REST API', icon: restapi },
      { id: 5, text: 'Tailwindcss', icon: tailwindcss },
      { id: 6, text: 'Ant Design', icon: antdesign },
    ],
  },
  {
    id: 1,
    title: 'Best Eats',
    description: 'Landing Page Project',
    image: bestEats,
    url: 'https://best-eats-project.vercel.app/',
    github: 'https://github.com/nghiapham27/best-eats-project',
    techStacks: [
      { id: 0, text: 'HTML', icon: html },
      { id: 1, text: 'CSS', icon: css },
      { id: 2, text: 'React', icon: react },
      { id: 3, text: 'Tailwindcss', icon: tailwindcss },
    ],
  },
  {
    id: 2,
    title: 'Digital Vision',
    description: 'Landing Page Project',
    image: digitalVision,
    url: 'https://digital-vision-project.vercel.app/',
    github: 'https://github.com/nghiapham27/digital-vision-project',
    techStacks: [
      { id: 0, text: 'HTML', icon: html },
      { id: 1, text: 'CSS', icon: css },
      { id: 2, text: 'SASS', icon: sass },
      { id: 3, text: 'Javascript', icon: js },
    ],
  },
];

export const contacts = [
  {
    id: 0,
    title: 'Location',
    icon: <SlLocationPin />,
    text: 'Ho Chi Minh City, Vietnam',
  },
  {
    id: 1,
    title: 'Email',
    icon: <MdOutlineEmail />,
    text: 'nghiaph27@gmail.com',
  },
  {
    id: 2,
    title: 'Phone',
    icon: <HiOutlineDevicePhoneMobile />,
    text: '0968 390 325',
  },
];
