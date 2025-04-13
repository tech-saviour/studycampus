"use client";

import Image from "next/image";

export default function ClassMaterialTable() {
  const classes = ["Class 9", "Class 10", "Class 11", "Class 12"];
  const subjects = ["Maths", "Physics", "Chemistry"];

  return (
    <section className="relative py-10 px-4 bg-white overflow-hidden">
      {/* Decorative Dots */}
      <Image
        src="/dots.png"
        alt="dots pattern left"
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-1/5 z-0 pointer-events-none"
      />
      <Image
        src="/dots.png"
        alt="dots pattern right"
        width={80}
        height={200}
        className="hidden md:block absolute rotate-180 right-0 top-2/3 z-0 pointer-events-none"
      />

      {/* Content container */}
      <div className="relative z-10 container md:p-10 mx-auto">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">Class Material</h2>
        <div className="overflow-x-auto rounded-lg shadow-md">
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="w-1/5 p-4 text-left bg-gray-200 font-semibold border-b border-gray-300">Class</th>
                {subjects.map((subject, index) => (
                  <th
                    key={index}
                    className="p-4 text-center bg-gray-200 font-semibold border-b border-l border-gray-300"
                  >
                    {subject}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {classes.map((className, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
                >
                  <td className="p-2 md:p-4 md:font-medium border-t text-xs md:text-sm border-gray-300">
                    {className}
                  </td>
                  {subjects.map((_, colIndex) => (
                    <td
                      key={colIndex}
                      className="p-2 text-center border-t border-l border-gray-300"
                    >
                      <Image
                        src="/icon.png"
                        alt="drive icon"
                        width={30}
                        height={30}
                        className="mx-auto"
                      />
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
