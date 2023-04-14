const SectionTitle = ({ text }) => {
  return (
    <div className="flex items-center gap-10 font-titleFont">
      <h1 className="text-lightColor text-3xl lg:text-4xl">{text}</h1>
      <div className="w-[200px] lg:w-[400px] h-[1px] bg-darkColor"></div>
    </div>
  );
};
export default SectionTitle;
