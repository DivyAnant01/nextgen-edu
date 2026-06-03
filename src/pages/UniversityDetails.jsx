import { useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { useState } from "react";

import ApplyNowModal from "../components/universities/ApplyNowModal";
import BrochureModal from "../components/universities/BrochureModal";

export default function UniversityDetails() {
    const [applyOpen, setApplyOpen] =
  useState(false);

const [brochureOpen, setBrochureOpen] =
  useState(false);
  const { slug } = useParams();

  const university =
    universities.find(
      (u) => u.slug === slug
    );

  if (!university) {
    return (
      <div className="pt-40 text-center">
        University Not Found
      </div>
    );
  }

  return (
    <section className="pt-24 pb-20">

      {/* HERO */}

      <div className="relative h-[500px]">

        <img
          src={university.image}
          alt={university.name}
          className="
          absolute
          inset-0
          w-full
          h-full
          object-cover
          "
        />

        <div
          className="
          absolute
          inset-0
          bg-black/60
          "
        />

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

            <h1 className="text-6xl font-bold">
              {university.name}
            </h1>

            <p className="mt-4 text-xl">
              {university.location}
            </p>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* OVERVIEW */}

        <div className="glass p-8 rounded-3xl mt-10">

          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p>
            {university.overview}
          </p>

        </div>

        {/* APPROVALS */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Approvals
          </h2>

          <div className="flex gap-3 flex-wrap">

            {university.approvals.map(
              (approval) => (
                <span
                  key={approval}
                  className="
                  px-4
                  py-2
                  bg-cyan-500/20
                  rounded-xl
                  "
                >
                  {approval}
                </span>
              )
            )}

          </div>

        </div>

        {/* COURSES */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Courses Offered
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            {university.courses.map(
              (course) => (
                <div
                  key={course}
                  className="
                  bg-white/5
                  p-4
                  rounded-xl
                  "
                >
                  {course}
                </div>
              )
            )}

          </div>

        </div>

        {/* ELIGIBILITY */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Eligibility
          </h2>

          <p>
            {university.eligibility}
          </p>

        </div>

        {/* ADMISSION */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Admission Process
          </h2>

          <p>
            {university.admission}
          </p>

        </div>

        {/* PLACEMENT */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Placement Support
          </h2>

          <p>
            {university.placement}
          </p>

        </div>

        {/* STATS */}

<div className="grid md:grid-cols-4 gap-6 mt-8">

  <div className="glass p-6 rounded-2xl text-center">
    <h3 className="text-3xl font-bold">
      ⭐ {university.rating}
    </h3>
    <p className="text-gray-400 mt-2">
      Rating
    </p>
  </div>

  <div className="glass p-6 rounded-2xl text-center">
    <h3 className="text-3xl font-bold">
      ₹ {Number(
        university.fees
      ).toLocaleString()}
    </h3>
    <p className="text-gray-400 mt-2">
      Semester Fees
    </p>
  </div>

  <div className="glass p-6 rounded-2xl text-center">
    <h3 className="text-3xl font-bold">
      {university.courses.length}
    </h3>
    <p className="text-gray-400 mt-2">
      Courses
    </p>
  </div>

  <div className="glass p-6 rounded-2xl text-center">
    <h3 className="text-3xl font-bold">
      {university.approvals.length}
    </h3>
    <p className="text-gray-400 mt-2">
      Approvals
    </p>
  </div>

</div>

{/* KEY HIGHLIGHTS */}

<div className="glass p-8 rounded-3xl mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Key Highlights
  </h2>

  <ul className="space-y-4">

    <li>
      ✅ UGC Approved University
    </li>

    <li>
      ✅ Online Admission Process
    </li>

    <li>
      ✅ Placement Assistance
    </li>

    <li>
      ✅ Industry Relevant Curriculum
    </li>

    <li>
      ✅ Flexible Learning Options
    </li>

  </ul>

</div>

{/* WHY CHOOSE */}

<div className="glass p-8 rounded-3xl mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Why Choose {university.name}?
  </h2>

  <p className="leading-8 text-gray-300">

    {university.name}
    {" "}
    offers quality education,
    recognized approvals,
    experienced faculty,
    strong placement support
    and flexible learning
    options for students
    across India.

  </p>

</div>

{/* STUDENT REVIEWS */}

<div className="glass p-8 rounded-3xl mt-8">

  <h2 className="text-3xl font-bold mb-6">
    Student Reviews
  </h2>

  <div className="space-y-4">

    <div className="bg-white/5 p-4 rounded-xl">
      ⭐⭐⭐⭐⭐ Excellent learning
      experience and faculty.
    </div>

    <div className="bg-white/5 p-4 rounded-xl">
      ⭐⭐⭐⭐⭐ Admission process
      was smooth and simple.
    </div>

    <div className="bg-white/5 p-4 rounded-xl">
      ⭐⭐⭐⭐ Great placement
      support and guidance.
    </div>

  </div>

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
            Apply for Admission
          </h2>

          <div className="flex gap-4 mt-6">

            <button
  onClick={() =>
    setApplyOpen(true)
  }
  className="
  bg-white
  text-black
  px-6
  py-3
  rounded-xl
  "
>
  Apply Now
</button>

            <button
  onClick={() =>
    setBrochureOpen(true)
  }
  className="
  border
  border-white
  px-6
  py-3
  rounded-xl
  "
>
  Download Brochure
</button>

          </div>

        </div>

      </div>

      <ApplyNowModal
  isOpen={applyOpen}
  onClose={() =>
    setApplyOpen(false)
  }
/>

<BrochureModal
  isOpen={brochureOpen}
  onClose={() =>
    setBrochureOpen(false)
  }
/>

    </section>
  );
}