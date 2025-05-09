'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const AboutFounder = () => {
  return (
    <section
      className="relative bg-white text-gray-800 w-full py-16 md:py-32 px-6 md:px-20"
      aria-label="About Our Founder"
    >
      {/* Left Dots */}
      <Image
        src="/dots.png"
        alt="dots pattern left"
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-1/5 z-10"
      />
    
      {/* Right Dots */}
      <Image
        src="/dots.png"
        alt="dots pattern right"
        width={80}
        height={200}
        className="hidden md:block absolute rotate-180 right-0 top-2/3 z-10"
      />
    
      <div className="relative z-20 max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Text Content */}
        <motion.div
          className="flex-1 text-center sm:text-start space-y-4"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the section is in view
          transition={{ duration: 1 }}
        >
          <h2 className="text-xl md:text-2xl font-bold">
            About Our Founder
          </h2>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            <strong>Er. Lakshay Sharma</strong> is the driving force behind The Study Center. With a passion for education and years of experience in Physics, Science, and Competitive Exams, he envisioned a learning space that nurtures curiosity, critical thinking, and academic excellence.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            With a deep commitment to student success, Lakshay Sharma has guided countless students toward their goals, whether it be excelling in board exams, cracking competitive entrance tests, or developing a strong foundation in their chosen subjects. He believes that every student has the potential to achieve greatness when provided with the right guidance and mentorship.
          </p>
        </motion.div>
    
        {/* Founder Image */}
        <motion.div
          className="flex justify-center md:justify-end"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ amount: 0.5 }} // Trigger animation when 50% of the section is in view
          transition={{ duration: 1 }}
        >
          <div className="relative border-[20px] border-blue-900 rounded-md w-48 h-56 md:w-56 md:h-64 shadow-lg">
            <Image
              src="/founder.jpg"
              alt="Founder - Er. Lakshay Sharma"
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
