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

      <div className="relative h-[450px]">

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

            <p className="text-xl mt-3">
              📍 {university.location}
            </p>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        {/* Overview */}

        <div className="glass p-8 rounded-3xl mt-10">

          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p>
            {university.overview}
          </p>

        </div>

        {/* Approvals */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Approvals
          </h2>

          <div className="flex gap-3 flex-wrap">

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

        </div>

        {/* Courses */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
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
            Eligibility
          </h2>

          <p>
            {university.eligibility}
          </p>

        </div>

        {/* Admission */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Admission Process
          </h2>

          <p>
            {university.admission}
          </p>

        </div>

        {/* Placement */}

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Placement Support
          </h2>

          <p>
            {university.placement}
          </p>

        </div>

        {/* Stats */}

        <div className="grid md:grid-cols-4 gap-6 mt-8">

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold">
              ⭐ {university.rating}
            </h3>

            <p className="mt-2 text-gray-400">
              Rating
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold">
              ₹ {Number(
                university.fees
              ).toLocaleString()}
            </h3>

            <p className="mt-2 text-gray-400">
              Fees
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold">
              {
                university.courses
                  ?.length
              }
            </h3>

            <p className="mt-2 text-gray-400">
              Courses
            </p>
          </div>

          <div className="glass p-6 rounded-2xl text-center">
            <h3 className="text-3xl font-bold">
              {
                university.approvals
                  ?.length
              }
            </h3>

            <p className="mt-2 text-gray-400">
              Approvals
            </p>
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

          <p className="mt-3">
            Start your admission process today.
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