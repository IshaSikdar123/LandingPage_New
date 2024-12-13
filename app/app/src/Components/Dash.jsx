import React from 'react';
import video from '../assets/video.mp4';
import Spline from '@splinetool/react-spline';

function Dash() {
  return (
    <div className='relative min-h-screen w-full overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0 z-0'>
        <video src={video} autoPlay loop muted className='h-full w-full object-cover'></video>
        <div className='absolute inset-0 bg-black/50'></div>
      </div>

      {/* Spline Container - Positioned behind content but above video */}
      <div className='absolute inset-0 z-50'>
        <Spline
          scene="https://prod.spline.design/UeAq4OV1tdx6x0VL/scene.splinecode"
          className='w-full h-full'
        />
      </div>

      {/* Content Container */}
      <div className='relative z-20 w-full max-w-screen-2xl mx-auto px-5 sm:px-10'>
        <div className='text-white'>
          {/* Hero Text */}
          <div className='para mt-40 sm:mt-[10rem] px-4'>
            <h1 className='text-2xl sm:text-5xl'>Elevate Your Career
            <h1 className='text-2xl sm:text-5xl'>as a Data Analyst</h1>
            <h1 className='text-2xl sm:text-5xl'>with datasense</h1>
            </h1>
          </div>

          {/* Subtitle */}
          <div className='mt-5 sm:mt-[2rem] px-4'>
            <div className='text-[14px] sm:text-[18px]'>
             <h1 className='text-wrap '>Empower yourself with cutting-edge skills</h1>
             <h1>network with industry experts</h1> 
              <h1>and ignite your data career journey.</h1>
            </div>
          </div>

          {/* Buttons */}
          <div className="mt-5 px-4 space-x-5">
            <button className="p-2 sm:p-3 border border-white rounded-[21px] cursor-pointer font-sans font-semibold text-[15px] transition-colors duration-300 ease-in-out hover:bg-white/20">
              Learn More
            </button>
            <button className="p-2 sm:p-3 bg-gradient-to-r from-teal-500 to-teal-600 border border-[#0c6074] rounded-[21px] text-white cursor-pointer font-sans font-normal text-[15px] transition-transform duration-[600ms] hover:scale-90">
              Get Started
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;