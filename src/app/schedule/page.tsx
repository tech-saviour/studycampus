import ClassSchedule from '@/components/ClassSchedule'
import React from 'react'

const page = () => {
    return (
        <div className="py-8">
            <header className="text-center mb-10">
                <h1 className="text-3xl font-bold text-[#004899]">Class Schedule</h1>
                <p className="text-gray-600 mt-2">Find the class-wise subject timetable below</p>
            </header>

            <section aria-labelledby="class-9th-schedule" className="mb-12">
                <h2 id="class-9th-schedule" className="text-2xl text-center font-semibold mb-4 text-gray-800">9th Grade Schedule</h2>
                <ClassSchedule />
            </section>

            <section aria-labelledby="class-10th-schedule" className="mb-12">
                <h2 id="class-10th-schedule" className="text-2xl text-center font-semibold mb-4 text-gray-800">10th Grade Schedule</h2>
                <ClassSchedule />
            </section>

            <section aria-labelledby="class-11th-schedule" className="mb-12">
                <h2 id="class-11th-schedule" className="text-2xl text-center font-semibold mb-4 text-gray-800">11th Grade Schedule</h2>
                <ClassSchedule />
            </section>

            <section aria-labelledby="class-12th-schedule" className="mb-12">
                <h2 id="class-12th-schedule" className="text-2xl text-center font-semibold mb-4 text-gray-800">12th Grade Schedule</h2>
                <ClassSchedule />
            </section>
        </div>

    )
}

export default page
