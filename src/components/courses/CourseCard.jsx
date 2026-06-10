import { Link } from "react-router-dom";

export default function CourseCard({
  course,
}) {
  return (
    <div
      className="
      glass
      rounded-3xl
      overflow-hidden
      hover:-translate-y-2
      duration-300
      "
    >
      <img
        src={course.image}
        alt={course.title}
        className="
        h-60
        w-full
        object-cover
        "
      />

      <div className="p-6">

        <h2 className="text-2xl font-bold">
          {course.title}
        </h2>

        <p className="text-gray-400 mt-2">
          {course.duration}
        </p>

        <p className="mt-3 text-gray-400">
  Duration: {course.duration}
</p>

        <Link
          to={`/courses/${course.slug}`}
          className="
          mt-5
          inline-block
          bg-cyan-500
          px-5
          py-3
          rounded-xl
          "
        >
          Know More
        </Link>

      </div>
    </div>
  );
}