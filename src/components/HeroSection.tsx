// components/HeroSection.tsx
'use client';
import Image from 'next/image';

const HeroSection = () => {
  const subjects = [
    { src: '/subjects/maths.png', alt: 'Maths', },
    { src: '/subjects/chemistry.png', alt: 'Chemistry',  },
    { src: '/subjects/physics.png', alt: 'Physics',  },
  ];

  return (
    <section
      className="w-full bg-white text-gray-800"
      aria-label="Hero section for The Study Campus"
    >
      {/* Content Section */}
      <div className="max-w-7xl mx-auto py-10 px-6 md:px-20 flex flex-col lg:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-1 space-y-4 text-center lg:text-left">
          <h2 className="text-lg md:text-xl font-semibold uppercase tracking-widest">
            Aim High Towards Excellence
          </h2>
          <h1 className="text-3xl md:text-4xl font-extrabold text-blue-800">
            with <span className="text-blue-900">The Study Campus</span>
          </h1>
          <p className="text-base md:text-lg max-w-md mx-auto lg:mx-0">
            Meerut&apos;s reputed and most trusted institute for nurturing the ordinary into extraordinary.
          </p>
        </div>

        {/* Subject Image Cards */}
        <div className="flex-1 flex justify-center items-center w-full">
          <div className="flex flex-row sm:flex-row gap-3 w-full max-w-xs sm:max-w-md md:max-w-lg">
            {subjects.map((subject, index) => (
              <div
                key={index}
                className="relative flex-1 h-36 sm:h-44 md:h-52  overflow-hidden shadow-lg"
              >
                <Image
                  src={subject.src}
                  alt={subject.alt}
                  fill
                  sizes=""
                  className=""
                  priority={index === 0}
                />
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <span className="text-white text-xs sm:text-sm md:text-base font-bold tracking-wider">
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Blue Bar at the Bottom */}
      <div className="w-full h-16 sm:h-24 bg-[#004899]" />
    </section>
  );
};

export default HeroSection;


