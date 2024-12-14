import React from 'react';
import video from '../assets/video.mp4';
import logodata from '../assets/logodata.png';
import Spline from '@splinetool/react-spline';

function Dash() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <video 
          src={video} 
          autoPlay 
          loop 
          muted 
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Top-Right Logo */}
      <div className="absolute top-4 right-4 z-30">
        <img 
          src={logodata} 
          alt="Logo" 
          className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain"
        />
      </div>

      {/* Spline Container */}
      <div className="absolute inset-0 z-10 mt-[110vw] sm:mt-10 md:lg-0 lg:mt-32">
        <Spline
          scene="https://prod.spline.design/UeAq4OV1tdx6x0VL/scene.splinecode"
          className="w-full h-full"
        />
      </div>

      {/* Content Container */}
      <div className="relative z-20 w-full h-full">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-6 lg:px-8 xl:px-10">
          <div className="text-white">
            {/* Hero Text */}
            <div className="pt-20 md:pt-28 lg:pt-32 xl:pt-40">
              <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                <span className="block mb-2">Elevate Your Career</span>
                <span className="block mb-2">as a Data Analyst</span>
                <span className="block">with datasense</span>
              </h1>
            </div>

            {/* Subtitle */}
            <div className="mt-4 md:mt-6 lg:mt-8">
              <div className="text-sm md:text-base lg:text-lg xl:text-xl space-y-1">
                <p>Empower yourself with cutting-edge skills,</p>
                <p>network with industry experts,</p>
                <p>and ignite your data career journey.</p>
              </div>
            </div>

            {/* Buttons Container */}
            <div className="mt-6 md:mt-8 lg:mt-10 flex flex-row justify-center gap-4 w-full max-w-2xl">
              {/* Learn More Button */}
              <button className="flex-1 px-3 py-3 border border-white rounded-[21px] text-sm md:text-base font-semibold transition-all duration-300 hover:bg-white/20">
                Learn More
              </button>

              {/* Get Started Button */}
              <button className="flex-1 generate-button group flex items-center justify-center bg-gray-900 text-gray-400 px-3 py-2 rounded-3xl transition-all duration-300 ease-in-out transform active:scale-95 hover:scale-105 hover:bg-[#308384] hover:text-white hover:shadow-[0_0_20px_rgba(48, 131 ,132 ,0.7)] hover:ring-4 hover:ring-[#308384] hover:ring-opacity-50">
                <svg className="icon w-5 h-5 md:w-6 md:h-6 mr-3 fill-current group-hover:animate-pulse" viewBox="0 0 24 26">
                  <path d="M5.16515 2.62145L5.8075 0.999247C5.83876 0.919722 5.9154 0.866699 6.00112 0.866699C6.08683 0.866699 6.16347 0.919722 6.19473 0.999247L6.83708 2.62145L8.44145 3.27094C8.5201 3.30254 8.57254 3.38003 8.57254 3.4667C8.57254 3.55337 8.5201 3.63085 8.44145 3.66246L6.83708 4.31195L6.19473 5.93415C6.16347 6.0147 6.08683 6.0667 6.00112 6.0667C5.9154 6.0667 5.83876 6.0147 5.8075 5.93415L5.16515 4.31195L3.56078 3.66246C3.48112 3.63085 3.42969 3.55337 3.42969 3.4667C3.42969 3.38003 3.48112 3.30254 3.56078 3.27094L5.16515 2.62145Z" />
                  <path d="M11.2362 9.43967C11.5502 9.30067 11.8015 9.05025 11.9405 8.73617L13.5494 5.11725C13.7169 4.74204 14.0887 4.5 14.5 4.5C14.9112 4.5 15.2839 4.74204 15.4506 5.11725L17.0603 8.73617C17.1985 9.05025 17.4497 9.3015 17.7638 9.43967L21.3827 11.0494C21.7579 11.2161 22 11.5887 22 12C22 12.4112 21.7579 12.7831 21.3827 12.9506L17.7638 14.5595C17.4497 14.6985 17.1993 14.9497 17.0603 15.2638L15.4506 18.8827C15.2839 19.2579 14.9112 19.5 14.5 19.5C14.0887 19.5 13.7169 19.2579 13.5494 18.8827L11.9405 15.2638C11.8015 14.9497 11.5502 14.6985 11.2362 14.5595L7.61725 12.9506C7.24204 12.7831 7 12.4112 7 12C7 11.5887 7.24204 11.2161 7.61725 11.0494L11.2362 9.43967Z" />
                  <path d="M4.60728 19.392L5.67703 16.6875C5.72997 16.5541 5.85854 16.4666 6.00056 16.4666C6.14258 16.4666 6.27031 16.5541 6.32325 16.6875L7.39299 19.392L10.0678 20.4736C10.1997 20.5271 10.2863 20.6563 10.2863 20.7999C10.2863 20.9435 10.1997 21.0735 10.0678 21.1271L7.39299 22.2087L6.32325 24.9123C6.27031 25.0457 6.14258 25.1332 6.00056 25.1332C5.85854 25.1332 5.72997 25.0457 5.67703 24.9123L4.60728 22.2087L1.93333 21.1271C1.8014 21.0735 1.71484 20.9435 1.71484 20.7999C1.71484 20.6563 1.8014 20.5271 1.93333 20.4736L4.60728 19.392Z" />
                </svg>
                <span className="text-base md:text-lg font-semibold leading-6">Get Started</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dash;
