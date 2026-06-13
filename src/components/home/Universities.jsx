import { motion } from "framer-motion";

const testimonials = [
  {
    id: 1,
    name: "Rahul Sharma",
    course: "Online MBA",
    image:
      "https://randomuser.me/api/portraits/men/32.jpg",
    review:
      "NextGenEdu helped me choose the best university. Admission process was smooth and quick.",
  },

  {
    id: 2,
    name: "Priya Verma",
    course: "BCA Online",
    image:
      "https://randomuser.me/api/portraits/women/44.jpg",
    review:
      "Very supportive counselling team. I got admission without any hassle.",
  },

  {
    id: 3,
    name: "Aman Singh",
    course: "MCA",
    image:
      "https://randomuser.me/api/portraits/men/12.jpg",
    review:
      "Excellent guidance from admission to fee payment. Highly recommended.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Student Success Stories
          </h2>

          <p className="text-gray-400 mt-4">
            Hear from students who found
            their dream university.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {testimonials.map((item) => (
            <motion.div
              key={item.id}
              whileHover={{
                y: -8,
              }}
              className="
              glass
              p-8
              rounded-3xl
              "
            >
              <div className="flex items-center gap-4">

                <img
                  src={item.image}
                  alt={item.name}
                  className="
                  w-16
                  h-16
                  rounded-full
                  object-cover
                  "
                />

                <div>
                  <h3 className="font-bold text-lg">
                    {item.name}
                  </h3>

                  <p className="text-cyan-400 text-sm">
                    {item.course}
                  </p>
                </div>

              </div>

              <p className="mt-6 text-gray-300 leading-7">
                "{item.review}"
              </p>

              <div className="mt-6 text-yellow-400">
                ⭐⭐⭐⭐⭐
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}