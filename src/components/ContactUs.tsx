// components/ContactUs.tsx
import { Mail, MapPin, PhoneCall, Globe } from "lucide-react";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section
      id="contact"
      className="relative bg-[#cec6bb] w-full h-auto md:h-[550px] flex flex-col md:flex-row overflow-hidden"
    >
      {/* Left Image Background */}
      <div className="relative w-full md:w-1/2 h-64 md:h-full">
        <Image
          src="/phone.png"
          alt="Contact Phone"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Right Content */}
      <div className="w-full md:w-1/2 bg-black/50 text-white p-8 flex flex-col justify-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">Contact Us</h2>

        <div className="flex items-center gap-4">
          <PhoneCall className="text-yellow-400 w-6 h-6" />
          <span className="text-lg font-medium">9824157612</span>
        </div>

        <div className="flex items-center gap-4">
          <Mail className="text-yellow-400 w-6 h-6" />
          <span className="text-lg font-medium">abc@gamil.com</span>
        </div>

        <div className="flex items-center gap-4">
          <Globe className="text-yellow-400 w-6 h-6" />
          <span className="text-lg font-medium">thestudycampus.in</span>
        </div>

        <div className="flex items-center gap-4">
          <MapPin className="text-yellow-400 w-6 h-6" />
          <span className="text-lg font-medium">
            Gagol road near Acchronda mood, Partapur, Meerut
          </span>
        </div>
      </div>
    </section>
  );
}
