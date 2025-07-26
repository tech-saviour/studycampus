'use client';

import Image from 'next/image';
import {
  CalendarDays,
  Clock,
  BookOpen,
  Moon,
} from 'lucide-react';

export default function ClassSchedule() {
  const schedule = [
    {
      day: 'Monday',
      slots: [
        { time: '4-5 P.M', subject: 'Science', color: 'bg-green-600' },
        { time: '5-6 P.M', subject: 'Maths', color: 'bg-purple-700' },
        { time: '6-7 P.M', subject: 'English', color: 'bg-red-600' },
      ],
    },
    {
      day: 'Tuesday',
      slots: [{ time: '4-5 P.M', subject: 'Science', color: 'bg-green-600' }],
    },
    {
      day: 'Wednesday',
      slots: [
        { time: '4-5 P.M', subject: 'Science', color: 'bg-green-600' },
        { time: '5-6 P.M', subject: 'Maths', color: 'bg-purple-700' },
        { time: '6-7 P.M', subject: 'English', color: 'bg-red-600' },
      ],
    },
    {
      day: 'Thursday',
      slots: [
        { time: '4-5 P.M', subject: 'Science', color: 'bg-green-600' },
        { time: '5-6 P.M', subject: 'Maths', color: 'bg-purple-700' },
      ],
    },
    {
      day: 'Friday',
      slots: [
        { time: '4-5 P.M', subject: 'Science', color: 'bg-green-600' },
        { time: '5-6 P.M', subject: 'Maths', color: 'bg-purple-700' },
        { time: '6-7 P.M', subject: 'English', color: 'bg-red-600' },
      ],
    },
    { day: 'Saturday', slots: [] },
  ];

  const times = ['4-5 P.M', '5-6 P.M', '6-7 P.M'];

  return (
    <section className="relative py-10 px-4 bg-white overflow-hidden">
      {/* Decorative Dots */}
      <Image
        src="/dots.png"
        alt=""
        width={80}
        height={200}
        className="hidden md:block absolute left-0 top-1/5 z-0 pointer-events-none"
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

      <div className="relative z-10 container mx-auto">
        <h2 className="text-center text-2xl md:text-3xl font-bold text-[#004899] mb-8">
          Weekly Class Schedule
        </h2>

        {/* Desktop Table with Icons */}
        <div className="hidden mx-10 md:block overflow-x-auto rounded-xl shadow-lg bg-white ring-1 ring-gray-200">
          <table className="min-w-full border-collapse text-sm md:text-base">
            <thead>
              <tr className="bg-gray-100 text-gray-700">
                <th className="w-1/5 p-4 text-left font-semibold border-b border-gray-300">
                  Day
                </th>
                {times.map((time, index) => (
                  <th
                    key={index}
                    className="p-4 text-center font-semibold border-b border-l border-gray-300"
                  >
                    <div className="flex items-center justify-center gap-1">
                      <Clock size={16} />
                      <span>{time}</span>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {schedule.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}
                >
                  <td className="p-4 font-medium border-t border-gray-300 whitespace-nowrap">
                    {row.day}
                  </td>
                  {times.map((time, colIndex) => {
                    const slot = row.slots.find((s) => s.time === time);
                    return (
                      <td
                        key={colIndex}
                        className="p-3 text-center border-t border-l border-gray-300"
                      >
                        {slot ? (
                          <div
                            className={`${slot.color} text-white rounded-full px-3 py-1 font-medium inline-flex items-center justify-center gap-2 shadow-sm transition-transform hover:scale-105`}
                          >
                            <BookOpen size={14} />
                            {slot.subject}
                          </div>
                        ) : (
                          <div className="text-gray-400 italic flex items-center justify-center gap-1 text-xs">
                            <Moon size={14} />
                            No Class
                          </div>
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards (unchanged if already implemented with icons) */}
        <div className="block md:hidden space-y-6">
          {schedule.map((row, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md border border-gray-200 p-4"
            >
              <div className="flex items-center gap-2 mb-4 text-[#004899]">
                <CalendarDays size={20} />
                <h3 className="text-base font-semibold">{row.day}</h3>
              </div>

              {row.slots.length > 0 ? (
                <ul className="divide-y divide-gray-200">
                  {row.slots.map((slot, i) => (
                    <li
                      key={i}
                      className="flex justify-between items-center py-3"
                    >
                      <div className="flex items-center gap-2 text-sm text-gray-700">
                        <Clock size={16} />
                        <span className="font-medium">{slot.time}</span>
                      </div>
                      <div
                        className={`flex items-center gap-2 text-white ${slot.color} px-3 py-1 rounded-full text-xs shadow`}
                      >
                        <BookOpen size={14} />
                        <span>{slot.subject}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              ) : (
                <div className="flex items-center gap-2 text-sm text-gray-400 italic mt-2">
                  <Moon size={16} />
                  <span>No classes today</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
