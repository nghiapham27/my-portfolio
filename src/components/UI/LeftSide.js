'use client';

import { socials } from '@/utils/constants';
import { motion } from 'framer-motion';

const LeftSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '-100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.5 }}
      className="fixed left-0 bottom-0 "
    >
      <div className="hidden xl:flex flex-col w-[120px] justify-end items-center">
        {/* socials list */}
        <ul className="flex flex-col gap-6">
          {socials.map((contact) => {
            return (
              <li
                key={contact.id}
                className="w-[40px] h-[40px] rounded-full bg-darkColor flex items-center justify-center shadow-lg cursor-pointer group hover:-translate-y-1 transition-all duration-300"
              >
                <a
                  href={contact.url}
                  target="_blank"
                  className="text-2xl text-lightColor group-hover:text-primaryColor"
                >
                  {contact.icon}
                </a>
              </li>
            );
          })}
        </ul>

        {/* vertical divider */}
        <div className="h-[120px] w-[2px] bg-darkColor mt-10"></div>
      </div>
    </motion.div>
  );
};
export default LeftSide;
