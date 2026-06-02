import { courses }
from "../data/courses";

import CourseCard
from "../components/courses/CourseCard";

export default function Courses() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Online Courses
        </h1>

        <div className="grid md:grid-cols-4 gap-8">

          {courses.map((course) => (
            <CourseCard
              key={course.id}
              course={course}
            />
          ))}

        </div>

      </div>
    </section>
  );
}