'use client'

import Image from 'next/image'

const achievers = [
  { name: 'Aryan Raj', image: '/achiever1.png', class: '12th', subject: 'Mathematics', marks: '98/100' },
  { name: 'Nikita Sharma', image: '/achiever2.png', class: '12th', subject: 'Mathematics', marks: '99/100' },
  { name: 'Nikita Sharma', image: '/achiever2.png', class: '12th', subject: 'Physics', marks: '97/100' },
  { name: 'Rohan Verma', image: '/achiever7.png', class: '12th', subject: 'Mathematics', marks: '100/100' },
  { name: 'Simran Kaur', image: '/achiever3.png', class: '12th', subject: 'Mathematics', marks: '96/100' },
  { name: 'Aditya Singh', image: '/achiever10.png', class: '12th', subject: 'Physics', marks: '99/100' },
  { name: 'Rohan Verma', image: '/achiever7.png', class: '12th', subject: 'Physics', marks: '98/100' },
  { name: 'Simran Kaur', image: '/achiever3.png', class: '12th', subject: 'Chemistry', marks: '98/100' },
  { name: 'Aditya Singh', image: '/achiever10.png', class: '12th', subject: 'Chemistry', marks: '97/100' },
  { name: 'Aryan Raj', image: '/achiever1.png', class: '12th', subject: 'Chemistry', marks: '97/100' },
  { name: 'Priya Mehta', image: '/achiever4.png', class: '10th', subject: 'Mathematics', marks: '99/100' },
  { name: 'Vikram Thakur', image: '/achiever9.png', class: '10th', subject: 'Science', marks: '96/100' },
  { name: 'Ananya Gupta', image: '/achiever6.png', class: '10th', subject: 'Mathematics', marks: '98/100' },
  { name: 'Neha Yadav', image: '/achiever5.png', class: '10th', subject: 'Mathematics', marks: '97/100' },
  { name: 'Priya Mehta', image: '/achiever4.png', class: '10th', subject: 'Science', marks: '100/100' },
  { name: 'Sahil Khan', image: '/achiever8.png', class: '10th', subject: 'Mathematics', marks: '96/100' },
  { name: 'Ananya Gupta', image: '/achiever6.png', class: '10th', subject: 'Science', marks: '100/100' },
  { name: 'Neha Yadav', image: '/achiever5.png', class: '10th', subject: 'Science', marks: '97/100' },
  { name: 'Vikram Thakur', image: '/achiever9.png', class: '10th', subject: 'Mathematics', marks: '98/100' },
]


export default function Results() {
  const classes = [...new Set(achievers.map(a => a.class))]

  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold text-center text-[#004899] mb-8">Perfect Results</h1>
      <p className="text-center text-gray-600 mb-12">Great results are generated from a great place</p>

      {classes.map(className => (
        <section key={className} className="mb-16">
          <h2 className="text-3xl font-semibold text-[#004899] mb-6 text-center">Class {className}</h2>

          {['Mathematics', 'Physics', 'Chemistry', 'Science'].map(subject => {
            const subjectAchievers = achievers.filter(
              a => a.class === className && a.subject === subject
            )

            if (subjectAchievers.length === 0) return null

            return (
              <div key={subject} className="mb-12">
                <h3 className="text-2xl font-semibold mb-4">{subject} Results (2025-26)</h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {subjectAchievers.map((achiever, index) => (
                    <article
                    key={index}
                    className="bg-gray-50 rounded-lg shadow p-4 flex flex-col items-center text-center"
                  >
                    <div className="relative w-24 h-24 mb-4">
                      <Image
                        src={achiever.image}
                        alt={`Achiever ${achiever.name}`}
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                    <h4 className="font-medium text-lg">{achiever.name}</h4>
                    <p className="text-sm text-gray-500">Class {achiever.class}</p>
                    <p className="text-sm font-semibold text-[#004899] mt-1">{achiever.marks}</p>
                  </article>
                  
                  ))}
                </div>
              </div>
            )
          })}
        </section>
      ))}
    </section>
  )
}
