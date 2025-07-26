"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const classes = [
  {
    title: "Class IX",
    image: "/class-ix.jpg",
    description:
      "Explore foundational concepts, gain conceptual clarity, and start your academic journey with confidence in Class IX.",
    link: "/classes/ix",
  },
  {
    title: "Class X",
    image: "/class-x.jpg",
    description:
      "Prepare for board exams with structured curriculum, strategies, and key takeaways tailored for Class X students.",
    link: "/classes/x",
  },
  {
    title: "Class XI",
    image: "/class-xi.jpg",
    description:
      "Delve deeper into core subjects and sharpen your analytical skills in Class XI—your first step toward specialization.",
    link: "/classes/xi",
  },
  {
    title: "Class XII",
    image: "/class-xii.jpg",
    description:
      "Get exam-ready with intensive revision, smart strategies, and expert insights designed specifically for Class XII.",
    link: "/classes/xii",
  },
];

export default function ClassesSection() {
  return (
    <section
      className="relative bg-white py-20 px-4"
      aria-labelledby="classes-heading"
    >
      {/* Decorative Dots */}
      <Image
        src="/dots.png"
        alt=""
        width={80}
        height={200}
        className="absolute left-0 top-1/3 z-0 pointer-events-none"
        aria-hidden="true"
      />
      <Image
        src="/dots.png"
        alt=""
        width={80}
        height={200}
        className="absolute right-0 top-2/3 z-0 pointer-events-none"
        aria-hidden="true"
      />

      <div className="container mx-auto relative z-10">
        <h2
          id="classes-heading"
          className="text-4xl font-bold text-center text-[#004899] mb-12"
        >
          Classes
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <motion.div
              key={cls.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Link
                href={cls.link}
                aria-label={`Explore ${cls.title}`}
                className="block group"
              >
                <motion.div
                  className="rounded-2xl shadow-lg bg-white overflow-hidden transition-transform"
                  whileHover={{ boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.1)" }}
                >
                  <div className="overflow-hidden">
                    <motion.div
                      className="w-full h-48"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Image
                        src={cls.image}
                        alt={`Cover image for ${cls.title}`}
                        width={400}
                        height={300}
                        className="w-full h-full object-cover transition duration-300 ease-in-out"
                        loading={index < 2 ? "eager" : "lazy"}
                        priority={index < 2}
                      />
                    </motion.div>
                  </div>

                  <div className="p-5">
                    <motion.h3
                      className="text-xl font-semibold mb-2 transition-colors"
                      whileHover={{ color: "#004899" }}
                    >
                      {cls.title}
                    </motion.h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {cls.description}
                    </p>
                  </div>
                </motion.div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
