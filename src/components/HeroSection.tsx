'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section
      className="relative w-full bg-white text-gray-800 overflow-hidden"
      aria-label="Hero section for The Study Campus"
      role="region"
    >

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto pt-24 pb-14 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Text Content */}
        <motion.div
          className="flex-1 space-y-6 text-center lg:text-left"
          initial="hidden"
          whileInView="visible"
          viewport={{ amount: 0.5 }}
          transition={{ staggerChildren: 0.2 }}
        >
          {/* Badge */}
          <motion.span
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="inline-block px-4 py-1 bg-[#004899] text-white text-sm font-medium rounded-full shadow-md"
          >
            Admissions Open 2025-26
          </motion.span>

          <motion.h2
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-xl md:text-2xl font-bold uppercase tracking-widest text-[#004899]"
          >
            Aim High Towards Excellence
          </motion.h2>

          <motion.h3
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
            }}
            className="text-lg md:text-xl"
          >
            with
          </motion.h3>

          <motion.h1
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-4xl md:text-5xl font-bold text-[#004899]"
          >
            The Study Campus
          </motion.h1>

          <motion.p
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.7 } },
            }}
            className="text-base md:text-lg max-w-md mx-auto lg:mx-0 text-gray-700"
          >
            Meerut&apos;s reputed and most trusted institute for nurturing the ordinary into extraordinary.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={{
              hidden: { opacity: 0, y: 20 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            className="pt-4"
          >
            <a
              href="#admission"
              className="inline-block bg-[#004899] text-white px-6 py-2 rounded-full font-medium hover:bg-[#00387a] transition"
            >
              Enquire Now
            </a>
          </motion.div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="flex-1 flex justify-center items-center w-full"
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 150 }}
            className="w-full max-w-xs sm:max-w-md md:max-w-lg"
          >
            <Image
              src="/subject.png"
              alt="Group of subject icons representing education"
              width={600}
              height={300}
              className="object-cover w-full h-auto rounded-xl shadow-lg"
              priority
            />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom Wave or Bar */}
      <motion.div
        className="w-full h-16 sm:h-28 bg-[#004899]"
        initial={{ y: 30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ amount: 0.3 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      />
    </section>
  );
};

export default HeroSection;
