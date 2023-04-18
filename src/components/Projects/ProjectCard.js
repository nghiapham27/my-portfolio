'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

import { TbBrandGithub } from 'react-icons/tb';
import { SlGlobe } from 'react-icons/sl';

const ProjectCard = ({ project }) => {
  const { title, description, image, url, github, techStacks } = project;

  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <div className="w-full ">
      {/* Image */}
      <div
        className="w-full relative cursor-pointer"
        onMouseEnter={() => setIsMouseEnter(true)}
        // onMouseLeave={() => setIsMouseEnter(false)}
      >
        <Image
          src={image}
          alt={title}
          className={`w-full h-auto object-cover rounded-md  ${
            isMouseEnter ? 'xl:blur-sm' : ''
          }`}
        />
        {/* Show icons link to website & github */}
        {isMouseEnter && (
          <div
            className="absolute top-0 left-0 w-full h-full cursor-pointer z-20"
            onMouseLeave={() => setIsMouseEnter(false)}
          >
            <div className="w-full h-full hidden xl:flex justify-center items-center gap-8">
              <div className="w-[50px] h-[50px] rounded-full bg-lightColor flex items-center justify-center">
                <a
                  href={url}
                  target="_blank"
                  className="hover:text-primaryColor z-20"
                >
                  <SlGlobe size={35} />
                </a>
              </div>
              <div className="w-[50px] h-[50px] rounded-full bg-lightColor flex items-center justify-center">
                <a
                  href={github}
                  target="_blank"
                  className="hover:text-primaryColor z-20"
                >
                  <TbBrandGithub size={35} />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Text */}
      <div className="py-4">
        <h2 className="text-center text-primaryColor text-2xl lg:text-4xl capitalize">
          {title}
        </h2>
        <h3 className="text-center text-darkColor text-lg lg:text-xl">
          {description}
        </h3>
      </div>
      {/* Button for mobile device */}
      <div className="w-full flex xl:hidden justify-center gap-8">
        <div className="w-[30px] h-[30px] rounded-full bg-lightColor flex items-center justify-center">
          <a
            href={url}
            target="_blank"
            className="hover:text-primaryColor z-20"
          >
            <SlGlobe size={25} />
          </a>
        </div>
        <div className="w-[30px] h-[30px] rounded-full bg-lightColor flex items-center justify-center">
          <a
            href={github}
            target="_blank"
            className="hover:text-primaryColor z-20"
          >
            <TbBrandGithub size={25} />
          </a>
        </div>
      </div>

      {/* Tech Stacks used in the project */}
      <div className="mt-4">
        <ul className="flex flex-wrap justify-center gap-4">
          {techStacks.map((tech) => {
            return (
              <li key={tech.id}>
                <Image
                  src={tech.icon}
                  className="w-8 h-8 md:w-12 md:h-12"
                  alt={tech.text}
                />
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
export default ProjectCard;
