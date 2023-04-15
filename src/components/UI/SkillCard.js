import Image from 'next/image';

const SkillCard = ({ icon, text }) => {
  return (
    <li className="w-24 border-[2px] border-darkColor rounded-md flex flex-col items-center justify-center cursor-pointer py-1 hover:border-primaryColor">
      <Image src={icon} className="w-10 h-10" alt={text} />
      <p className=" text-darkColor">{text}</p>
    </li>
  );
};
export default SkillCard;
