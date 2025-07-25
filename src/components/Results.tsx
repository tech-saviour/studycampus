'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

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
  const classes = [...new Set(achievers.map((a) => a.class))];

  return (
    <section className="py-16 px-4 bg-white max-w-7xl mx-auto">
      <motion.h1
        className="text-3xl sm:text-4xl font-bold text-center text-[#004899] mb-4"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Perfect Results
      </motion.h1>
      <motion.p
        className="text-center text-gray-600 mb-12 text-sm sm:text-base"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        Great results are generated from a great place
      </motion.p>

      {classes.map((className) => (
        <section key={className} className="mb-16">
          <motion.h2
            className="text-2xl sm:text-3xl font-semibold text-[#004899] mb-6 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Class {className}
          </motion.h2>

          {['Mathematics', 'Physics', 'Chemistry', 'Science'].map((subject) => {
            const subjectAchievers = achievers.filter(
              (a) => a.class === className && a.subject === subject
            );

            if (subjectAchievers.length === 0) return null;

            return (
              <motion.div
                key={subject}
                className="mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-800">
                  {subject} Results (2025–26)
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {subjectAchievers.map((achiever, index) => (
                    <motion.article
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="bg-gray-50 rounded-xl shadow-md p-4 flex flex-col items-center text-center group hover:shadow-lg"
                    >
                      <motion.div
                        className="relative w-20 h-20 sm:w-24 sm:h-24 mb-3"
                        initial={{ scale: 0, rotate: 10 }}
                        whileInView={{ scale: 1, rotate: 0 }}
                        transition={{ type: 'spring', delay: 0.1 * index }}
                      >
                        <Image
                          src={achiever.image}
                          alt={`Achiever ${achiever.name}`}
                          fill
                          className="object-cover rounded-full border-2 border-[#004899] group-hover:shadow-md"
                        />
                      </motion.div>
                      <h4 className="font-medium text-sm sm:text-base">{achiever.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500">
                        Class {achiever.class}
                      </p>
                      <p className="text-sm font-semibold text-[#004899] mt-1">
                        {achiever.marks}
                      </p>
                    </motion.article>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </section>
      ))}
    </section>
  );
}
