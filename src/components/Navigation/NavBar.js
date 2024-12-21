'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

import { nick } from '../../../public';
import NavList from './NavList';
import SideBar from './SideBar';

const NavBar = () => {
  return (
    <nav className="w-full h-[10vh] shadow-xl">
      <div className="max-w-7xl h-full px-4 py-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: '-100%' }}
          animate={{ opacity: 1, y: '0' }}
          transition={{ duration: 1 }}
        >
          <Link href={'/'}>
            <Image
              src={nick}
              alt="logo"
              className="h-[40px] md:h-[30px] w-auto cursor-pointer hover:brightness-75"
            />
          </Link>
        </motion.div>
        {/* List */}
        <NavList />
        {/* SideBar */}
        <SideBar />
      </div>
    </nav>
  );
};
export default NavBar;
