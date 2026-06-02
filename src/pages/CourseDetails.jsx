import { useParams } from "react-router-dom";
import { courses } from "../data/courses";

export default function CourseDetails() {

  const { slug } = useParams();

  const course =
    courses.find(
      (c) => c.slug === slug
    );

  if (!course) {
    return (
      <h1 className="pt-40 text-center">
        Course Not Found
      </h1>
    );
  }

  return (
    <section className="pt-24 pb-20">

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

            <h1 className="text-6xl font-bold">
              {course.title}
            </h1>

            <p className="mt-4 text-xl">
              Duration:
              {" "}
              {course.duration}
            </p>

          </div>
        </div>

      </div>

      <div className="max-w-7xl mx-auto px-6">

        <div className="glass p-8 rounded-3xl mt-10">

          <h2 className="text-3xl font-bold mb-4">
            Overview
          </h2>

          <p>
            {course.overview}
          </p>

        </div>

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

        <div className="glass p-8 rounded-3xl mt-8">

          <h2 className="text-3xl font-bold mb-4">
            Hiring Partners
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

      </div>

    </section>
  );
}