import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetails() {
  const { slug } = useParams();

  const course = courses.find(
    (c) => c.slug === slug
  );

  if (!course) {
    return (
      <h1 className="pt-40 text-center text-3xl font-bold">
        Course Not Found
      </h1>
    );
  }

  return (
    <section className="pt-24 pb-20">

      {/* HERO */}

      <div className="relative h-[450px]">

        <img
          src={course.image}
          alt={course.title}
          className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          "
        />

        <div className="absolute inset-0 bg-black/60" />

        <div
          className="
          relative
          z-10
          h-full
          flex
          items-center
          "
        >
          <div className="max-w-7xl mx-auto px-6">

            <h1 className="text-5xl md:text-6xl font-bold">
              {course.title}
            </h1>

            <p className="mt-4 text-xl">
              Duration: {course.duration}
            </p>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* OVERVIEW */}

        <div className="glass p-8 rounded-3xl mt-10">

          <h2 className="text-3xl font-bold mb-4">
            Course Overview
          </h2>

          <p className="leading-8">
            {course.overview}
          </p>

        </div>

        {/* ELIGIBILITY */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Eligibility
          </h2>

          <p>
            {course.eligibility}
          </p>

        </div>

        {/* COURSE INFO */}

        <div className="grid md:grid-cols-3 gap-6 mt-8">

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-3xl font-bold">
              {course.duration}
            </h3>

            <p className="text-gray-400 mt-2">
              Course Duration
            </p>

          </div>

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-3xl font-bold">
              ₹ {course.fees}
            </h3>

            <p className="text-gray-400 mt-2">
              Program Fees
            </p>

          </div>

          <div className="glass p-6 rounded-2xl text-center">

            <h3 className="text-3xl font-bold">
              {course.curriculum.length}
            </h3>

            <p className="text-gray-400 mt-2">
              Core Subjects
            </p>

          </div>

        </div>

        {/* CURRICULUM */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Curriculum
          </h2>

          <ul className="space-y-3">

            {course.curriculum.map(
              (item) => (
                <li key={item}>
                  • {item}
                </li>
              )
            )}

          </ul>

        </div>

        {/* COURSE HIGHLIGHTS */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Course Highlights
          </h2>

          <ul className="space-y-3">

            <li>
              ✅ UGC Recognised Program
            </li>

            <li>
              ✅ Flexible Online Learning
            </li>

            <li>
              ✅ Industry Relevant Curriculum
            </li>

            <li>
              ✅ Placement Assistance
            </li>

            <li>
              ✅ Expert Faculty Support
            </li>

          </ul>

        </div>

        {/* CAREER OPPORTUNITIES */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Career Opportunities
          </h2>

          <div className="flex flex-wrap gap-4">

            {course.recruiters.map(
              (item) => (
                <div
                  key={item}
                  className="
                  bg-white/10
                  px-5
                  py-3
                  rounded-xl
                  "
                >
                  {item}
                </div>
              )
            )}

          </div>

        </div>

        {/* WHY CHOOSE THIS COURSE */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Why Choose {course.title}?
          </h2>

          <p className="leading-8 text-gray-300">

            This program is designed
            to help students build
            strong academic and
            industry skills. With
            flexible learning,
            expert faculty and
            placement support,
            it provides excellent
            opportunities for career
            growth and higher studies.

          </p>

        </div>

        {/* CTA */}

        <div
          className="
          mt-10
          rounded-3xl
          p-10
          bg-gradient-to-r
          from-cyan-600
          to-purple-600
          "
        >

          <h2 className="text-4xl font-bold">
            Get Free Admission Guidance
          </h2>

          <p className="mt-4 text-lg">

            Talk to our admission experts
            and find the best university
            for your chosen course.

          </p>

          <button
            className="
            mt-6
            bg-white
            text-black
            px-6
            py-3
            rounded-xl
            font-semibold
            "
          >
            Request Counselling
          </button>

        </div>

      </div>

    </section>
  );
}