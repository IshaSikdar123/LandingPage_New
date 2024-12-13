import React from 'react';
import { motion } from 'framer-motion';

function Split() {
  return (
    <div className="flex justify-center items-center min-h-screen w-full relative bg-black overflow-hidden">
      {/* Left Stick */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ 
          x: [0, -300, -400], 
          transition: { 
            duration: 2, 
            ease: 'easeInOut',
            times: [0, 0.7, 1]
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
        shadow-[0_0_20px_#00FFF9,-20px_20px_30px_#00FFF9,-30px_30px_40px_#00FFF9,40px_40px_50px_#00FFF9,-50px_50px_60px_#009591,-60px_60px_70px_#009591,0_0_80px_#009591,0_0_90px_#009591]"
      ></motion.div>

      {/* Right Stick */}
      <motion.div
        initial={{ x: 0 }}
        animate={{ 
          x: [0, 300, 400], 
          transition: { 
            duration: 2, 
            ease: 'easeInOut',
            times: [0, 0.7, 1]
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
        shadow-[0_0_20px_#00FFF9,-20px_20px_30px_#00FFF9,-30px_30px_40px_#00FFF9,40px_40px_50px_#00FFF9,-50px_50px_60px_#009591,-60px_60px_70px_#009591,0_0_80px_#009591,0_0_90px_#009591]"
      ></motion.div>

      {/* Heading Text */}
      <motion.div 
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: 'easeInOut' }}
        viewport={{ once: true }}
        className="absolute text-center w-full px-4"
      >
        <motion.h1
          className="text-white font-semibold 
          2xl:text-5xl 
          xl:text-4xl 
          lg:text-3xl 
          md:text-2xl 
          sm:text-xl 
          xs:text-lg"
        >
          JOIN US TO OPEN THE DOORS TO OPPORTUNITIES
        </motion.h1>

        {/* Subheading Text */}
        <motion.h2
          className="text-white font-normal tracking-widest
          2xl:text-base 
          xl:text-sm 
          lg:text-xs 
          md:text-xs 
          sm:text-[10px] 
          xs:text-[8px] 
          mt-2"
        >
          Your Pathway to Success Begins Here
        </motion.h2>
      </motion.div>
    </div>
  );
}

export default Split;