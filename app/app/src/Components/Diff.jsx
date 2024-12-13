import React from 'react';

const features = [
    { name: "Gamification Learning", others: false, datasense: true},
    { name: "200+ Practice Questions", others: false, datasense: true },
    { name: "Full Length Courses", others: true, datasense: true },
    { name: "Guided Format", others: false, datasense: true },
    { name: "Data Analystics Focused", others: true, datasense: true },
    { name: "Job Placements", others: false, datasense: true },
    { name: "Video Explanations", others: true, datasense: true },
    { name: "Mock Interviews", others: false, datasense: true },    
    { name: "All in One Platform", others: false, datasense: true },      
];

function Diff() {
  return (
    <div className='w-full min-h-screen bg-black px-4 py-8 md:py-12 lg:py-16'>
      {/* Title */}
      <h1 className='text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl 
                     text-center gradient-text mb-8 md:mb-12 lg:mb-16'>
        What's The Difference?
      </h1>

      {/* Comparison Container */}
      <div className='max-w-7xl mx-auto w-full bg-zinc-900 rounded-2xl md:rounded-3xl 
                      p-4 sm:p-6 md:p-8 lg:p-10'>
      {/* <div className=' absolute w-[30vw] h-[30vh] bg-customCyan z-50 blur top-[20vw] '></div>               */}
        {/* Headers */}
        <div className='grid grid-cols-3 gap-4 mb-6 md:mb-8 text-white 
                       text-sm sm:text-base md:text-lg lg:text-xl'>
          <div className='col-span-1'>Features</div>
          <div className='col-span-1 text-center'>Others</div>
          <div className='col-span-1 text-center'>DataSense</div>
        </div>

        {/* Features List */}
        <div className='space-y-4 md:space-y-6'>
          {features.map((feature, index) => (
            <div key={index} 
                 className="grid grid-cols-3 gap-4 items-center text-white
                           text-xs sm:text-sm md:text-base lg:text-lg">
              {/* Feature Name */}
              <div className="col-span-1 pr-2">
                {feature.name}
              </div>

              {/* Others Column */}
              <div className="col-span-1 flex justify-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-12
                                flex items-center justify-center
                                text-lg sm:text-xl md:text-2xl
                                rounded-xl md:rounded-2xl
                                border border-white
                                ${feature.others ? 'bg-[#51a2a6e7]' : 'bg-[rgb(204,96,96)]'}`}>
                  <span className="text-white">
                    {feature.others ? '✔' : '✖'}
                  </span>
                </div>
              </div>

              {/* DataSense Column */} 
              <div className="col-span-1 flex justify-center">
                <div className={`w-12 h-12 sm:w-14 sm:h-14 md:w-24 md:h-12
                                flex items-center justify-center
                                text-lg sm:text-xl md:text-2xl
                                rounded-xl md:rounded-2xl
                                border border-white 
                                ${feature.datasense ? 'bg-[#51a2a6e7]' : 'bg-[rgb(204,96,96)]'}`}>
                  <span className="text-white">
                    {feature.datasense ? '✔' : '✖'} 
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Diff;