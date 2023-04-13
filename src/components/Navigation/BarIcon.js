const BarIcon = () => {
  return (
    <div className="flex flex-col gap-2 items-center md:hidden w-8 h-8 py-1 group cursor-pointer overflow-hidden">
      <div className="w-full h-[3px] bg-primaryColor transition-all ease-in-out duration-300 translate-x-0 group-hover:translate-x-2"></div>
      <div className="w-full h-[3px] bg-primaryColor transition-all duration-300 translate-x-3 group-hover:translate-x-0"></div>
      <div className="w-full h-[3px] bg-primaryColor transition-all duration-300 translate-x-2 group-hover:translate-x-3"></div>
    </div>
  );
};
export default BarIcon;
