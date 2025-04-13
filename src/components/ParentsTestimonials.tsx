'use client';

import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { useEffect } from 'react';

const testimonials = [
  {
    name: 'Mr. Ramgopal Sharma',
    country: 'Meerut',
    review: `"This is the best institute I’ve ever seen in my life. I love this place — truly amazing!"`,
    img: '/parent.jpg',
  },
  {
    name: 'Mrs. Sunita Devi',
    country: 'Meerut',
    review: `"Wonderful experience for my child! The teachers are supportive and the environment is excellent."`,
    img: '/parent1.jpg',
  },
  {
    name: 'Mr. Rajeev Tyagi',
    country: 'Meerut',
    review: `"A great institute with excellent results every year. Highly recommended for serious students."`,
    img: '/parent2.jpg',
  },
  {
    name: 'Mrs. Poonam Singh',
    country: 'Meerut',
    review: `"My son has improved a lot after joining here. Best decision we made for his future."`,
    img: '/parent3.jpg',
  },
  {
    name: 'Mr. Anil Kumar',
    country: 'Meerut',
    review: `"Top-notch faculty and a very positive atmosphere for students. I'm very happy with the results."`,
    img: '/parent4.jpg',
  },
];


const ParentsTestimonials = () => {
  const [sliderRef, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: {
      perView: 1,
      spacing: 15,
    },
    breakpoints: {
      '(min-width: 640px)': {
        slides: { perView: 2, spacing: 20 },
      },
      '(min-width: 1024px)': {
        slides: { perView: 3, spacing: 25 },
      },
    },
  });

  // Auto slide
  useEffect(() => {
    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000);
    return () => clearInterval(interval);
  }, [slider]);

  return (
    <section className="bg-white w-full mb-24  py-10 px-4 md:px-20 relative">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 drop-shadow-md">
        Parents Testimonials
      </h2>

      {/* Horizontal blue bar */}
      <div className="absolute top-11/12 left-0 w-full h-[140px] bg-[#004899] -translate-y-1/2 z-0" />

      <div ref={sliderRef} className="keen-slider relative z-10">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="keen-slider__slide flex justify-center px-4"
          >
            <div className="bg-gradient-to-b from-[#004899] via-blue-400 to-white pt-14 pb-4 px-4 rounded-md w-full max-w-sm relative shadow-md">
              {/* Card Content */}
              <div className="bg-white rounded-md text-center pt-16 pb-6 px-4 shadow-md">
                <h3 className="font-semibold text-lg">{t.name}</h3>
                <p className="text-sm text-gray-500">{t.country}</p>
                <div className="flex justify-center my-2">
                  <span className="text-yellow-400 text-lg">★★★★★</span>
                </div>
                <p className="text-sm italic whitespace-pre-line">
                  {t.review}
                </p>
                <p className="text-xs font-semibold mt-4">Highly Recommended</p>
              </div>

              {/* Avatar */}
              <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg bg-white">

                <Image
                  src={t.img}
                  alt={t.name}
                  width={120}
                  height={120}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ParentsTestimonials;
