'use client';
import { aboutMenu, onlineCourses } from '@/utils/constants';
import { useState } from 'react';
import { motion } from 'framer-motion';

const About = () => {
  const [activeMenu, setActiveMenu] = useState(aboutMenu[0].text);

  return (
    <div className="w-full h-[50vh] max-h-[400px] flex gap-5 mt-10 text-darkColor">
      {/* Menu column */}
      <div className="w-1/3  text-xl">
        <ul className="flex flex-col border-l-4 border-gray-300">
          {aboutMenu.map((menu) => {
            return (
              <li
                key={menu.id}
                className={`flex gap-2 text-xl items-center py-6 cursor-pointer pl-2 border-l-4 -ml-[4px]  hover:bg-hoverColor ${
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
              <h2 className="text-lightColor text-xl">My University</h2>
              <h3>My Major</h3>
              <h3>Time</h3>
            </div>
            {/* Self-taught */}
            <div className="mt-4">
              <h2 className="text-lightColor text-xl">Self-taught</h2>
              <h3>Platform: Udemmy</h3>
              <ul>
                {onlineCourses.map((course) => {
                  return <li key={course.id}>{course.text}</li>;
                })}
              </ul>
            </div>
          </motion.div>
        )}
        {/* Work */}
        {activeMenu === aboutMenu[1].text && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: '0' }}
            transition={{ duration: 1 }}
          >
            <div>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
              molestias dolorem tenetur odit recusandae vel laboriosam vitae
              mollitia nemo ipsum nesciunt magni, laudantium fugiat voluptates
              hic nam.
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
};
export default About;
