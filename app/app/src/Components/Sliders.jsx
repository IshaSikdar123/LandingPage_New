import React from 'react';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import quiz from '@/assets/quiz.png';
import resume from '@/assets/resume.png';
import certify from '@/assets/certify.png';
import mock from '@/assets/mock.png';
import leader from '@/assets/leader.png';
import job from '@/assets/job.png';
import c5 from '@/assets/c5.png';
import robot from '@/assets/robot.png';

const texts = [
  { title: 'Quizmaster', subtitle: 'Hub', image: quiz, para: 'Master data analytics with practice quizzes and coding challenges for a smooth and confident learning experience.' },
  { title: 'Job', subtitle: 'Placement', image: job, para: 'Secure your dream job with tailored support, exclusive opportunities, and expert career guidance.' },
  { title: 'Mock', subtitle: 'Interview', image: mock, para: 'Sharpen your skills and boost your confidence with expert-led mock interviews and comprehensive feedback.' },
  { title: 'Resume', subtitle: 'Preparation', image: resume, para: 'Create standout resumes with personalized guidance, highlighting your skills and achievements effectively.' },
  { title: 'AI', subtitle: 'Doubtmate', image: robot, para: 'Say goodbye to uncertainties; our AI assistant is here to swiftly clear doubts, ensuring a smooth learning.' },
  { title: 'Certify &', subtitle: 'Propel Hub', image: certify, para: 'Achieve certification and accelerate your career with targeted practice to master data analytics skills.' },
  { title: "Leaders's", subtitle: 'Summit', image: leader, para: 'Connect with industry experts, gain insights, and advance your career through exclusive networking opportunities.' },
  { title: 'Credentials', subtitle: 'And Badges', image: c5, para: 'Earn and showcase your achievements with verified credentials and digital badges.' }
];

function Sliders() {
  return (
    <div className="min-w-screen-2xl min-h-[50vh] bg-black flex justify-center items-center text-white relative w-full">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        navigation
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="-p-2 sm:p-4 md:p-6"
        breakpoints={{
          // Small mobile (320px)
          320: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          // Medium mobile (375px)
          375: {
            slidesPerView: 1,
            spaceBetween: 30,
          },
          // Large mobile (425px)
          425: {
            slidesPerView: 1,
            spaceBetween: 40,
          },
          // Tablet (768px)
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          // Laptop (1024px)
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
          // Large screens (1440px)
          1440: {
            slidesPerView: 3,
            spaceBetween: 80,
          },
          // 4K screens (2560px)
          2560: {
            slidesPerView: 4,
            spaceBetween: 100,
          }
        }}
      >
        {texts.map((text, index) => (
          <SwiperSlide key={index} className="mx-1.5 sm:mx-2 md:mx-1.5 lg:mx-0">
          <div
            className="bg-zinc-900 w-[85vw] sm:w-[85vw] md:w-[40vw] lg:w-[30vw] 2xl:w-[25vw] 
                       h-[45vh] sm:h-[45vh] md:h-[45vh] lg:h-[45vh] 
                       flex flex-col justify-center items-start 
                       p-3 sm:p-4 md:p-6 lg:p-8 
                       relative rounded-xl hover:scale-105 transition-transform duration-300 
                       focus:outline-none focus:ring-4 focus:ring-cyan-300 group">
            <h1 className="absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl 
                         -mt-[12rem] sm:-mt-[12rem] md:-mt-[12rem] lg:-mt-[10rem]">
              {text.title}
              <span className="block text-xl sm:text-2xl md:text-3xl lg:text-4xl 2xl:text-5xl">
                {text.subtitle}
              </span>
            </h1>
            <h2 className="mt-2 sm:mt-4 md:mt-6 lg:mt-[6vw] 
                         text-xs sm:text-sm md:text-[14px] lg:text-[15px] 
                         w-[70vw] sm:w-[50vw] md:w-[25vw] lg:w-[18vw] xl:w-[13vw] ">
              {text.para}
            </h2>
            <img 
              src={text.image}
              alt={`${text.title} image`} 
              className={`absolute bottom-4 sm:bottom-4 md:bottom-5 lg:bottom-6 
                          ${index === 1 || index === 2 
                            ? 'w-[40vw] sm:w-32 md:w-40 lg:w-[15vw] right-2 sm:right-2 md:right-3 lg:right-0 xl:right-4 '
                            : index === 6
                            ? 'w-[38vw] sm:w-[24vw] md:w-36 lg:w-[14vw] right-4 sm:right-2 md:right-3 lg:right-0'
                            : index === 3
                            ? 'w-[40vw] sm:w-32 md:w-40 lg:w-[17vw] -right-2 sm:right-2 md:right-3 lg:left-[16.5vw] xl:left-[11vw] '
                            : index === 5
                            ? 'w-[29vw] sm:w-[20vw] md:w-32 lg:w-[10vw] right-4 sm:right-2 md:right-3 lg:right-4'
                            : index === 4
                            ?'w-[29vw] sm:w-[20vw] md:w-36 lg:w-[14vw] xl:w-[12vw] -right-0.5 sm:right-2 md:right-3 lg:left-44 xl:left-52'
                            : 'w-[29vw] sm:w-28 md:w-[15vw] lg:w-[10vw] right-2 sm:right-2 md:right-0 lg:right-4'
                          } 
                          group-hover:brightness-125 group-hover:drop-shadow-[0_0_15px_rgba(0,255,255,0.7)] 
                          transition-all duration-300`} 
            />   
            <button 
              className="relative bg-gradient-to-r from-cyan-500 to-[#2D9BB0] 
                       w-[24vw] sm:w-[16vw] md:w-[12vw] lg:w-[8vw] 
                       h-[4vh] sm:h-[4.5vh] md:h-[5vh] lg:h-[5.5vh] 
                       top-[2rem] sm:top-[2.5rem] md:top-[2rem] lg:top-[1.5rem] 
                       p-1 rounded-2xl 
                       text-[10px] sm:text-[12px] md:text-[14px] lg:text-[17px]">
              Coming soon  
            </button>
          </div>
        </SwiperSlide>
        
        ))}
      </Swiper>

      <style jsx>{`
        :global(.swiper-button-next),
        :global(.swiper-button-prev) {
          color: white;
          @media (max-width: 640px) {
            display: none;
          }
        }
        :global(.swiper-pagination-bullet) {
          background: white;
        }
      `}</style>
    </div>
  );
}

export default Sliders;