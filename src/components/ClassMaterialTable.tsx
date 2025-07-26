"use client";

import Image from "next/image";
import {
  Calculator,
  Atom,
  FlaskConical,
} from "lucide-react";

export default function ClassMaterialTable() {
  const classes = ["Class 9", "Class 10", "Class 11", "Class 12"];

  const subjects = [
    { name: "Maths", icon: Calculator, color: "text-purple-600" },
    { name: "Physics", icon: Atom, color: "text-blue-600" },
    { name: "Chemistry", icon: FlaskConical, color: "text-green-600" },
  ];

  return (
    <section className="relative py-12 px-4 bg-white overflow-hidden">
      {/* Decorative Dots */}
      <Image
        src="/dots.png"
        alt="decorative dots left"
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-1/5 z-0 pointer-events-none"
      />
      <Image
        src="/dots.png"
        alt="decorative dots right"
        width={80}
        height={200}
        className="hidden md:block absolute rotate-180 right-0 top-2/3 z-0 pointer-events-none"
      />

      <div className="relative z-10 container mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-[#004899] mb-10">
          Class Material
        </h2>

        <div className="overflow-x-auto rounded-xl shadow-lg ring-1 ring-gray-200">
          <table className="min-w-full table-fixed border-collapse text-sm md:text-base">
            <colgroup>
              <col className="w-1/4" />
              {subjects.map((_, i) => (
                <col key={i} className="w-1/4" />
              ))}
            </colgroup>
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="p-4 text-left font-semibold border-b border-gray-300">
                  Class
                </th>
                {subjects.map(({ name }, index) => (
                  <th
                    key={index}
                    className="p-4 text-center font-semibold border-b border-l border-gray-300 truncate"
                  >
                    {name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {classes.map((className, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={
                    rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50 hover:bg-gray-100 transition"
                  }
                >
                  <td className="p-4 font-medium border-t border-gray-300 text-[#004899]">
                    {className}
                  </td>
                  {subjects.map(({ name, icon: Icon, color }, colIndex) => (
                    <td
                      key={colIndex}
                      className="p-4 text-center border-t border-l border-gray-300"
                    >
                      <a
                        href="#"
                        className={`flex flex-col items-center justify-center gap-1 hover:underline transition`}
                        aria-label={`Open ${name} material for ${className}`}
                      >
                        <Icon
                          size={22}
                          className={`${color} transition-transform hover:scale-110`}
                        />
                        <span className="text-xs text-gray-600">View</span>
                      </a>
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            <tfoot>
              <tr>
                <td colSpan={subjects.length + 1} className="border-t border-gray-300"></td>
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
}
