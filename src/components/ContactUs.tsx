// components/ContactUs.tsx
'use client'

import { Mail, MapPin, PhoneCall, Globe } from 'lucide-react'
import Image from 'next/image'

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative bg-[#cec6bb] w-full h-auto flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Image */}
      <div className="relative w-full md:w-1/2 h-64 md:h-[550px]">
        <Image
          src="/phone.png"
          alt="Contact illustration"
          fill
          priority
          className="object-cover"
        />
      </div>

      {/* Right Info Panel */}
      <div className="w-full md:w-1/2 bg-black/60 text-white p-6 md:p-10 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold border-b pb-2 border-yellow-400 w-max">
          Contact Us
        </h2>

        <ul className="space-y-5">
          <li className="flex items-start gap-4">
            <PhoneCall className="text-yellow-400 w-6 h-6 shrink-0 hover:scale-110 transition" />
            <span className="text-lg font-medium">+91 98241 57612</span>
          </li>

          <li className="flex items-start gap-4">
            <Mail className="text-yellow-400 w-6 h-6 shrink-0 hover:scale-110 transition" />
            <span className="text-lg font-medium">abc@gmail.com</span>
          </li>

          <li className="flex items-start gap-4">
            <Globe className="text-yellow-400 w-6 h-6 shrink-0 hover:scale-110 transition" />
            <a
              href="https://thestudycampus.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-medium underline hover:text-yellow-300 transition"
            >
              thestudycampus.in
            </a>
          </li>

          <li className="flex items-start gap-4">
            <MapPin className="text-yellow-400 w-6 h-6 shrink-0 hover:scale-110 transition" />
            <span className="text-lg font-medium max-w-xs">
              Gagol Road, near Acchronda Mood,<br />
              Partapur, Meerut
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
