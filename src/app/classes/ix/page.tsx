"use client";

import ClassSchedule from "@/components/ClassSchedule";
import ImageSlider from "@/components/ImageSlider";
import Image from "next/image";
import { motion } from "framer-motion";

const facultyList = [
  { name: "Gopal Sharma", image: "/achiever10.png" },
  { name: "Priya Pandey", image: "/achiever6.png" },
  { name: "Dipti", image: "/achiever4.png" },
];

const achieverList = [
  { name: "John Doe", image: "/achiever1.png" },
  { name: "Jane Smith", image: "/achiever2.png" },
  { name: "Sara Lee", image: "/achiever3.png" },
];

export default function AchieversSection() {
  return (
    <section
      className="relative py-6 md:py-8 bg-white overflow-hidden"
      aria-labelledby="class-ixth-heading"
    >
      {/* Page Heading */}
      <header className="text-center mb-12">
        <h1
          id="class-ixth-heading"
          className="text-3xl md:text-5xl font-bold text-[#004899]"
        >
          Class IXth
        </h1>
      </header>

      <ImageSlider />

      {/* Faculty Section */}
      <section aria-labelledby="faculty-heading" className="mb-20">
        <h2
          id="faculty-heading"
          className="text-2xl md:text-3xl font-bold text-[#004899] text-center py-8 md:py-14"
        >
          Our Faculty
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl md:mx-auto py-16 px-8">
          {facultyList.map((faculty, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={faculty.image}
                  alt={`${faculty.name} - Faculty Photo`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{faculty.name}</h3>
                <p className="text-gray-600 text-sm">
                  {faculty.name} is known for their deep subject knowledge,
                  teaching expertise, and dedication to student success.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <hr className="w-full h-[3px] bg-gray-200 my-5" />

      {/* Achievers Section */}
      <section aria-labelledby="achievers-heading" className="mb-20">
        <h2
          id="achievers-heading"
          className="text-2xl md:text-3xl font-bold text-[#004899] text-center py-8 md:py-14"
        >
          Our Achievers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl md:mx-auto py-16 px-8">
          {achieverList.map((achiever, index) => (
            <motion.article
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={achiever.image}
                  alt={`Photo of achiever ${achiever.name}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-2">{achiever.name}</h3>
                <p className="text-gray-600 text-sm">
                  {achiever.name} has made remarkable achievements and
                  represents the excellence we strive for in our institution.
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <hr className="w-full h-[3px] bg-gray-200 my-5" />

      {/* Class Schedule Section */}
      <section
        aria-labelledby="schedule-heading"
        className="text-center pt-8"
      >
        <h2
          id="schedule-heading"
          className="text-2xl font-bold text-gray-800 mb-8"
        >
          Class IXth Schedule
        </h2>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <ClassSchedule />
        </motion.div>
      </section>
    </section>
  );
}
