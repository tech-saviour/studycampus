import AboutFounder from "@/components/AboutFounder";
import AboutUs from "@/components/AboutUs";
import HeroSection from "@/components/HeroSection";
import ImageSlider from "@/components/ImageSlider";
import OurUSPs from "@/components/OurUSPs";
import ParentsTestimonials from "@/components/ParentsTestimonials";
import Results from "@/components/Results";

export default function Home() {
  return (
   <div>
    <ImageSlider/>
    <HeroSection/>
    <div className="absolute left-0 w-full h-[5px] bg-gray-400 -translate-y-1/2 z-0" />
    <AboutFounder/>
    <div className="absolute left-0 w-full h-[10px] bg-gray-400 -translate-y-1/2 z-0" />
    <ParentsTestimonials/>
    <AboutUs/>
    <div className="absolute left-0 w-full h-[10px] bg-gray-400 -translate-y-1/2 z-0" />
    <OurUSPs/>
    <div className="absolute left-0 w-full h-[5px] bg-gray-400 -translate-y-1/2 z-0" />
    <Results/>
   </div>
  );
}
