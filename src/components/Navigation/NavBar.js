import Image from 'next/image';
import Link from 'next/link';

import { logo } from '../../../public';
import NavList from './NavList';
import SideBar from './SideBar';

const NavBar = () => {
  return (
    <nav className="w-full h-[10vh] shadow-xl">
      <div className="max-w-7xl h-full px-4 py-2 mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
          <Image
            src={logo}
            alt="logo"
            className="h-[6vh] max-h-[30px] w-auto cursor-pointer hover:brightness-75"
          />
        </Link>
        {/* List */}
        <NavList />
        {/* SideBar */}
        <SideBar />
      </div>
    </nav>
  );
};
export default NavBar;
