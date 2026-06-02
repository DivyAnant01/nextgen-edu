import {
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Top Universities",
    desc: "Partnered with India's leading universities.",
  },
  {
    icon: Users,
    title: "Expert Counsellors",
    desc: "Dedicated admission guidance.",
  },
  {
    icon: Award,
    title: "Career Support",
    desc: "Placement & career assistance.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted Platform",
    desc: "Thousands of successful admissions.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center mb-14">
          Why Choose NextGenEdu
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="glass p-8 rounded-3xl"
              >
                <Icon size={50} />

                <h3 className="mt-5 text-xl font-bold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-400">
                  {item.desc}
                </p>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
}