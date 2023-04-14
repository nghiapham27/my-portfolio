import Image from 'next/image';

const SkillCard = ({ icon, text }) => {
  return (
    <li className="w-24 h-24 border-[2px] border-darkColor rounded-md flex flex-col items-center justify-center cursor-pointer hover:border-primaryColor">
      <Image src={icon} className="w-16 hh-16" alt={text} />
      <p className=" text-darkColor">{text}</p>
    </li>
  );
};
export default SkillCard;
