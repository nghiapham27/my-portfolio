'use client';

import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

import { navList, socials } from '@/utils/constants';
import BarIcon from './BarIcon';
import { MdClose } from 'react-icons/md';

let delay = 0.15; // initial animation delay
const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  const currentPath = usePathname();

  return (
    <div className="md:hidden">
      {/* Sidebar icon */}
      <div
        onClick={() => {
          setShowSideBar(true);
        }}
      >
        <BarIcon />
      </div>

      {/* Overlay */}
      {showSideBar && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-bodyColor/80 z-10"
          onClick={() => setShowSideBar(false)}
        ></div>
      )}
      {/* SideBar */}
      {showSideBar && (
        <div className="fixed top-0 right-0 h-full w-[320px] bg-slate-600  z-20">
          <div className="w-full h-full flex flex-col justify-center relative">
            {/* Close button */}
            <MdClose
              size={25}
              className="absolute top-10 right-[280px] text-lightColor cursor-pointer hover:text-primaryColor"
              onClick={() => setShowSideBar(false)}
            />
            <motion.ul
              initial={{ opacity: 0, x: '100%' }}
              animate={{ opacity: 1, x: '0' }}
              exit={{ opacity: 0, x: '100%' }}
              transition={{ duration: 0.5 }}
              className={`flex flex-col items-center gap-4 justify-center text-xl font-titleFont text-lightColor transition-all duration-300 `}
            >
              {/* Nav List */}
              {navList.map((link, index) => {
                let delayDuration = 0.5 + delay * index;

                return (
                  <motion.li
                    key={link.id}
                    initial={{ opacity: 0, x: '100%' }}
                    animate={{ opacity: 1, x: '0' }}
                    transition={{ duration: 0.5, delay: delayDuration }}
                  >
                    <Link
                      href={link.url}
                      className={`
                hover:text-primaryColor
                transition-all
                duration-100
                ${
                  currentPath === link.url
                    ? 'border-b-2 border-primaryColor'
                    : ''
                }`}
                      onClick={() => setShowSideBar(false)}
                    >
                      {link.text}
                    </Link>
                  </motion.li>
                );
              })}
            </motion.ul>
            <ul className="w-full flex justify-center gap-8 items-center mt-10">
              {socials.map((contact, index) => {
                let delayDuration = delay * index;
                return (
                  <motion.li
                    key={contact.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 2, delay: delayDuration }}
                    className="w-[40px] h-[40px] rounded-full bg-primaryColor flex items-center justify-center shadow-lg cursor-pointer group hover:-translate-y-1 hover:bg-lightColor transition-all duration-300"
                  >
                    <a
                      href={contact.url}
                      target="_blank"
                      className="text-2xl text-lightColor group-hover:text-primaryColor "
                    >
                      {contact.icon}
                    </a>
                  </motion.li>
                );
              })}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};
export default SideBar;

/*

*/
