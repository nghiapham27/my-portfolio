import Link from 'next/link';
import { navList } from '@/utils/constants';

const NavList = () => {
  return (
    <div>
      <ul className="hidden md:flex gap-5 text-xl font-titleFont text-lightColor ">
        {navList.map((link) => {
          return (
            <li key={link.id}>
              <Link
                href={link.url}
                className="
                hover:text-primaryColor
                transition-all
                duration-300"
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

export default NavList;
