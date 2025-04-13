'use client';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section
      className="w-full bg-white text-gray-800"
      aria-label="Hero section for The Study Campus"
    >
      {/* Content Section */}
      <div className="max-w-7xl mx-auto pt-20 pb-10 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h2 className="text-xl md:text-2xl font-bold uppercase tracking-widest">
            Aim High Towards Excellence
          </h2>
          <h3 className="text-xl md:text-2xl ">
            with
          </h3>
          <h1 className="text-4xl md:text-5xl font-bold ">
          <span className="text-[#004899]">The Study Campus</span>
          </h1>
          <p className="text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Meerut&apos;s reputed and most trusted institute for nurturing the ordinary into extraordinary.
          </p>
        </div>

        {/* Subject Image Cards */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="flex flex-row gap-3 w-full max-w-xs sm:max-w-md md:max-w-lg  overflow-hidden ">
            <Image
              src="/subject.png"
              alt="Subjects"
              width={600}
              height={200}
              className="object-cover w-full h-auto"
            />
          </div>
        </div>
      </div>

      {/* Blue Bar at the Bottom */}
      <div className="w-full h-16 sm:h-40 bg-[#004899]" />
    </section>
  );
};

export default HeroSection;



