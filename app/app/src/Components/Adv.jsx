// import React from 'react';
// import roadmap from '@/assets/roadmap.gif';
// import lappy from '@/assets/lappy.mp4';

// function Adv() {
//   return (   
//     <div className="min-w-screen-2xl min-h-[100vh] bg-black flex flex-col items-center">
//       <h1 className="text-2xl sm:text-7xl mt-16 sm:mt-32 gradient-text leading-tight sm:leading-[1.2] overflow-visible">
//         The DataSense
//       </h1>
//       <h1 className="text-2xl sm:text-7xl gradient-text leading-tight sm:leading-[1.5] overflow-visible">
//         Advantages
//       </h1>
//       <div className='w-full flex flex-col items-center mt-10'>
//         <div className='w-[90vw] sm:w-[70vw] h-[70vh] sm:h-[80vh] bg-zinc-900 text-white mt-10 mb-16 flex justify-end rounded-xl border-white border-2'>
//           {/* <video autoPlay loop muted src={lappy} className='w-[40vw]'></video> */}
//           <h1 className=' text-2xl sm:text-6xl'>Codecraft</h1>
//         </div>

//         <div className='relative w-[90vw] sm:w-[70vw] h-[70vh] sm:h-[80vh] z-50 bg-zinc-900 mt-10 flex justify-end rounded-xl border-white border-2 text-white'>
//           <img src={roadmap} alt="Roadmap" className="object-cover object-left sm:w-[33vw] h-[50vh] sm:h-full sm:mr-[35.7rem]" />
          
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Adv;












import React, { useRef } from 'react';
import roadmap from '@/assets/roadmap.gif';
import lappy from '@/assets/lappy.mp4';

function Adv() {
  const videoRef = useRef(null);

  return (   
    <div className="min-w-screen-2xl min-h-screen bg-black flex flex-col items-center overflow-hidden">
      {/* Title Section */}
      <div className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20 xl:mb-24">
        <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          gradient-text leading-tight sm:leading-[1.2] overflow-visible 
          tracking-wide font-bold mt-16 sm:mt-24 md:mt-32">
          The DataSense
        </h1>
        <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 
          gradient-text leading-tight sm:leading-[1.5] overflow-visible 
          tracking-wide font-bold">
          Advantages
        </h2>
      </div>

      {/* Content Sections */}
      <div className='w-full max-w-7xl px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 space-y-8 sm:space-y-10 md:space-y-12 lg:space-y-14 xl:space-y-16'>
        {/* First Section: Codecraft */}
        <div className='w-full bg-zinc-900 text-white flex flex-col sm:flex-row 
          rounded-xl border-white border-2 overflow-hidden 
          min-h-[50vh] sm:min-h-[60vh] md:min-h-[65vh] lg:min-h-[70vh]'>
          <div className='w-full sm:w-1/2 flex flex-col items-center justify-center 
            p-6 sm:p-8 md:p-10 lg:p-12 text-center sm:text-left'>
            <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              mb-4 gradient-text font-bold'>
              Codecraft
            </h3>
            <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 
              max-w-md text-center sm:text-left'>
              Innovative coding solutions that transform your digital landscape with cutting-edge technology.
            </p>
          </div>
          <div className='w-full sm:w-1/2 flex items-center justify-center 
            p-6 sm:p-8 md:p-10 lg:p-12'>
            <video 
              ref={videoRef}
              src={lappy}
              autoPlay
              loop
              muted
              playsInline
              className='object-contain w-full max-w-full max-h-full 
                rounded-lg shadow-lg hover:scale-105 transition-transform duration-300'
              aria-label="Codecraft demonstration video"
            />
          </div>
        </div>

        {/* Second Section: Customized Roadmap */}
        {/* <div className='w-full bg-zinc-900 text-white flex flex-col-reverse sm:flex-row 
          rounded-xl border-white border-2 overflow-hidden
          min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]'>
  <div className='w-full sm:w-1/2 flex items-center justify-center'>
  <div className='w-full h-full relative'>
  <img 
      src={roadmap} 
      alt="Personalized Roadmap" 
      className=' absolute w-[30vw] inset-0 object-cover object-left 
                    sm:w-[48vw] md:w-[44vw] lg:w-[36vw] '
    />
  </div>
   
  </div>
  <div className='w-full sm:w-1/2 flex flex-col items-center justify-center 
            p-6 sm:p-8 md:p-10 lg:p-12 text-center'>
    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              mb-4 gradient-text font-bold'>
      Customized Roadmap
    </h3>
    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 
              max-w-md text-center'>
      Your personalized guide to success, providing a tailored roadmap for your unique journey.
    </p>
  </div>
</div> */}

<div className='w-full bg-zinc-900 text-white flex flex-col-reverse sm:flex-row 
          rounded-xl border-white border-2 overflow-hidden
          min-h-[60vh] sm:min-h-[70vh] md:min-h-[75vh] lg:min-h-[80vh]'>
  <div className='w-full sm:w-1/2 flex items-center justify-center'>
    <div className='w-full h-full '>
    <img 
  src={roadmap} 
  alt="Personalized Roadmap" 
  className='absolute inset-0 object-cover object-left 
            mt-[166vw] 
            left-[6vw]
            w-[88vw] sm:w-[48vw] md:w-[44vw] lg:w-[33vw] h-[30vh]'
  style={{
    clipPath:'polygon(0% 100%)',
  }}
/>

    </div>
  </div>
  <div className='w-full sm:w-1/2 flex flex-col items-center justify-center 
            p-6 sm:p-8 md:p-10 lg:p-12 text-center'>
    <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 
              mb-4 gradient-text font-bold'>
      Customized Roadmap
    </h3>
    <p className='text-sm sm:text-base md:text-lg lg:text-xl text-gray-300 
              max-w-md text-center'>
      Your personalized guide to success, providing a tailored roadmap for your unique journey.
    </p>
  </div>
</div>


      </div>
    </div>
  );
}

export default Adv;