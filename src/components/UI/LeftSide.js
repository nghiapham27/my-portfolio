import { contacts } from '@/utils/constants';

const LeftSide = () => {
  return (
    <div className="absolute left-0 bottom-0 ">
      <div className="hidden lg:flex flex-col w-[120px] justify-end items-center">
        {/* contacts list */}
        <ul className="flex flex-col gap-6">
          {contacts.map((contact) => {
            return (
              <li
                key={contact.id}
                className="w-[40px] h-[40px] rounded-full bg-darkColor flex items-center justify-center shadow-lg cursor-pointer group hover:-translate-y-1 transition-all duration-300"
              >
                <a
                  href=""
                  target="_blank"
                  className="text-2xl text-lightColor group-hover:text-primaryColor"
                >
                  {contact.icon}
                </a>
              </li>
            );
          })}
        </ul>

        {/* vertical divider */}
        <div className="h-[120px] w-[2px] bg-darkColor mt-10"></div>
      </div>
    </div>
  );
};
export default LeftSide;
