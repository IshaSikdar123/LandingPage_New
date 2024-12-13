import React from 'react';
import ShimmerButton from "@/components/magicui/shimmer-button";
import globe from '@/assets/globe.mp4';
import ellipse from '@/assets/ellipse.png';
import calendar from '@/assets/calendar.png';
import simmer from '@/assets/simmer.png';

function Globe() {
  return (
    <div className="min-h-screen w-full bg-black text-white flex flex-col items-center justify-start px-4 md:px-6 lg:px-8 xl:px-12 2xl:px-16">
      {/* Page Heading */}
      <div className="text-center w-full max-w-4xl mx-auto pt-16 sm:pt-20 md:pt-24 lg:pt-28">
        <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
          Join our Community
        </h1>
        <p className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-2xl mt-3 sm:mt-4 md:mt-6 text-gray-300">
          Participate in events and connect with other data analytics enthusiasts.
        </p>
      </div>

      <div className="w-full flex flex-col md:flex-row items-center justify-center gap-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        {/* Video Section */}
        <div className="w-full md:w-[60vw] lg:w-2/3 xl:w-3/4 h-[40vh] xs:h-[45vh] sm:h-[50vh] md:h-[65vh] lg:h-[70vh] xl:h-[80vh] rounded-xl overflow-hidden">
          <video 
            autoPlay 
            loop 
            muted 
            src={globe} 
            className="w-full h-full object-cover"
          ></video>
        </div>

        {/* Text and Icons Section */}
        <div className="w-full md:w-1/2 lg:w-1/3 xl:w-1/4 p-4 sm:p-6 md:p-8">
          <div className="space-y-6 sm:space-y-8 md:space-y-10">
            {/* Webinars */}
            <div className="flex items-start space-x-4">
              <img 
                src={ellipse} 
                alt="Webinars Icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 mt-1"
              />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Webinars
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Connect with professionals in the industry
                </p>
              </div>
            </div>

            {/* Meetups */}
            <div className="flex items-start space-x-4">
              <img 
                src={calendar} 
                alt="Meetups Icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 mt-1"
              />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Meetups
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Learn from industry experts
                </p>
              </div>
            </div>

            {/* Networking Events */}
            <div className="flex items-start space-x-4">
              <img 
                src={simmer} 
                alt="Networking Icon" 
                className="w-8 h-8 sm:w-10 sm:h-10 mt-1"
              />
              <div>
                <h3 className="text-base sm:text-lg md:text-xl font-semibold">
                  Networking Events
                </h3>
                <p className="text-sm sm:text-base text-gray-400 mt-1">
                  Engage with fellow learners
                </p>
              </div>
            </div>
          </div>

          {/* Join Now Button */}
          <div className="mt-8 sm:mt-10 md:mt-12 md:ml-[10vw] lg:ml-[7vw] xl:ml-[7vw] 2xl:ml-[3.5vw]">
            <ShimmerButton className="w-full sm:w-auto px-6 py-3 rounded-full border border-white hover:bg-white/10 transition duration-300">
              <span className="text-sm sm:text-base font-medium tracking-tight text-white">
                Join Now
              </span>
            </ShimmerButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Globe;