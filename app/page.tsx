import Hero from "@/components/section/hero";
import About from "@/components/section/about";
import Rooms from "@/components/section/rooms";
import Features from "@/components/section/features";
import Location from "@/components/section/location";
import Testimonials from "@/components/section/testimonials";
import FaqCta from "@/components/section/faq";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Features />
      <Location />
      <Testimonials />
      <FaqCta />
    </>
  );
}
