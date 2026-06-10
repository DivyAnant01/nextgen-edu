import { motion } from "framer-motion";

export default function Stats() {
  const stats = [
    {
      number: "150+",
      label: "Partner Universities",
    },
    {
      number: "500+",
      label: "Courses Available",
    },
    {
      number: "10,000+",
      label: "Students Counselled",
    },
    {
      number: "95%",
      label: "Admission Success Rate",
    },
  ];

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid md:grid-cols-4 gap-6">

          {stats.map((item) => (
            <motion.div
              key={item.label}
              whileHover={{
                y: -5,
              }}
              className="
              glass
              p-8
              rounded-3xl
              text-center
              "
            >
              <h3
                className="
                text-4xl
                font-black
                text-cyan-400
                "
              >
                {item.number}
              </h3>

              <p
                className="
                mt-3
                text-gray-400
                "
              >
                {item.label}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}