const RightSide = () => {
  return (
    <div className="absolute right-0 bottom-0 ">
      <div className="hidden lg:flex flex-col w-[120px] h-[250px] justify-between items-center">
        <p className="hover:text-lightColor rotate-90 cursor-pointer text-primaryColor tracking-wide">
          <a href="mailto:nghiaph27@gmail.com">nghiaph27@gmail.com</a>
        </p>
        {/* vertical divider */}
        <div className="h-[120px] w-[2px] bg-darkColor mt-10"></div>
      </div>
    </div>
  );
};
export default RightSide;
