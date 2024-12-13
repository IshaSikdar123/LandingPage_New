import React from 'react';
import bgimage from '@/assets/bgimage.png';
import body from '@/assets/body.png';

function Why() {
  return (
    <div className='min-w-screen-2xl min-h-screen bg-red-600 relative'>
      <img src={bgimage} alt="Background" className='w-full h-full object-cover absolute top-0 left-0' />

      <div className='relative flex flex-col items-center justify-center min-h-screen z-20 text-white'>
        <h1 className='text-center text-[35px] sm:text-5xl -mt-10 sm:mt-14 '>
          WHY US?
        </h1>
      <h2 className=' w-[80vw] text-center text-[14px] sm:text-[18px] mt-2'>
          At DataSense, we fuel ambition, transforming everyday individuals into data superheroes primed to conquer their dream careers in analytics and business intelligence. With a proven track record of propelling over 100,000 students into the stratosphere of data success, we're not just pioneers, we're trailblazers igniting the future of data excellence.
        </h2>
        <button className=' bg-transparent w-[25vw] sm:w-[11vw] h-[6vh] text-center rounded-2xl mt-10 text-[15px] sm:text-[18px] border hover:bg-zinc-800 '>Learn More</button>
        <img src={body} alt="Body" className='mt-8 w-[120vw] sm:w-[80vw] ' />
      </div>
    </div>
  );
}

export default Why;
