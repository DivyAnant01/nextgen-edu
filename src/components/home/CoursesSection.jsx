const courses = [
  "Online MBA",
  "BCA",
  "MCA",
  "BBA",
  "MCom",
  "BTech",
];

export default function CoursesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-14">
          Popular Courses
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {courses.map((course, index) => (
            <div
              key={index}
              className="
              glass
              p-8
              rounded-3xl
              "
            >
              <h3 className="text-2xl font-bold">
                {course}
              </h3>

              <p className="mt-3 text-gray-400">
                Top universities available
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}