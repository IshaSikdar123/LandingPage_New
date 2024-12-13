import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';

import back from '@/assets/back.mp4';
import path_to_image1 from '@/assets/path_to_image1.jpg';
import path_to_image2 from '@/assets/path_to_image2.jpg';
import path_to_image3 from '@/assets/path_to_image3.jpg';
import path_to_image4 from '@/assets/path_to_image4.jpg';
import path_to_image5 from '@/assets/path_to_image5.jpg';

const images = [path_to_image1, path_to_image2, path_to_image3, path_to_image4, path_to_image5];

function Slide() {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          src={back}
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Text and Button Section */}
      <div className="relative z-10 flex flex-col items-center top-16 lg:top-0 w-full h-full text-white">
        <h1 className="mb-2 text-3xl font-bold text-center sm:text-4xl md:text-5xl lg:text-6xl">
          Success Stories
        </h1>
        <p className="mb-6 text-sm text-center sm:text-base md:text-lg lg:text-xl">
          Hear from our satisfied students
        </p>
        <button className="px-4 py-2 text-sm transition-colors bg-white rounded-full text-black hover:bg-gray-200 sm:text-base md:px-6 md:py-3">
          Read More &gt;
        </button>
      </div>

      {/* Swiper Carousel */}
      <div className="absolute sm:bottom-0 -lg:bottom-0 bottom-[32vw] left-0 w-full pb-8 z-20">
        <Swiper
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[EffectCoverflow, Pagination, Navigation]}
          className="w-full"
        >
          {images.map((image, index) => (
            <SwiperSlide
              key={index}
              className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-96 lg:h-96"
            >
              <img
                src={image}
                alt={`Success Story ${index + 1}`}
                className="object-cover w-full h-full rounded-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Slide;








// import { cn } from "@/lib/utils";
// import Marquee from "@/components/magicui/marquee";
// import back from '@/assets/back.mp4'; 

// const reviews = [
//   {
//     name: "Jack",
//     username: "@jack",
//     body: "I've never seen anything like this before. It's amazing. I love it.",
//     img: "https://avatar.vercel.sh/jack",
//   },
//   {
//     name: "Jill",
//     username: "@jill",
//     body: "I don't know what to say. I'm speechless. This is amazing.",
//     img: "https://avatar.vercel.sh/jill",
//   },
//   {
//     name: "John",
//     username: "@john",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/john",
//   },
//   {
//     name: "Jane",
//     username: "@jane",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jane",
//   },
//   {
//     name: "Jenny",
//     username: "@jenny",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/jenny",
//   },
//   {
//     name: "James",
//     username: "@james",
//     body: "I'm at a loss for words. This is amazing. I love it.",
//     img: "https://avatar.vercel.sh/james",
//   },
// ];

// const firstRow = reviews.slice(0, reviews.length / 2);
// const secondRow = reviews.slice(reviews.length / 2);

// const ReviewCard = ({ img, name, username, body }) => {
//   return (
//     <figure
//       className={cn(
//         "relative w-64 cursor-pointer overflow-hidden rounded-xl border p-4",
//         "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
//         "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
//       )}
//     >
//       <div className="flex flex-row items-center gap-2">
//         <img className="rounded-full" width="32" height="32" alt="" src={img} />
//         <div className="flex flex-col">
//           <figcaption className="text-sm font-medium dark:text-white">
//             {name}
//           </figcaption>
//           <p className="text-xs font-medium dark:text-white/40">{username}</p>
//         </div>
//       </div>
//       <blockquote className="mt-2 text-sm dark:text-white">{body}</blockquote>
//     </figure>
//   );
// };

// export function Slide() {
//   return (
//     <div className="max-w-screen-2xl h-[10vh] sm:h-[120vh] relative bg-blue-800">
//       {/* Video Background */}
//       <div className="absolute inset-0 w-full h-full">       
//         <video autoPlay loop muted src={back} className="w-full h-full object-cover"></video>
//       </div>

//       {/* Content Layer */}
//       <div className="relative z-10 w-full h-full flex flex-col justify-center gap-12">
//         {/* Title Section */}
//         <div className="text-white flex flex-col w-full text-center mb-8">
//           <h1 className="text-[18px] sm:text-3xl">Success Stories</h1>
//           <h1 className="text-[18px] sm:text-3xl mt-2">Hear from our satisfied students</h1>
//           <button className="text-[10px] sm:text-[18px] cursor-pointer mt-4 sm:mt-8 mx-auto 
//                            w-[20vw] sm:w-[10vw] p-1 sm:p-2 text-center bg-white text-black 
//                            font-semibold rounded-md shadow-lg hover:bg-gray-100 hover:shadow-xl 
//                            transition-all duration-300 ease-in-out transform hover:-translate-y-1">
//             Read More <span className="arrow">&gt;</span>
//           </button>
//         </div>

//         {/* Marquee Section */}
//         <div className="flex flex-col gap-12 bg-white">
//           <Marquee pauseOnHover className="[--duration:20s]">
//             {firstRow.map((review) => (
//               <ReviewCard key={review.username} {...review} />
//             ))}
//           </Marquee>
//           <Marquee reverse pauseOnHover className="[--duration:20s]">
//             {secondRow.map((review) => (
//               <ReviewCard key={review.username} {...review} />
//             ))}
//           </Marquee>
//         </div>

//         {/* Gradient Overlays */}
//         <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-blue-800/50"></div>
//         <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-blue-800/50"></div>
//       </div>
//     </div>
//   );
// }

// export default Slide;