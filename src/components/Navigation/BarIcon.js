import { motion } from 'framer-motion';

const BarIcon = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="flex flex-col justify-between items-center md:hidden w-8 h-8 py-1 group cursor-pointer overflow-hidden"
    >
      <div className="w-full h-[3px] bg-primaryColor transition-all ease-in-out duration-300 translate-x-0 group-hover:translate-x-2"></div>
      <div className="w-full h-[3px] bg-primaryColor transition-all duration-300 translate-x-3 group-hover:translate-x-0"></div>
      <div className="w-full h-[3px] bg-primaryColor transition-all duration-300 translate-x-2 group-hover:translate-x-3"></div>
    </motion.div>
  );
};
export default BarIcon;
