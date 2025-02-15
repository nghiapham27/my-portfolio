import { FaSquareXTwitter } from 'react-icons/fa6';
import { FaTelegram, FaGlobe } from 'react-icons/fa';
import { TbMoneybag } from 'react-icons/tb';

import { SlGraduation } from 'react-icons/sl';
import { MdOutlineContactPage } from 'react-icons/md';
import { SlLocationPin } from 'react-icons/sl';
import { MdOutlineEmail } from 'react-icons/md';
import { HiOutlineDevicePhoneMobile } from 'react-icons/hi2';
import { dextools } from '../../public';

import {
  meme1,
  meme2,
  meme3,
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
  { id: 0, text: 'BeraTrade', url: '/' },
  // { id: 1, text: 'About', url: '/about' },
  // { id: 2, text: 'Projects', url: '/projects' },
  // { id: 2, text: 'Contact', url: '/contact' },
];

export const socials = [
  {
    id: 0,
    text: 'Github',
    icon: <FaSquareXTwitter />,
    url: 'https://x.com/BeraTrade',
  },
  {
    id: 1,
    text: 'Linkedin',
    icon: <FaTelegram />,
    url: '',
  },

  {
    id: 2,
    text: 'resume',
    icon: <TbMoneybag />,
    url: 'https://panda.kodiak.finance/trade/0xb2aa63984bbc4e4778196c4b6f62f44c2b60df1f',
  },
];

export const aboutMenu = [
  { id: 0, text: 'Education', icon: <SlGraduation /> },
  { id: 1, text: 'Experiences', icon: <MdOutlineContactPage /> },
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
    title: 'meme1',
    description: 'meme1',
    image: meme1,
    //url: 'https://furni-store-project.vercel.app/',
    //github: 'https://github.com/nghiapham27/furni-store-project',
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
    title: 'meme2',
    description: 'meme2',
    image: meme2,
    //url: 'https://best-eats-project.vercel.app/',
    //github: 'https://github.com/nghiapham27/best-eats-project',
    techStacks: [
      { id: 0, text: 'HTML', icon: html },
      { id: 1, text: 'CSS', icon: css },
      { id: 2, text: 'React', icon: react },
      { id: 3, text: 'Tailwindcss', icon: tailwindcss },
    ],
  },
  {
    id: 2,
    title: 'meme3',
    description: 'meme3',
    image: meme3,
    //url: 'https://digital-vision-project.vercel.app/',
    //github: 'https://github.com/nghiapham27/digital-vision-project',
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
    text: 'Location',
  },
  {
    id: 1,
    title: 'Email',
    icon: <MdOutlineEmail />,
    text: 'BeraTrade @ 2025',
  },
  // {
  //   id: 2,
  //   title: 'Phone',
  //   icon: <HiOutlineDevicePhoneMobile />,
  //   text: '0968 390 325',
  // },
];

export const experiences = [
  {
    id: 0,
    company: 'ABC',
    title: 'abc',
    period: 'timeline',
  },
  {
    id: 1,
    company: 'XYZ',
    title: 'xyz',
    period: 'timeline',
  },
];
