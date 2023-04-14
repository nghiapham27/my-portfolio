import { TbBrandGithub, TbFileText } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

import {
  js,
  html,
  css,
  react,
  redux,
  tailwindcss,
  antdesign,
  nextjs,
  typescript,
  restapi,
} from '../../public';

export const navList = [
  { id: 0, text: 'Home', url: '/' },
  { id: 1, text: 'About', url: '/about' },
  { id: 2, text: 'Projects', url: '/projects' },
  { id: 3, text: 'Contact', url: '/contact' },
];

export const contacts = [
  { id: 0, text: 'Github', icon: <TbBrandGithub />, url: '/' },
  { id: 1, text: 'Linkedin', icon: <SlSocialLinkedin />, url: '/projects' },
  { id: 2, text: 'resume', icon: <TbFileText />, url: '/' },
];

export const skills = [
  { id: 0, text: 'HTML', icon: html },
  { id: 1, text: 'CSS', icon: css },
  { id: 3, text: 'Javascript', icon: js },
  { id: 4, text: 'React', icon: react },
  { id: 5, text: 'Redux', icon: redux },
  { id: 6, text: 'REST API', icon: restapi },
  { id: 7, text: 'Tailwindcss', icon: tailwindcss },
  { id: 8, text: 'Ant Design', icon: antdesign },
];

export const skillsLearning = [
  { id: 0, text: 'Nextjs', icon: nextjs },
  { id: 1, text: 'Typescript', icon: typescript },
];
