import Head from "next/head";
import AboutFounder from "@/components/AboutFounder";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import OurUSPs from "@/components/OurUSPs";
import ParentsTestimonials from "@/components/ParentsTestimonials";
import Results from "@/components/Results";

export default function Home() {
  return (
    <>
      <Head>
        <title>The Study Center | Aim Towards Excellence</title>
        <meta
          name="description"
          content="The Study Center is a premier coaching institute dedicated to shaping young minds through board, JEE, NEET, and foundation programs. Learn, grow, and excel with us."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="The Study Center, coaching institute, JEE, NEET, Board exams, Foundation programs, Test preparation" />
        <meta property="og:title" content="The Study Center | Aim Towards Excellence" />
        <meta property="og:description" content="Empowering students through expert coaching for board, JEE, NEET, and foundation courses. Join us towards excellence." />
        <meta property="og:type" content="website" />
      </Head>

      <main>
        <ImageSlider />
        
        <HeroSection />

        <div aria-hidden="true" className="absolute left-0 w-full h-[5px] bg-gray-400 -translate-y-1/2 z-0" />

        <section id="about-founder">
          <AboutFounder />
        </section>

        <div aria-hidden="true" className="absolute left-0 w-full h-[10px] bg-gray-400 -translate-y-1/2 z-0" />

        <section id="testimonials">
          <ParentsTestimonials />
        </section>

        <section id="about-us">
          <AboutUs />
        </section>

        <div aria-hidden="true" className="absolute left-0 w-full h-[10px] bg-gray-400 -translate-y-1/2 z-0" />

        <section id="our-usps">
          <OurUSPs />
        </section>

        <div aria-hidden="true" className="absolute left-0 w-full h-[5px] bg-gray-400 -translate-y-1/2 z-0" />

        <section id="results">
          <Results />
        </section>
      </main>
    </>
  );
}

