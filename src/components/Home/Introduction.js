'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { nick_logo, dextools } from '../../../public';
import { skills, skillsLearning } from '@/utils/constants';
import SkillCard from '../UI/SkillCard';
import ProjectsSwiper from './ProjectsSwiper';

const Introduction = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '50px' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <div className="w-full flex flex-col md:flex-row justify-between gap-10">
        {/* Introduction */}
        <div className="w-full md:max-w-[600px] flex flex-col items-center md:items-start">
          <h1 className="text-lightColor font-mono text-3xl lg:text-5xl mt-5 ">
            <a className="text-amber-100">$nick </a>
            <a
              className="text-left bg-gradient-to-r bg-clip-text  text-transparent 
            from-indigo-500 via-purple-300 to-indigo-500
            animate-text"
            >
              is the first token integrated on the Intelligence Layer for AI
              Agents
            </a>
          </h1>

          <Link
            href={
              'https://www.dextools.io/app/en/solana/pair-explorer/67C4rXhY649H828aW8epjbcjLBQVYu7j1eochM8ECE27'
            }
            target="_blank"
            className="text-lightColor font-mono lg:text-2xl md:text-base sm:text-sm mt-5"
          >
            <p>$nick CA:</p>
            <a className="underline">
              5zy77ie2LVoLaMDy2h4SAvPCo3uc8Zno85YGZDZjpump
            </a>
          </Link>
          <div className="text-darkColor font-bodyFont text-xl mt-4">
            <p></p>
            <p className="mt-2"></p>
            <p className="mt-2"></p>
          </div>
          <div className="w-max group overflow-hidden">
            <div className="w-full h-[2px] bg-primaryColor -translate-x-[110%] transition-all duration-300 group-hover:translate-x-0 "></div>
          </div>
          {/* <Link href={'/projects'} className="btn-primary text-lg mt-4">
            My Projects
          </Link> */}
        </div>

        {/* Profile Photo */}

        <div className="shrink-0 flex items-center justify-center">
          <Image
            src={nick_logo}
            alt="nick"
            className="w-[300px] h-[300px] rounded-full object-cover"
          />
        </div>
      </div>

      <ProjectsSwiper />

      {/* Skills */}
      {/* <div className="w-full mt-6">
        <p className="text-xl text-lightColor mb-2">My skills</p>
        <ul className="flex flex-wrap gap-8 gap-y-2 lg:justify-start justify-center">
          {skills.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </ul>
      </div> */}
      {/* I'm diving into... */}
      {/* <div className="w-full mt-4">
        <p className="text-xl text-lightColor mb-2">I&#39;m diving into...</p>
        <ul className="flex gap-10 lg:justify-start justify-center">
          {skillsLearning.map((skill) => {
            return <SkillCard key={skill.id} {...skill} />;
          })}
        </ul>
      </div> */}
    </motion.div>
  );
};
export default Introduction;
