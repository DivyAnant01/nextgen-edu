import {
  ShieldCheck,
  GraduationCap,
  Users,
  Award,
} from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "250+ University Partners",
    desc: "UGC approved universities offering online and distance education programs.",
  },
  {
    icon: Users,
    title: "Expert Admission Counsellors",
    desc: "Personalized guidance to help you choose the right university and course.",
  },
  {
    icon: Award,
    title: "End-to-End Admission Support",
    desc: "From counselling to admission confirmation, we assist at every step.",
  },
  {
    icon: ShieldCheck,
    title: "Trusted by Thousands",
    desc: "Students across India trust us for higher education and career guidance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-5xl font-bold">
            Why Choose NextGenEdu
          </h2>

          <p className="text-gray-400 mt-4 max-w-3xl mx-auto">
            We simplify the university admission
            process through expert counselling,
            verified university partnerships and
            dedicated student support.
          </p>

        </div>

        <div className="grid md:grid-cols-4 gap-6">

          {features.map((item) => {
            const Icon = item.icon;

            return (
              <div
                key={item.title}
                className="
                glass
                p-8
                rounded-3xl
                text-center
                "
              >

                <Icon
                  size={50}
                  className="
                  mx-auto
                  text-cyan-400
                  "
                />

                <h3
                  className="
                  mt-5
                  text-xl
                  font-bold
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