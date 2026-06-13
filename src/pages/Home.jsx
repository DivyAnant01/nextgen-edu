import Hero from "../components/home/Hero";
import Stats from "../components/home/Stats";
import CourseCategories from "../components/home/CourseCategories";
import UniversitiesSection from "../components/home/UniversitiesSection";
import CoursesSection from "../components/home/CoursesSection";
import WhyChooseUs from "../components/home/WhyChooseUs";
import CounsellingForm from "../components/home/CounsellingForm";
import Testimonials from "../components/home/Testimonials";
import FAQ from "../components/home/FAQ";
import CTASection from "../components/home/CTASection";
import ProcessSection from "../components/home/ProcessSection";
export default function Home() {
  return (
    <>
      <Hero />
      <Stats />
      <CourseCategories />
      <UniversitiesSection />
      <CoursesSection />
      <WhyChooseUs />
      <CounsellingForm />
      <Testimonials />
      <ProcessSection />
      <FAQ />
      <CTASection />
    </>
  );
}