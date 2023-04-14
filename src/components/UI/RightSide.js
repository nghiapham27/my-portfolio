'use client';
import { motion } from 'framer-motion';

const RightSide = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: 1, x: '0' }}
      transition={{ duration: 0.5 }}
      className="fixed right-0 bottom-0 "
    >
      <div className="hidden xl:flex flex-col w-[120px] h-[250px] justify-between items-center">
        <p className="hover:text-lightColor rotate-90 cursor-pointer text-primaryColor tracking-wide">
          <a href="mailto:nghiaph27@gmail.com">nghiaph27@gmail.com</a>
        </p>
        {/* vertical divider */}
        <div className="h-[120px] w-[2px] bg-darkColor mt-10"></div>
      </div>
    </motion.div>
  );
};
export default RightSide;
