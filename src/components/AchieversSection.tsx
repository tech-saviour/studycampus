'use client'

import Image from 'next/image'

export default function AchieversSection() {
  return (
    <section className="relative py-16 px-6 bg-white overflow-hidden">
      {/* Left Dots */}
      <Image
        src="/dots.png"
        alt="dots pattern left"
        width={80}
        height={200}
        className="z-0 block absolute left-0 top-1/3"
      />

      {/* Right Dots */}
      <Image
        src="/dots.png"
        alt="dots pattern right"
        width={80}
        height={200}
        className="z-0 block absolute right-0 top-2/3"
      />

      <h2 className="text-3xl font-bold text-[#004899] text-center mb-12 font-[600]">
        Our Achievers
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
        {/* Card 1 */}
        <article className="bg-white m-4 md:m-0 z-20 rounded-lg shadow-md overflow-hidden">
          <div className="z-10 relative w-full h-56">
            <Image
              src="/achiever1.png"
              alt="Achiever 1"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">John Doe</h3>
            <p className="text-gray-600 text-sm">
              Body text for whatever you would like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </article>

        {/* Card 2 */}
        <article className="bg-white z-20 m-4 md:m-0 rounded-lg shadow-md overflow-hidden">
          <div className=" relative w-full h-56">
            <Image
              src="/achiever2.png"
              alt="Achiever 2"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Jane Smith</h3>
            <p className="text-gray-600 text-sm">
              Body text for whatever you would like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </article>

        {/* Card 3 */}
        <article className="bg-white z-20 m-4 md:m-0 rounded-lg shadow-md overflow-hidden">
          <div className="relative w-full h-56">
            <Image
              src="/achiever3.png"
              alt="Achiever 3"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-lg font-semibold mb-2">Sara Lee</h3>
            <p className="text-gray-600 text-sm">
              Body text for whatever you would like to say. Add main takeaway points, quotes, anecdotes, or even a very short story.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}

