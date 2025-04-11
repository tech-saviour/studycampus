// components/AboutFounder.tsx
'use client';
import Image from 'next/image';

const AboutFounder = () => {
  return (
    <section
      className="bg-white text-gray-800 w-full py-40 px-6 md:px-20"
      aria-label="About Our Founder"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-center gap-8">
        {/* Text Content */}
        <div className="flex-1 text-center sm:text-start space-y-4">
          <h2 className="text-xl md:text-2xl font-bold">
            About Our Founder
          </h2>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            <strong>Er. Lakshay Sharma</strong> is the driving force behind The Study Center. With a passion for education and years of experience in Physics, Science, and Competitive Exams, he envisioned a learning space that nurtures curiosity, critical thinking, and academic excellence.
          </p>
          <p className="text-base text-justify md:text-lg leading-relaxed">
            With a deep commitment to student success, Lakshay Sharma has guided countless students toward their goals, whether it be excelling in board exams, cracking competitive entrance tests, or developing a strong foundation in their chosen subjects. He believes that every student has the potential to achieve greatness when provided with the right guidance and mentorship.
          </p>
        </div>

        {/* Founder Image */}
        <div className="  flex justify-center md:justify-end ">
          <div className="relative border-[20px] border-blue-900 rounded-md w-48 h-56 md:w-56 md:h-64 shadow-lg">
            <Image
              src="/founder.jpg" // replace with your image path in /public
              alt="Founder - Er. Lakshay Sharma"
              fill
              className="object-cover "
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutFounder;
