const SectionTitle = ({ text }) => {
  return (
    <div className="w-full max-w-max mx-auto">
      <h1 className="text-lightColor text-2xl md:text-3xl lg:text-4xl pb-2 border-b-2 border-b-primaryColor">
        {text}
      </h1>
    </div>
  );
};
export default SectionTitle;
