import { TbBrandGithub, TbFileText } from 'react-icons/tb';
import { SlSocialLinkedin } from 'react-icons/sl';

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
