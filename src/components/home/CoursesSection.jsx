import { Link } from "react-router-dom";

const courses = [
  {
    name: "Online MBA",
    duration: "2 Years",
  },
  {
    name: "BBA",
    duration: "3 Years",
  },
  {
    name: "BCA",
    duration: "3 Years",
  },
  {
    name: "MCA",
    duration: "2 Years",
  },
  {
    name: "M.Com",
    duration: "2 Years",
  },
  {
    name: "B.Tech",
    duration: "4 Years",
  },
];

export default function CoursesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">

          <div>

            <h2 className="text-5xl font-bold">
              Popular Courses
            </h2>

            <p className="text-gray-400 mt-3">
              Choose from industry-relevant
              degree programs offered by
              top universities.
            </p>

          </div>

          <Link
            to="/courses"
            className="
            hidden md:block
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            "
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          {courses.map((course) => (

            <div
              key={course.name}
              className="
              glass
              p-8
              rounded-3xl
              "
            >

              <h3 className="text-2xl font-bold">
                {course.name}
              </h3>

              <p className="text-gray-400 mt-3">
                Duration: {course.duration}
              </p>

              <p className="text-gray-400 mt-2">
                Available in multiple
                UGC-approved universities.
              </p>

              <button
                className="
                mt-6
                bg-cyan-500
                px-5
                py-3
                rounded-xl
                "
              >
                Get Free Counselling
              </button>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}