'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { MdNavigateNext, MdNavigateBefore } from 'react-icons/md';

import 'swiper/swiper.min.css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation, Autoplay } from 'swiper';

import { projects } from '@/utils/constants';
import ProjectCard from './ProjectCard1';
import { motion } from 'framer-motion';

const ProjectsSwiper = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: '50px' }}
      animate={{ opacity: 1, y: '0' }}
      transition={{ duration: 1 }}
    >
      <Swiper
        slidesPerView={'1'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        autoplay={{ delay: 2000 }}
        pagination={{ el: '.pagination', clickable: true }}
        navigation={{
          nextEl: '.next-slider',
          prevEl: '.previous-slider',
          clickable: true,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="w-full max-w-[700px] mt-10"
      >
        {projects.map((project) => {
          return (
            <SwiperSlide key={project.id}>
              <ProjectCard project={project} />
            </SwiperSlide>
          );
        })}

        {/* Slider controller */}
        <div className="flex items-center w-max mx-auto">
          <MdNavigateBefore
            size={40}
            className="next-slider cursor-pointer text-darkColor active:text-primaryColor"
          />
          <div className="pagination flex w-32 justify-between mx-4 cursor-pointer text-lightColor"></div>
          <MdNavigateNext
            size={40}
            className="previous-slider cursor-pointer text-darkColor active:text-primaryColor"
          />
        </div>
      </Swiper>
    </motion.div>
  );
};
export default ProjectsSwiper;
