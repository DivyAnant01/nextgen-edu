import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Choose University",
    desc: "Select the best university according to your career goals."
  },
  {
    number: "02",
    title: "Free Counseling",
    desc: "Get expert guidance from our admission counselors."
  },
  {
    number: "03",
    title: "Submit Application",
    desc: "Complete your admission form and upload documents."
  },
  {
    number: "04",
    title: "Admission Confirmed",
    desc: "Receive confirmation and start your learning journey."
  }
];

export default function ProcessSection() {
  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">
          <h2 className="text-5xl font-bold">
            Admission Process
          </h2>

          <p className="text-gray-400 mt-4">
            Start your admission journey in 4 simple steps
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

          {steps.map((step) => (
            <motion.div
              key={step.number}
              whileHover={{ y: -10 }}
              className="
              glass
              p-8
              rounded-3xl
              text-center
              "
            >
              <div
                className="
                w-16
                h-16
                mx-auto
                rounded-full
                bg-cyan-500
                flex
                items-center
                justify-center
                text-2xl
                font-bold
                mb-6
                "
              >
                {step.number}
              </div>

              <h3 className="text-2xl font-bold mb-3">
                {step.title}
              </h3>

              <p className="text-gray-400">
                {step.desc}
              </p>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}