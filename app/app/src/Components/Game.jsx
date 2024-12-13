// import React from 'react';
// import env from '@/assets/env.mp4';

// function Game() {
//   return (
//     <div className='min-w-screen min-h-[95vh] sm:min-h-[115vh] bg-black relative'>
//       <div className='relative text-white flex flex-col items-center justify-center'>
//         <h1 className='text-4xl sm:text-7xl gradient-text mt-12 text-center'>
//           Game Learn Hub
//         </h1>
//         <h1 className='text-[15px] sm:text-[20px] gradient-text mt-4 text-center max-w-[20rem] sm:max-w-[41rem]'>
//           Experience education like never before with our gamified approach,
//         </h1>
//         <h1 className='text-[15px] sm:text-[20px] gradient-text text-center max-w-[20rem] sm:max-w-[40rem] gradient-text'>
//           making learning engaging and fun.
//         </h1> 
//       </div>
      
//       <div className='absolute w-[95vw] sm:w-[70vw] h-[50vh] sm:h-[75vh] ml-[3vw] sm:ml-[15vw] mt-10 sm:mt-10 rounded-[50px] overflow-hidden border-4 border-[rgb(0,249,229)]  '>
//        <video autoPlay loop muted src={env} className='object-cover w-full h-full transform scale-125'></video>
//       </div>
//     </div>
//   )
// }

// export default Game



import React from 'react';
import env from '@/assets/env.mp4';


function Game() {
  return (
    <div className='min-w-screen min-h-[70vh] bg-black relative flex flex-col items-center px-4'>
      {/* Hero Text Section */}
      <div className='relative text-white flex flex-col items-center justify-center w-full max-w-7xl mx-auto pt-8 md:pt-12 lg:pt-16'>
        <h1 className='text-3xl md:text-5xl lg:text-7xl xl:text-8xl gradient-text text-center'>
          Game Learn Hub
        </h1>
        
        <div className='mt-4 md:mt-6 space-y-2 md:space-y-3'>
          <p className='text-sm md:text-base lg:text-xl xl:text-2xl gradient-text text-center max-w-xs md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
            Experience education like never before with our gamified approach,
          </p>
          <p className='text-sm md:text-base lg:text-xl xl:text-2xl gradient-text text-center max-w-xs md:max-w-2xl lg:max-w-3xl xl:max-w-4xl'>
            making learning engaging and fun.
          </p>
        </div>
      </div>

      {/* Video Container */}
      <div className='relative w-full mt-8 md:mt-10 lg:mt-12 px-4 md:px-8 lg:px-12 xl:px-16'>
        <div className='aspect-video w-full max-w-5xl mx-auto rounded-3xl md:rounded-[50px] overflow-hidden border-2 md:border-4 border-[rgb(0,249,229)]'>
          <video 
            autoPlay 
            loop 
            muted 
            src={env} 
            className='object-cover w-full h-full transform scale-125'
          />
        </div>
      </div>
    </div>
  );
}

export default Game;