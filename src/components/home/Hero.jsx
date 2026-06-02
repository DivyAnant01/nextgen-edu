import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      <div className="absolute inset-0">

        <div className="absolute top-20 left-20 w-72 h-72 bg-cyan-500/20 blur-[120px]" />

        <div className="absolute bottom-20 right-20 w-72 h-72 bg-purple-500/20 blur-[120px]" />

      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">

        <motion.h1
          initial={{ opacity:0,y:50 }}
          animate={{ opacity:1,y:0 }}
          transition={{ duration:1 }}
          className="text-7xl font-black leading-tight"
        >
          Find Your
          <span className="gradient-text">
            {" "}Dream University
          </span>
        </motion.h1>

        <p className="mt-6 text-xl text-gray-400 max-w-2xl">
          Discover Top Universities, Online Degrees,
          Career Guidance and Admission Support.
        </p>

      </div>

    </section>
  );
}