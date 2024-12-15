import React from 'react';

function Video() {
  return (
    <div className="min-w-screen-2xl min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Section */}
      <div className="relative flex flex-col justify-center text-center md:items-center md:ml-[10vw] lg:ml-[38vw] p-5 ">
        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-5 md:mt-8 text-center md:text-left w-full "> 
          Latest Updates 
        </h1>
        <h2 className="text-center md:text-left mt-4 text-lg md:text-xl max-w-xl md:ml-4 lg:mr-[33vw] ">
          Stay updated with our social media posts
        </h2>

        {/* Follow Us Button */}  
        <div className="flex justify-center md:justify-start lg:ml-[15vw] w-full">
          <button className="p-3 mt-6 bg-blue-500 text-white rounded-full hover:bg-blue-800 transition md:ml-4">
            Follow Us
          </button>
        </div>
      </div>

      {/* Videos Section */}
      <div className="flex flex-col md:flex-row justify-center items-center space-y-8 md:space-y-0 md:space-x-8 mt-8 px-4 md:px-0">
        {/* First Video */}
        <div className="w-full md:w-1/3 max-w-[400px] h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/gtKSQJikzHg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="Video 1"
          ></iframe>
        </div>

        {/* Second Video */}
        <div className="w-full md:w-1/3 max-w-[400px] h-[50vh] md:h-[70vh] rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/gtKSQJikzHg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="Video 2"
          ></iframe>
        </div>

        {/* Third Video */}
        <div className="w-full md:w-1/3 max-w-[400px] h-[50vh] md:h-[70vh]  rounded-xl overflow-hidden shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/gtKSQJikzHg"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full"
            title="Video 3"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Video;