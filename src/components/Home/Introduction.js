'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { profile } from '../../../public';
import { skills, skillsLearning } from '@/utils/constants';
import SkillCard from '../UI/SkillCard';

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
          <h1 className="text-lightColor font-titleFont text-3xl lg:text-5xl mt-5">
            Pham Trung Nghia
          </h1>
          <h3 className="text-darkColor font-titleFont text-xl lg:text-2xl">
            Process Engineer
          </h3>
          <div className="text-darkColor font-bodyFont text-xl mt-4">
            <p>
              A results-driven engineer with 2 years of hands-on experience in
              enhancing production workflows and project management.
            </p>
            <p className="mt-2">
              Proficient in analyzing, developing, and implementing process
              improvements that elevate efficiency, reduce costs, and optimize
              resource utilization.
            </p>
            <p className="mt-2">
              Passionate about innovation and dedicated to enhancing efficiency,
              reliability, and sustainability in every project undertaken.
            </p>
          </div>
          <div className="w-max group overflow-hidden">
            <Link href={'/about'} className="text-primaryColor text-lg">
              More about me
            </Link>
            <div className="w-full h-[2px] bg-primaryColor -translate-x-[110%] transition-all duration-300 group-hover:translate-x-0 "></div>
          </div>
          {/* <Link href={'/projects'} className="btn-primary text-lg mt-4">
            My Projects
          </Link> */}
        </div>

        {/* Profile Photo */}
        <div className="shrink-0 flex items-center justify-center">
          <Image
            src={profile}
            alt="my photo"
            className="w-[150px] h-[150px] rounded-full object-cover"
          />
        </div>
      </div>
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
