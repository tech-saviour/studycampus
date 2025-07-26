'use client'

import Image from 'next/image'
import { Star } from 'lucide-react'

export default function AchieversSection() {
  const achievers = [
    {
      name: 'John Doe',
      image: '/achiever1.png',
      description:
        'An inspiring student who achieved top rank in the board exams with exceptional dedication and discipline.',
    },
    {
      name: 'Jane Smith',
      image: '/achiever2.png',
      description:
        'A brilliant mind who led multiple Olympiads and inspired peers with her innovative thinking.',
    },
    {
      name: 'Sara Lee',
      image: '/achiever3.png',
      description:
        'An academic star with a passion for science and mathematics, securing national-level accolades.',
    },
  ]

  return (
    <section
      className="relative py-20 px-4 md:px-8 bg-white overflow-hidden"
      aria-labelledby="achievers-heading"
    >
      {/* Decorative Dots */}
      <Image
        src="/dots.png"
        alt=""
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-1/3 z-0 pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/dots.png"
        alt=""
        width={80}
        height={200}
        className="hidden md:block absolute rotate-180 right-0 top-2/3 z-0 pointer-events-none"
        aria-hidden="true"
      />

      {/* Section Heading */}
      <header className="relative z-10 text-center mb-16">
        <h2
          id="achievers-heading"
          className="text-3xl md:text-5xl font-bold text-[#004899] mb-2"
        >
          Our Achievers
        </h2>
        <p className="text-gray-600 text-sm md:text-base max-w-xl mx-auto">
          Celebrating our students’ outstanding dedication and academic excellence.
        </p>
      </header>

      {/* Cards */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {achievers.map((achiever, index) => (
          <article
            key={index}
            className="group bg-white rounded-xl shadow-md overflow-hidden border border-gray-100 hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-56 sm:h-64 md:h-60 lg:h-64">
              <Image
                src={achiever.image}
                alt={`Photo of achiever ${achiever.name}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-6 flex flex-col gap-3">
              <h3 className="text-lg font-semibold text-[#004899] flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-500" />
                {achiever.name}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">{achiever.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}
