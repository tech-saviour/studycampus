'use client'
import Image from 'next/image'

const OurUSPs = () => {
  return (
    <section className="bg-white py-20 px-6 md:px-20 overflow-hidden">
      {/* Heading */}
      <h2 className="text-2xl text-center   md:text-5xl font-bold mb-4 drop-shadow-md">Our USPs</h2>
      <p className="text-sm text-center md:text-lg text-gray-700 mb-10">
        We have many unique value points out of which major are these
      </p>

      {/* USP Boxes */}
      <div className="grid grid-cols-4 gap-y-12 p-2 md:p-10 md:flex md:flex-nowrap">
        {/* Box 1 */}
        <div className="bg-[#004899] text-white text-center md:-my-4 px-6 py-14 flex flex-col items-center justify-center relative flex-1"
          style={{ clipPath: 'polygon(0 0%, 100% 10%, 100% 80%, 0% 100%)' }}>
          <Image src="/icons/teacher.png" alt="Teacher" width={50} height={50} className="mb-4" />
          <p className="text-xs transform -skew-y-3 md:text-base md:font-semibold leading-tight">
            Highly experienced teacher
          </p>
        </div>

        {/* Box 2 */}
        <div className="bg-[#2C77C7] text-white text-center md:-my-4 px-6 py-14 flex flex-col items-center justify-center relative flex-1"
          style={{ clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 80%)' }}>
          <Image src="/icons/cctv.png" alt="CCTV Surveillance" width={50} height={50} className="mb-4 transform skew-y-3" />
          <p className="text-xs transform skew-y-3 md:text-base md:font-semibold">CCTV surveillance</p>
        </div>

        {/* Box 3 */}
        <div className="bg-[#004899] text-white text-center md:-my-4 px-6 py-14 flex flex-col items-center justify-center relative flex-1"
          style={{ clipPath: 'polygon(0 0%, 100% 10%, 100% 80%, 0% 100%)' }}>
          <Image src="/icons/results.png" alt="Proven Results" width={50} height={50} className="mb-4 transform -skew-y-3" />
          <p className="text-xs transform -skew-y-3 md:text-base md:font-semibold">Proven results</p>
        </div>

        {/* Box 4 */}
        <div className="bg-[#2C77C7] text-white text-center md:-my-4 px-6 py-14 flex flex-col items-center justify-center relative flex-1"
          style={{ clipPath: 'polygon(0% 10%, 100% 0%, 100% 100%, 0% 80%)' }}>
          <Image src="/icons/career.png" alt="Career Guidance" width={50} height={50} className="mb-4 transform skew-y-3" />
          <p className="text-xs transform skew-y-3 md:text-base md:font-semibold">Career Guidance</p>
        </div>
      </div>
    </section>
  )
}

export default OurUSPs;

