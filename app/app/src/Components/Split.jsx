import React from 'react';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

function Split() {
  const ref = useRef(null);
  const isInView = useInView(ref, { 
    once: true,
    amount: 0.3 
  });

  return (
    <div 
      ref={ref}
      className="flex justify-center items-center min-h-screen w-full relative bg-black overflow-hidden"
    >
      {/* Left Stick */}
      <motion.div
  initial={{ x: 0 }}
  animate={{ 
    x: isInView ? [-300, -400] : 0, 
    transition: { 
      duration: 1, 
      ease: 'easeInOut',
    }
  }}
  className="absolute w-[2px] h-[55%] bg-teal-200 top-[15%] left-1/2 
  transform -translate-x-1/2
  2xl:h-[60%] 2xl:top-[10%]
  xl:h-[55%] xl:top-[15%]
  lg:h-[50%] lg:top-[20%]
  md:h-[45%] md:top-[25%]
  sm:h-[40%] sm:top-[30%]
  xs:h-[35%] xs:top-[35%]
  shadow-[0_0_30px_#00FFF9,0_0_60px_#00FFF9,0_0_90px_#00FFF9,0_0_120px_#00FFF9,0_0_150px_#009591,0_0_180px_#009591,0_0_210px_#009591,0_0_240px_#009591]"
></motion.div>

{/* Right Stick */}
<motion.div
  initial={{ x: 0 }}
  animate={{ 
    x: isInView ? [300, 400] : 0, 
    transition: { 
      duration: 1, 
      ease: 'easeInOut',
    }
  }}
  className="absolute w-[2px] h-[55%] bg-teal-200 top-[15%] left-1/2 
  transform -translate-x-1/2
  2xl:h-[60%] 2xl:top-[10%]
  xl:h-[55%] xl:top-[15%]
  lg:h-[50%] lg:top-[20%]
  md:h-[45%] md:top-[25%]
  sm:h-[40%] sm:top-[30%]
  xs:h-[35%] xs:top-[35%]
  shadow-[0_0_30px_#00FFF9,0_0_60px_#00FFF9,0_0_90px_#00FFF9,0_0_120px_#00FFF9,0_0_150px_#009591,0_0_180px_#009591,0_0_210px_#009591,0_0_240px_#009591]"
></motion.div>



      

      {/* Heading Text Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: isInView ? 1 : 0, 
          scale: isInView ? 1 : 0,
          transition: { 
            duration: 1, 
            ease: 'easeInOut',
            delay: 0.5
          }
        }}
        className="absolute text-center w-full px-4 flex flex-col items-center justify-center"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-white font-semibold text-center
          2xl:text-5xl 
          xl:text-4xl 
          lg:text-3xl 
          md:text-2xl 
          sm:text-xl 
          xs:text-lg
          max-w-4xl px-4"
        >
          JOIN US TO OPEN THE DOORS TO OPPORTUNITIES
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="text-white font-normal tracking-widest text-center
          2xl:text-base 
          xl:text-sm 
          lg:text-xs 
          md:text-xs 
          sm:text-[10px] 
          xs:text-[8px] 
          mt-2
          max-w-2xl px-4"
        >
          Your Pathway to Success Begins Here
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Split;