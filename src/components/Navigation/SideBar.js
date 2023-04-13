'use client';

import Link from 'next/link';
import { useState } from 'react';

import { navList } from '@/utils/constants';
import BarIcon from './BarIcon';
import { MdClose } from 'react-icons/md';

const SideBar = () => {
  const [showSideBar, setShowSideBar] = useState(false);
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
      <ul
        className={`fixed top-0 right-0 h-full w-[320px] bg-slate-600 flex flex-col items-center gap-4 justify-center text-xl font-titleFont text-lightColor z-20 transition-all duration-300 ${
          showSideBar ? 'translate-x-0' : 'translate-x-[100%]'
        }`}
      >
        {/* Close button */}
        <MdClose
          className="absolute top-10 right-[280px] cursor-pointer hover:text-primaryColor"
          onClick={() => setShowSideBar(false)}
        />
        {/* Nav List */}
        {navList.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                className="
                hover:text-primaryColor
                transition-all
                duration-300"
                onClick={() => setShowSideBar(false)}
              >
                {link.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default SideBar;
