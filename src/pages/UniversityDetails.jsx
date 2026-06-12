import { useParams } from "react-router-dom";
import { universities } from "../data/universities";
import { useState } from "react";

import ApplyNowModal from "../components/universities/ApplyNowModal";
import BrochureModal from "../components/universities/BrochureModal";

export default function UniversityDetails() {
  const { slug } = useParams();

  const [applyOpen, setApplyOpen] =
    useState(false);

  const [brochureOpen, setBrochureOpen] =
    useState(false);

  const university =
    universities.find(
      (u) => u.slug === slug
    );

  if (!university) {
    return (
      <div className="pt-40 text-center text-3xl">
        University Not Found
      </div>
    );
  }

  return (
    <section className="pt-32 pb-20">

      {/* Hero */}

      <div className="relative h-[500px]">

        <img
          src={
            university.banner ||
            university.image
          }
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
          bg-black/70
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

            <div className="flex gap-3 flex-wrap mb-4">

              {university.approvals?.map(
                (item) => (
                  <span
                    key={item}
                    className="
                    px-4
                    py-2
                    rounded-xl
                    bg-cyan-500/20
                    "
                  >
                    {item}
                  </span>
                )
              )}

            </div>

            <h1 className="text-6xl font-bold">
              {university.name}
            </h1>

            <p className="text-xl mt-4">
              📍 {university.location}
            </p>

            <div className="flex gap-4 mt-6">

              <button
                onClick={() =>
                  setApplyOpen(true)
                }
                className="
                bg-cyan-500
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

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Quick Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-10">

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-cyan-400">
              ⭐ {university.rating}
            </h3>

            <p className="mt-2 text-gray-400">
              Rating
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-green-400">
              ₹ {Number(
                university.fees
              ).toLocaleString()}
            </h3>

            <p className="mt-2 text-gray-400">
              Annual Fees
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-purple-400">
              {university.courses?.length}
            </h3>

            <p className="mt-2 text-gray-400">
              Courses
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold text-orange-400">
              {university.approvals?.length}
            </h3>

            <p className="mt-2 text-gray-400">
              Approvals
            </p>
          </div>

        </div>

                {/* Courses */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Courses Offered
          </h2>

          <div className="grid md:grid-cols-4 gap-4">

            {university.courses?.map(
              (course) => (
                <div
                  key={course}
                  className="
                  bg-white/10
                  p-4
                  rounded-xl
                  text-center
                  hover:bg-cyan-500/20
                  transition
                  "
                >
                  {course}
                </div>
              )
            )}

          </div>

        </div>

        {/* Eligibility */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Eligibility Criteria
          </h2>

          <p className="text-gray-300 leading-8">
            {university.eligibility}
          </p>

        </div>

        {/* Admission Process */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Admission Process
          </h2>

          <p className="text-gray-300 leading-8">
            {university.admission}
          </p>

        </div>

        {/* Placement Support */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Placement Support
          </h2>

          <p className="text-gray-300 leading-8">
            {university.placement}
          </p>

        </div>

        {/* Why Choose */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-6">
            Why Choose {university.name} ?
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div className="bg-white/10 p-5 rounded-xl">
              ✅ UGC Approved University
            </div>

            <div className="bg-white/10 p-5 rounded-xl">
              🎓 Industry Relevant Curriculum
            </div>

            <div className="bg-white/10 p-5 rounded-xl">
              💼 Placement Assistance
            </div>

            <div className="bg-white/10 p-5 rounded-xl">
              🌐 Online & Distance Learning
            </div>

          </div>

        </div>
                {/* Similar Universities */}

        <div className="mt-10">

          <h2 className="text-4xl font-bold mb-8">
            Similar Universities
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            {universities
              .filter(
                (u) =>
                  u.id !== university.id
              )
              .slice(0, 3)
              .map((u) => (
                <div
                  key={u.id}
                  className="
                  glass
                  rounded-3xl
                  overflow-hidden
                  "
                >

                  <img
                    src={
                      u.banner ||
                      u.image
                    }
                    alt={u.name}
                    className="
                    w-full
                    h-52
                    object-cover
                    "
                  />

                  <div className="p-5">

                    <h3 className="text-xl font-bold">
                      {u.name}
                    </h3>

                    <p className="text-gray-400 mt-2">
                      📍 {u.location}
                    </p>

                    <p className="mt-3">
                      ⭐ {u.rating}
                    </p>

                  </div>

                </div>
              ))}

          </div>

        </div>

        {/* Student Reviews */}

        <div className="glass p-8 rounded-3xl mt-10">

          <h2 className="text-3xl font-bold mb-6">
            Student Reviews
          </h2>

          <div className="grid md:grid-cols-3 gap-6">

            <div className="bg-white/10 p-5 rounded-2xl">
              <p>
                Great learning experience
                and excellent faculty.
              </p>

              <h4 className="mt-4 font-bold">
                ⭐⭐⭐⭐⭐
              </h4>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              <p>
                Flexible online programs
                and affordable fees.
              </p>

              <h4 className="mt-4 font-bold">
                ⭐⭐⭐⭐⭐
              </h4>
            </div>

            <div className="bg-white/10 p-5 rounded-2xl">
              <p>
                Good placement support
                and career guidance.
              </p>

              <h4 className="mt-4 font-bold">
                ⭐⭐⭐⭐☆
              </h4>
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
            Apply For Admission
          </h2>

          <p className="mt-3">
            Start your admission
            process today.
          </p>

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
        university={university}
      />

      <BrochureModal
        isOpen={brochureOpen}
        onClose={() =>
          setBrochureOpen(false)
        }
        university={university}
      />

    </section>
  );
}