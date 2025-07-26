'use client';

import Link from 'next/link';
import { FaInstagram, FaFacebookF, FaTwitter, FaLinkedinIn } from 'react-icons/fa';
import { MdLocationOn, MdPhone, MdEmail } from 'react-icons/md';
import { motion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.5,
      ease: 'easeOut',
    },
  }),
};

export default function Footer() {
  return (
    <footer className="relative bg-[#004ea1] text-white overflow-hidden">
      {/* Wavy SVG at the top */}
      <div className="absolute -top-16 left-0 w-full overflow-hidden leading-none rotate-180">
        <svg
          viewBox="0 0 1200 100"
          preserveAspectRatio="none"
          className="w-full h-18 sm:h-20"
        >
          <path
            d="M0,40 
              C75,90 150,-10 225,40 
              C300,90 375,-10 450,40 
              C525,90 600,-10 675,40 
              C750,90 825,-10 900,40 
              C975,90 1050,-10 1125,40 
              C1200,90 1275,-10 1350,40 
              L1200,0 
              L0,0 
              Z"
            fill="#004ea1"
          />
        </svg>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 sm:px-10 py-12"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Address */}
          <motion.div variants={fadeUp} custom={0}>
            <h3 className="text-lg font-bold flex items-center gap-2">
              <MdLocationOn size={24} />
              Address
            </h3>
            <p className="mt-2 text-sm">
              Gagol Road near Acchronda Mood, <br />
              Partapur, Meerut
            </p>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeUp} custom={1}>
            <h3 className="text-lg font-bold flex items-center gap-2">Contact Us</h3>
            <p className="mt-2 text-sm">
              <a href="tel:8077852471" className="underline flex items-center gap-2 hover:opacity-80 transition">
                <MdPhone size={20} /> 8077852471
              </a>
            </p>
            <p className="mt-1 text-sm">
              <a href="mailto:info@thestudycampus.in" className="underline flex items-center gap-2 hover:opacity-80 transition">
                <MdEmail size={20} /> info@thestudycampus.in
              </a>
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeUp} custom={2}>
            <h3 className="text-lg font-bold">Quick Links</h3>
            <ul className="mt-2 space-y-2 text-sm">
              <li><Link href="/" className="hover:underline transition">Home</Link></li>
              <li><Link href="/about" className="hover:underline transition">About Us</Link></li>
              <li><Link href="/courses" className="hover:underline transition">Courses</Link></li>
              <li><Link href="/contact" className="hover:underline transition">Contact</Link></li>
            </ul>
          </motion.div>

          {/* Social Icons */}
          <motion.div variants={fadeUp} custom={3}>
            <h3 className="text-lg font-bold">Follow Us</h3>
            <div className="flex mt-3 space-x-4">
              {[
                { href: 'https://www.instagram.com', Icon: FaInstagram, label: 'Instagram' },
                { href: 'https://www.facebook.com', Icon: FaFacebookF, label: 'Facebook' },
                { href: 'https://www.twitter.com', Icon: FaTwitter, label: 'Twitter' },
                { href: 'https://www.linkedin.com', Icon: FaLinkedinIn, label: 'LinkedIn' },
              ].map(({ href, Icon, label }, ) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                  className="hover:text-gray-300"
                >
                  <Icon size={22} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          className="mt-10 border-t border-white/30 pt-6 text-center text-xs"
          variants={fadeUp}
          custom={4}
        >
          &copy; {new Date().getFullYear()} The Study Campus. All rights reserved.
        </motion.div>
      </motion.div>
    </footer>
  );
}
