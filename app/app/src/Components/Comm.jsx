import React from 'react'

function Comm() {
  return (
    <div className="min-w-screen-2xl h-[22vh] bg-black relative flex flex-col sm:flex-row items-center justify-between px-4 sm:px-28">
      <div className="absolute inset-0 h-30 bg-customCyan blur"></div>

      {/* Text Section */}
      <div className="text-white z-10 sm:ml-0 mt-2 sm:mt-0">
        <h1 className="text-[14px] sm:text-3xl font-bold text-white">
          Data Analytics Community
        </h1>
        <span className="text-[13px]">
          Connect with like-minded data analytics professionals and expand your network.
        </span>
      </div>

      <div className="relative flex flex-row sm:flex-col gap-2 -top-3 sm:top-0 sm:gap-4 left-1 sm:right-5 z-10">
        <button className="w-28 sm:w-36 text-[13px] sm:text-[17px] h-8 sm:h-10 bg-zinc-900 text-white rounded-lg border p-1 ">
          Learn More
        </button>
        <button className="w-28 sm:w-36 text-[13px] sm:text-[17px] h-8 sm:h-10 bg-white text-black rounded-lg p-1">
          Join Community
        </button>
      </div>
    </div>
  )
}

export default Comm