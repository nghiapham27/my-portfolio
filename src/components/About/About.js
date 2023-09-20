'use client';
import { useState } from 'react';

import { aboutMenu, experiences, onlineCourses } from '@/utils/constants';
import { motion } from 'framer-motion';
import { MdNavigateNext } from 'react-icons/md';

const About = () => {
  const [activeMenu, setActiveMenu] = useState(aboutMenu[0].text);

  return (
    <div className="w-full h-[50vh] max-h-[400px] flex gap-5 mt-10 text-darkColor text-base md:text-xl">
      {/* Menu column */}
      <div className="w-1/3 text-base md:text-xl">
        <ul className="flex flex-col border-l-2 border-gray-300">
          {aboutMenu.map((menu) => {
            return (
              <li
                key={menu.id}
                className={`flex gap-2 items-center py-6 cursor-pointer pl-2 border-l-2 -ml-[2px]  hover:bg-hoverColor ${
                  activeMenu === menu.text ? 'border-primaryColor' : ''
                }`}
                onClick={() => setActiveMenu(menu.text)}
              >
                {menu.icon} <span>{menu.text}</span>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Description */}
      <div className="w-2/3">
        {/* Education */}
        {activeMenu === aboutMenu[0].text && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1 }}
          >
            {/* University */}
            <div>
              <h2 className="text-lightColor">B.E Mechatronics Engineering</h2>
              <h3 className="mt-2">
                Ho Chi Minh City University of Technology (HCMUT)
              </h3>
              <h3 className="mt-2">Course: 2014 - 2018</h3>
            </div>
            {/* Self-taught */}
            {/* <div className="mt-4">
              <h2 className="text-lightColor">Online Courses</h2>
              <h3>Platform: Udemy</h3>
              <ul className="mt-4 flex flex-col gap-y-4">
                {onlineCourses.map((course) => {
                  return (
                    <li key={course.id} className="flex gap-1 items-center">
                      <MdNavigateNext className="text-primaryColor shrink-0" />
                      <div className="group overflow-hidden">
                        <a href={course.url} target="_blank">
                          {course.title}
                        </a>
                        <div className="w-full h-[2px] bg-primaryColor -translate-x-[110%] transition-all duration-500 group-hover:translate-x-0 "></div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            </div> */}
          </motion.div>
        )}
        {/* Experiences */}
        {activeMenu === aboutMenu[1].text && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1 }}
          >
            <ul className="mt-4 flex flex-col gap-y-4">
              {experiences.map((job) => {
                return (
                  <li key={job.id} className="flex gap-1 items-start mb-5">
                    {/* <div> */}
                    <MdNavigateNext className="text-primaryColor shrink-0" />
                    <div className="group overflow-hidden text-lightColor">
                      {job.title}
                      <div className="w-40 h-[2px] bg-primaryColor -translate-x-[110%] transition-all duration-500 group-hover:translate-x-0 "></div>
                      <div className="text-darkColor mt-2">{job.company}</div>
                      <div className="text-darkColor mt-2">{job.period}</div>
                    </div>
                    {/* </div> */}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default About;
