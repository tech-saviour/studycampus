'use client';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="relative w-full bg-white px-6 md:px-20 py-8 overflow-hidden scroll-mt-60 " id="about">
        
      <div className="absolute top-11/12 left-0 w-full h-[80px] bg-[#004899] -translate-y-1/2 z-0 " />

      <div className="max-w-6xl z-20 mx-auto flex flex-col md:flex-row items-center gap-10">
        {/* Left Text Content */}
        <div className="md:w-1/2">
          <h2 className="text-center md:text-left text-3xl md:text-4xl font-bold -mt-10 mb-4 drop-shadow-md">
            About Us
          </h2>
          <p className="text-sm text-justify p-2 md:p-0 md:text-base md:text-justify text-gray-700 leading-relaxed ">
            Welcome to The Study Center – Aim Towards Excellence, a place where
            learning meets excellence. Founded by [Owner&apos;s Name], our institute
            is dedicated to shaping young minds and empowering students with the
            knowledge and skills they need to succeed.
          </p>
        </div>
        

        {/* Right Image Grid */}
        <div className="bg-gray-200 z-20 md:ml-14">
          <div className="grid grid-cols-2 grid-rows-2 m-6 md:m-10  ">
            {/* Image 1 */}
            <div className="bg-white flex items-center justify-center p-4">
              <div className="relative w-16 md:w-36 aspect-square">
                <Image
                  src="/icons/board.png"
                  alt="Boards"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
            

            {/* Image 2 */}
            <div className="bg-[#044b9c] flex items-center justify-center p-4">
              <div className="relative w-16 md:w-36 aspect-square">
                <Image
                  src="/icons/foundation.png"
                  alt="Foundation"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image 3 */}
            <div className="bg-[#044b9c] flex items-center justify-center p-4">
              <div className="relative w-16 md:w-36 aspect-square">
                <Image
                  src="/icons/neet.png"
                  alt="NEET"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div className="bg-white flex items-center justify-center p-4">
              <div className="relative w-16 md:w-36 aspect-square">
                <Image
                  src="/icons/jee.png"
                  alt="JEE"
                  fill
                  className="object-contain"
                />
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;

