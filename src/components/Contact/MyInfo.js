'use client';

import { contacts, socials } from '@/utils/constants';
import { motion } from 'framer-motion';

const MyInfo = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[50vh] max-h-[400px] bg-black/20 shadow-xl rounded-lg mt-10 flex flex-col justify-center"
    >
      {/* Contacts */}
      <div className="max-w-max mx-auto">
        <ul className="flex flex-col gap-4">
          {contacts.map((contact) => {
            return (
              <li
                key={contact.id}
                className="flex items-center gap-8 text-lightColor text-xl"
              >
                <div className="w-8 h-8 rounded-full bg-primaryColor/60 flex justify-center items-center">
                  <div className="text-xl text-lightColor">{contact.icon}</div>
                </div>
                <p className="text-lightColor">{contact.text}</p>
              </li>
            );
          })}
        </ul>
      </div>
      {/* Socials */}
      <div>
        <ul className="w-full flex justify-center gap-8 items-center mt-10">
          {socials.map((contact, index) => {
            return (
              <motion.li
                key={contact.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0 }}
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
    </motion.div>
  );
};
export default MyInfo;
