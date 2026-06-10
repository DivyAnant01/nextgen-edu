import {
  GraduationCap,
  Briefcase,
  School,
  BookOpen,
} from "lucide-react";

const categories = [
  {
    title: "Online UG Programs",
    description:
      "BBA, BCA, BA, B.Com and more",
    icon: GraduationCap,
  },
  {
    title: "Online PG Programs",
    description:
      "MA, M.Com, MCA and more",
    icon: BookOpen,
  },
  {
    title: "Online MBA",
    description:
      "Top UGC approved MBA programs",
    icon: Briefcase,
  },
  {
    title: "Diploma & Certifications",
    description:
      "Career focused skill programs",
    icon: School,
  },
];

export default function CourseCategories() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Popular Programs
          </h2>

          <p className="text-gray-400 mt-4">
            Choose the right program with
            expert counselling support.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {categories.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                glass
                rounded-3xl
                p-8
                hover:-translate-y-2
                duration-300
                "
              >

                <Icon
                  size={50}
                  className="text-cyan-400"
                />

                <h3
                  className="
                  mt-6
                  text-xl
                  font-semibold
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-3
                  text-gray-400
                  "
                >
                  {item.description}
                </p>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}