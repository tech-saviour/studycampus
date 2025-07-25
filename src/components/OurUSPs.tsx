'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const usps = [
  {
    title: 'Highly experienced teacher',
    icon: '/icons/teacher.png',
    bg: '#004899',
    clip: 'polygon(0 0%, 100% 10%, 100% 80%, 0% 100%)',
    skew: '-skew-y-3',
  },
  {
    title: 'CCTV surveillance',
    icon: '/icons/cctv.png',
    bg: '#2C77C7',
    clip: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 80%)',
    skew: 'skew-y-3',
  },
  {
    title: 'Proven results',
    icon: '/icons/results.png',
    bg: '#004899',
    clip: 'polygon(0 0%, 100% 10%, 100% 80%, 0% 100%)',
    skew: '-skew-y-3',
  },
  {
    title: 'Career Guidance',
    icon: '/icons/career.png',
    bg: '#2C77C7',
    clip: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 80%)',
    skew: 'skew-y-3',
  },
];

const OurUSPs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Heading */}
      <motion.h2
        className="text-2xl text-center md:text-5xl font-bold mb-4 drop-shadow-md"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Our USPs
      </motion.h2>

      <motion.p
        className="text-sm text-center md:text-lg text-gray-700 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        viewport={{ once: true }}
      >
        We have many unique value points out of which major are these
      </motion.p>

      {/* USP Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:flex-nowrap">
        {usps.map((usp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="relative flex flex-col items-center justify-center px-6 py-14 text-center text-white shadow-md transition-all duration-300"
            style={{
              backgroundColor: usp.bg,
              clipPath: usp.clip,
            }}
          >
            {/* Floating Icon Animation */}
            <motion.div
              animate={{
                y: [0, -6, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
            >
              <Image
                src={usp.icon}
                alt={usp.title}
                width={50}
                height={50}
                className="mb-4"
              />
            </motion.div>

            <p
              className={`text-xs md:text-base md:font-semibold leading-tight transform ${usp.skew}`}
            >
              {usp.title}
            </p>

            {/* Glow effect on hover */}
            <div className="absolute inset-0 hover:ring-4 hover:ring-yellow-300/50 transition duration-300 rounded-lg pointer-events-none" />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default OurUSPs;
