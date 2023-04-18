'use client';

import Link from 'next/link';
import { navList } from '@/utils/constants';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';

let delay = 0.15; // initial animation delay
const NavList = () => {
  const currentPath = usePathname();
  return (
    <div>
      <ul className="hidden md:flex gap-5 text-xl font-titleFont text-lightColor ">
        {navList.map((link, index) => {
          let delayDuration = delay * index;

          return (
            <motion.li
              key={link.id}
              initial={{ opacity: 0, y: '-100%' }}
              animate={{ opacity: 1, y: '0' }}
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
              >
                {link.text}
              </Link>
            </motion.li>
          );
        })}
      </ul>
    </div>
  );
};

export default NavList;
