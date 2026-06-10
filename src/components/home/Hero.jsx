import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-24">

      <div className="absolute inset-0">

        <div
          className="
          absolute
          top-20
          left-20
          w-72
          h-72
          bg-cyan-500/20
          blur-[120px]
          "
        />

        <div
          className="
          absolute
          bottom-20
          right-20
          w-72
          h-72
          bg-purple-500/20
          blur-[120px]
          "
        />

      </div>

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        relative
        z-10
        grid
        lg:grid-cols-2
        gap-12
        items-center
        "
      >

        {/* LEFT */}

        <div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 50,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            text-5xl
            md:text-7xl
            font-black
            leading-tight
            "
          >
            Get Admission In

            <span className="gradient-text">
              {" "}Top Online Universities
            </span>

          </motion.h1>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.3,
            }}
            className="
            mt-6
            text-xl
            text-gray-400
            max-w-2xl
            "
          >
            Free Career Counselling,
            Admission Guidance,
            University Selection,
            Scholarships & End-to-End Support
            from expert counsellors.
          </motion.p>

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.5,
            }}
            className="
            flex
            flex-wrap
            gap-4
            mt-8
            "
          >

            <a
              href="#counselling-form"
              className="
              bg-cyan-500
              px-8
              py-4
              rounded-2xl
              font-semibold
              hover:scale-105
              duration-300
              "
            >
              Get Free Counselling
            </a>

            <Link
              to="/universities"
              className="
              border
              border-white/20
              px-8
              py-4
              rounded-2xl
              hover:bg-white/10
              duration-300
              "
            >
              Explore Universities
            </Link>

          </motion.div>

          {/* STATS */}

          <div
            className="
            grid
            grid-cols-3
            gap-6
            mt-12
            "
          >

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                150+
              </h3>

              <p className="text-gray-400">
                Universities
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                500+
              </h3>

              <p className="text-gray-400">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">
                10K+
              </h3>

              <p className="text-gray-400">
                Admissions Assisted
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT */}

        <motion.div
          initial={{
            opacity: 0,
            x: 100,
          }}
          animate={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="relative"
        >

          <img
            src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=1400"
            alt="Admission Counselling"
            className="
            rounded-[40px]
            shadow-2xl
            border
            border-white/10
            "
          />

          <div
            className="
            absolute
            -bottom-6
            -left-6
            glass
            p-4
            rounded-2xl
            "
          >
            🎓 Admissions Open 2026
          </div>

          <div
            className="
            absolute
            -top-6
            -right-6
            glass
            p-4
            rounded-2xl
            "
          >
            📞 Free Counselling
          </div>

        </motion.div>

      </div>

    </section>
  );
}