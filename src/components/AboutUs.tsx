'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const iconCards = [
  { src: '/icons/board.png', alt: 'Boards', bg: 'bg-white' },
  { src: '/icons/foundation.png', alt: 'Foundation', bg: 'bg-[#044b9c]' },
  { src: '/icons/neet.png', alt: 'NEET', bg: 'bg-[#044b9c]' },
  { src: '/icons/jee.png', alt: 'JEE', bg: 'bg-white' },
];

const AboutUs = () => {
  return (
    <section
      className="relative w-full bg-white px-6 md:px-20 py-20 overflow-hidden scroll-mt-60"
      id="about"
      aria-labelledby="about-heading"
    >
      {/* Decorative Bottom Bar */}
      <div className="absolute bottom-0 left-0 w-full h-20 bg-[#004899] -translate-y-1/2 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 space-y-6"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="about-heading"
            className="text-3xl md:text-4xl font-bold text-center md:text-left drop-shadow-md"
          >
            About Us
          </h2>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify px-1">
            Welcome to <strong>The Study Center – Aim Towards Excellence</strong>, where
            passion meets purpose. Founded by <em>Er. Lakshay Sharma</em>, our institute is
            committed to nurturing minds, fostering clarity, and transforming potential into excellence.
          </p>
          <p className="text-sm md:text-base text-gray-700 leading-relaxed text-justify px-1">
            We empower students through structured programs designed to build foundational knowledge and problem-solving skills for Boards, JEE, NEET, and beyond.
          </p>

          {/* Quote Block */}
          <motion.blockquote
            className="bg-gray-100 border-l-4 border-b-blue-300 p-4 italic rounded-md text-sm text-gray-800 shadow-md"
            whileHover={{ scale: 1.02 }}
            transition={{ type: 'spring', stiffness: 150 }}
          >
            &quot;Education is not about marks, it&apos;s about meaning. We inspire children to seek
            knowledge, not just grades.&quot; — <strong>Er. Lakshay Sharma</strong>
          </motion.blockquote>
        </motion.div>

        {/* Icon Grid Section */}
        <motion.div
          className="bg-gray-100 rounded-xl shadow-xl p-6 md:ml-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.4, once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {iconCards.map(({ src, alt, bg }, index) => (
              <motion.div
                key={alt}
                whileHover={{ scale: 1.1, rotate: [0, 2, -2, 0] }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                className={`${bg} rounded-lg shadow-md hover:shadow-orange-300 flex items-center justify-center p-5 transition duration-300 hover:ring-2 hover:ring-orange-400 hover:ring-offset-1`}
              >
                <div className="relative w-16 md:w-28 aspect-square motion-safe:animate-float-slow">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 40vw, 15vw"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
