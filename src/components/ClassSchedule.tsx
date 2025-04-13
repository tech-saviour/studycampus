"use client";

import Image from "next/image";

export default function ClassSchedule() {
  const schedule = [
    { day: "Monday", slots: [
        { time: "4-5 P.M", subject: "Science", color: "bg-green-600" },
        { time: "5-6 P.M", subject: "Maths", color: "bg-purple-700" },
        { time: "6-7 P.M", subject: "English", color: "bg-red-600" },
    ] },
    { day: "Tuesday", slots: [{ time: "4-5 P.M", subject: "Science", color: "bg-green-600" }] },
    {
      day: "Wednesday",
      slots: [
        { time: "4-5 P.M", subject: "Science", color: "bg-green-600" },
        { time: "5-6 P.M", subject: "Maths", color: "bg-purple-700" },
        { time: "6-7 P.M", subject: "English", color: "bg-red-600" },
      ],
    },
    {
      day: "Thursday",
      slots: [
        { time: "4-5 P.M", subject: "Science", color: "bg-green-600" },
        { time: "5-6 P.M", subject: "Maths", color: "bg-purple-700" },
      ],
    },
    { day: "Friday", slots: [
        { time: "4-5 P.M", subject: "Science", color: "bg-green-600" },
        { time: "5-6 P.M", subject: "Maths", color: "bg-purple-700" },
        { time: "6-7 P.M", subject: "English", color: "bg-red-600" },
    ] },
    { day: "Saturday", slots: [] },
  ];

  const times = ["4-5 P.M", "5-6 P.M", "6-7 P.M"];

  return (
    <section className="relative py-4 px-4 bg-white overflow-hidden">
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
    <div className="overflow-x-auto rounded-lg shadow-md">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th className="w-1/5 p-4 text-left bg-gray-200 font-semibold border-b border-gray-300">Day</th>
            {times.map((time, index) => (
              <th
                key={index}
                className="p-4 text-center bg-gray-200 font-semibold border-b border-l border-gray-300"
              >
                {time}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {schedule.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-100"}
            >
              <td className="p-2 md:p-4 md:font-medium border-t text-xs md:text-sm border-gray-300">
                {row.day}
              </td>
              {times.map((time, colIndex) => {
                const slot = row.slots.find((s) => s.time === time);
                return (
                  <td
                    key={colIndex}
                    className="p-2 text-center border-t border-l border-gray-300"
                  >
                    {slot ? (
                      <div
                        className={`${slot.color} text-white rounded-full py-1 px-2 md:px-4 shadow text-xs md:text-sm`}
                      >
                        {slot.subject}
                      </div>
                    ) : (
                      <div className="h-6"></div>
                    )}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={4} className="border-t border-gray-300"></td>
          </tr>
        </tfoot>
      </table>
    </div>
  </div>
</section>

  );
}
