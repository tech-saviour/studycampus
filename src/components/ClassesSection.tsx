"use client";

import Image from "next/image";
import Link from "next/link";

const classes = [
  {
    title: "Class IXth",
    image: "/class-ix.jpg",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    link: "/classes/ix",
  },
  {
    title: "Class Xth",
    image: "/class-x.jpg",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    link: "/classes/x",
  },
  {
    title: "Class XIth",
    image: "/class-xi.jpg",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    link: "/classes/xi",
  },
  {
    title: "Class XIIth",
    image: "/class-xii.jpg",
    description:
      "Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes, or even a very very short story.",
    link: "/classes/xii",
  },
];

export default function ClassesSection() {
  return (
    <section className="py-20 px-4 bg-white relative">
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
      <div className=" z-10 container mx-auto">
        <h2 className=" text-3xl md:text-4xl text-center font-bold mb-12 text-[#004899]">Classes</h2>

        <div className=" z-10 m-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {classes.map((cls, index) => (
            <Link
              href={cls.link}
              key={index}
              className=" z-10 block bg-white rounded-lg shadow-lg overflow-hidden transition transform hover:-translate-y-2"
            >
              <Image
                src={cls.image}
                alt={cls.title}
                width={400}
                height={300}
                className="w-full h-48 object-cover"
              />
              <div className="p-5">
                <h3 className="text-xl font-semibold mb-3">{cls.title}</h3>
                <p className="text-gray-600 text-sm">{cls.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      
    </section>
  );
}

