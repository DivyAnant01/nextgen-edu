import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";

export default function Hero() {
  const images = [
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000",
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2000",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2000",
  ];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) =>
        prev === images.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">

      {/* Background Slider */}

      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentImage}
            src={images[currentImage]}
            alt=""
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.05 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5 }}
            className="absolute inset-0 w-full h-full object-cover"
          />
        </AnimatePresence>

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-10 items-center">

        {/* LEFT CONTENT */}

        <div>

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-md
              border
              border-white/20
              mb-6
            "
          >
            <BadgeCheck size={16} />
            <span className="text-sm">
              Trusted Admission Partner
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="
              text-4xl
              md:text-5xl
              font-bold
              leading-tight
            "
          >
            Find The Right
            <span className="block text-cyan-400">
              Online University
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="
              mt-5
              text-lg
              text-gray-200
              max-w-lg
            "
          >
            Get admission guidance, career counselling,
            scholarship assistance and complete support
            from experienced counsellors.
          </motion.p>

          <div className="flex flex-wrap gap-4 mt-8">

            <a
              href="#counselling-form"
              className="
                px-7
                py-3
                rounded-xl
                bg-cyan-500
                hover:bg-cyan-600
                duration-300
                flex
                items-center
                gap-2
                font-medium
              "
            >
              Get Free Counselling
              <ArrowRight size={18} />
            </a>

            <Link
              to="/universities"
              className="
                px-7
                py-3
                rounded-xl
                border
                border-white/30
                backdrop-blur-md
                hover:bg-white/10
                duration-300
              "
            >
              Explore Universities
            </Link>

          </div>

          <div className="flex gap-8 mt-10">

            <div>
              <h3 className="text-2xl font-bold text-cyan-400">
                150+
              </h3>
              <p className="text-gray-300 text-sm">
                Universities
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-purple-400">
                500+
              </h3>
              <p className="text-gray-300 text-sm">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-green-400">
                10K+
              </h3>
              <p className="text-gray-300 text-sm">
                Students
              </p>
            </div>

          </div>

        </div>
                {/* RIGHT IMAGE */}

        <div className="hidden lg:flex justify-center">

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.img
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 4,
              }}
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1400"
              alt="Students"
              className="
                w-[450px]
                rounded-3xl
                shadow-2xl
                border
                border-white/20
              "
            />

            <div
              className="
                absolute
                bottom-5
                left-5
                bg-white/10
                backdrop-blur-md
                border
                border-white/20
                rounded-2xl
                px-5
                py-3
              "
            >
              <h4 className="font-semibold">
                Admissions Open 2026
              </h4>

              <p className="text-sm text-gray-300">
                Apply with expert guidance
              </p>
            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}