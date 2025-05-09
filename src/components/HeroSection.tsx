'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="w-full bg-white text-gray-800"
      aria-label="Hero section for The Study Campus"
    >
      {/* Content Section */}
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <motion.div
          className="flex-1 space-y-4 text-center lg:text-left"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the section is in view
          transition={{ duration: 1, delay: 0.3 }}
        >
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest">
            Aim High Towards Excellence
          </h2>
          <h3 className="text-xl md:text-2xl">
            with
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold">
            <span className="text-[#004899]">The Study Campus</span>
          </h1>
          <p className="text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Meerut&apos;s reputed and most trusted institute for nurturing the ordinary into extraordinary.
          </p>
        </motion.div>

        {/* Subject Image Cards */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the section is in view
          transition={{ duration: 1, delay: 0.5 }}
        >
          <div className="flex flex-row gap-3 w-full max-w-xs sm:max-w-md md:max-w-lg overflow-hidden">
            <Image
              src="/subject.png"
              alt="Subjects"
              width={600}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>
        </motion.div>
      </div>

      {/* Blue Bar at the Bottom */}
      <motion.div
        className="w-full h-16 sm:h-40 bg-[#004899]"
        initial={{ y: 20 }}
        whileInView={{ y: 0 }}
        viewport={{ amount: 0.5 }} // Trigger animation when 50% of the section is in view
        transition={{ duration: 0.5, delay: 0.7 }}
      />
    </section>
  );
};

export default HeroSection;



