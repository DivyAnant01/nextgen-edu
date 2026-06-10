import {
  GraduationCap,
  Users,
  Award,
  Building2,
} from "lucide-react";

export default function About() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        {/* HERO */}

        <div className="text-center">

          <h1 className="text-5xl md:text-6xl font-bold">
            About NextGenEdu
          </h1>

          <p
            className="
            mt-6
            text-gray-400
            max-w-3xl
            mx-auto
            text-lg
            "
          >
            NextGenEdu is an education
            consultancy platform helping
            students find the right
            university, course and career
            path through expert admission
            guidance and counselling.
          </p>

        </div>

        {/* STORY */}

        <div className="glass p-10 rounded-3xl mt-16">

          <h2 className="text-3xl font-bold mb-6">
            Who We Are
          </h2>

          <p className="text-gray-300 leading-8">
            We work with leading
            UGC-approved universities
            across India and help students
            simplify the admission process.
            From university selection to
            final admission support, our
            counsellors guide students at
            every step.
          </p>

        </div>

        {/* STATS */}

        <div className="grid md:grid-cols-4 gap-6 mt-12">

          <div className="glass p-8 rounded-3xl text-center">

            <Building2
              size={40}
              className="mx-auto"
            />

            <h3 className="text-3xl font-bold mt-4">
              250+
            </h3>

            <p className="text-gray-400">
              Universities
            </p>

          </div>

          <div className="glass p-8 rounded-3xl text-center">

            <GraduationCap
              size={40}
              className="mx-auto"
            />

            <h3 className="text-3xl font-bold mt-4">
              5000+
            </h3>

            <p className="text-gray-400">
              Courses
            </p>

          </div>

          <div className="glass p-8 rounded-3xl text-center">

            <Users
              size={40}
              className="mx-auto"
            />

            <h3 className="text-3xl font-bold mt-4">
              10000+
            </h3>

            <p className="text-gray-400">
              Students Guided
            </p>

          </div>

          <div className="glass p-8 rounded-3xl text-center">

            <Award
              size={40}
              className="mx-auto"
            />

            <h3 className="text-3xl font-bold mt-4">
              95%
            </h3>

            <p className="text-gray-400">
              Success Rate
            </p>

          </div>

        </div>

        {/* MISSION */}

        <div className="grid md:grid-cols-2 gap-8 mt-12">

          <div className="glass p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-4">
              Our Mission
            </h2>

            <p className="text-gray-300 leading-8">
              To make higher education
              accessible and help students
              choose the right university
              and course with confidence.
            </p>

          </div>

          <div className="glass p-8 rounded-3xl">

            <h2 className="text-3xl font-bold mb-4">
              Our Vision
            </h2>

            <p className="text-gray-300 leading-8">
              To become India's most
              trusted education
              consultancy platform for
              admissions, counselling and
              career guidance.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}