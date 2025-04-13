'use client'

import ClassSchedule from '@/components/ClassSchedule'
import ImageSlider from '@/components/ImageSlider'
import Image from 'next/image'

export default function AchieversSection() {
  return (
    <section className="relative py-6 md:py-8 bg-white overflow-hidden" aria-labelledby="class-xith-heading">
      
      {/* Page Heading */}
      <header className="text-center mb-12">
        <h1 id="class-xith-heading" className="text-3xl md:text-5xl font-bold text-[#004899]">
          Class XIth
        </h1>
      </header>

      <ImageSlider />

      {/* Our Faculty Section */}
      <section aria-labelledby="faculty-heading" className="mb-20">
        <h2 id="faculty-heading" className="text-2xl md:text-3xl font-bold text-[#004899] text-center py-8 md:py-14">
          Our Faculty
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl md:mx-auto py-8 px-8">
          {[
            { name: 'Gopal Sharma', image: '/achiever10.png' },
            { name: 'Priya Pandey', image: '/achiever6.png' },
            { name: 'Dipti', image: '/achiever4.png' },
          ].map((faculty, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={faculty.image}
                  alt={`${faculty.name} photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faculty.name}</h3>
                <p className="text-gray-600 text-sm">
                  A short description or highlight about {faculty.name}, featuring their main strengths, experiences, or memorable qualities.
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="left-0 w-full h-[3px] bg-gray-400 my-5 z-0" />

      {/* Our Achievers Section */}
      <section aria-labelledby="achievers-heading" className="mb-20">
        <h2 id="achievers-heading" className="text-2xl md:text-3xl font-bold text-[#004899] text-center  py-8 md:py-14">
          Our Achievers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl md:mx-auto py-16 px-8">
          {[
            { name: 'John Doe', image: '/achiever1.png' },
            { name: 'Jane Smith', image: '/achiever2.png' },
            { name: 'Sara Lee', image: '/achiever3.png' },
          ].map((achiever, index) => (
            <article key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative w-full h-56">
                <Image
                  src={achiever.image}
                  alt={`Photo of achiever ${achiever.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{achiever.name}</h3>
                <p>{`A brief note celebrating ${achiever.name}'s accomplishments and contributions.`}</p>

              </div>
            </article>
          ))}
        </div>
      </section>

      <hr className="left-0 w-full h-[3px] bg-gray-400 my-5 z-0" />

      {/* Class Schedule Section */}
      <section aria-labelledby="schedule-heading" className="text-center pt-8">
        <h2 id="schedule-heading" className="text-2xl font-bold text-gray-800 mb-8">
          Class XIth Schedule
        </h2>
        <ClassSchedule />
      </section>
      
    </section>
  )
}
