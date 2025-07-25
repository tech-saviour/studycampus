'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutFounder = () => {
  return (
    <section
      className="relative bg-white text-gray-800 w-full py-16 md:py-32 px-6 md:px-20 overflow-hidden"
      aria-labelledby="founder-heading"
    >
      {/* Decorative Dots - Left */}
      <Image
        src="/dots.png"
        alt="Decorative dots"
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-24 z-0 opacity-40"
      />
      {/* Decorative Dots - Right */}
      <Image
        src="/dots.png"
        alt="Decorative dots"
        width={80}
        height={200}
        className="hidden md:block absolute right-0 bottom-12 rotate-180 z-0 opacity-40"
      />

      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center md:text-left space-y-5"
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }}
          transition={{ duration: 0.8 }}
        >
          <h2
            id="founder-heading"
            className="text-2xl md:text-3xl font-bold text-[#004899]"
          >
            About Our Founder
          </h2>

          <p className="text-base md:text-lg leading-relaxed text-justify">
            <strong>Er. Lakshay Sharma</strong> is the visionary behind <em>The Study Campus</em>. With a deep-rooted passion for Physics and Competitive Education, he&apos;s on a mission to turn students&apos; potential into excellence.
          </p>
          <p className="text-base md:text-lg leading-relaxed text-justify">
            Through dedicated mentoring and a personalized approach, he has helped hundreds of students succeed in Board Exams, Olympiads, and competitive entrances. He believes that:
          </p>

          <motion.blockquote
            className="bg-[#f7faff] border-l-4 border-blue-600 pl-4 pr-2 py-3 italic rounded shadow-sm text-sm md:text-base text-[#004899]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            &quot;Every child can achieve greatness with the right guidance, care, and confidence.&quot;
          </motion.blockquote>
        </motion.div>

        {/* Founder Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.85 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.4 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-48 h-56 md:w-64 md:h-72 border-[10px] border-blue-900 rounded-lg shadow-xl overflow-hidden">
            <Image
              src="/founder.jpg"
              alt="Er. Lakshay Sharma - Founder"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutFounder;
