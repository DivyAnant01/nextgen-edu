import {
  GraduationCap,
  Briefcase,
  School,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    title: "UG Programs",
    courses: "250+ Courses",
    icon: GraduationCap,
  },
  {
    title: "PG Programs",
    courses: "180+ Courses",
    icon: BookOpen,
  },
  {
    title: "MBA Programs",
    courses: "120+ Courses",
    icon: Briefcase,
  },
  {
    title: "Diploma Programs",
    courses: "80+ Courses",
    icon: School,
  },
];

export default function CourseCategories() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Explore Programs
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="
                glass
                rounded-3xl
                p-8
                hover:-translate-y-2
                duration-300
                cursor-pointer
                "
              >
                <Icon size={50} />

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.courses}
                </p>
              </div>
            );
          })}

        </div>

      </div>
    </section>
  );
}