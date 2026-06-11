import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, BadgeCheck } from "lucide-react";

export default function Hero() {
 const images = [
  "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2400",
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&w=2400",
  "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2400",
  "https://images.unsplash.com/photo-1562774053-701939374585?q=80&w=2400",
  "https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?q=80&w=2400",
  "https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&w=2400",
];

  const [currentImage, setCurrentImage] = useState(0);

 useEffect(() => {
  const interval = setInterval(() => {
    setCurrentImage((prev) =>
      (prev + 1) % images.length
    );
  }, 6000);

  return () => clearInterval(interval);
}, [images.length]);

  return (
    <section className="relative min-h-screen overflow-hidden text-white">

      {/* Background Slider */}

      

<div className="absolute inset-0 overflow-hidden">

  {images.map((image, index) => (
    <motion.img
      key={index}
      src={image}
      alt={`slide-${index}`}
      loading="eager"
      className="absolute inset-0 w-full h-full object-cover"
      animate={{
        opacity: currentImage === index ? 1 : 0,
        scale: currentImage === index ? 1.08 : 1.02,
      }}
      transition={{
        opacity: { duration: 1.2 },
        scale: { duration: 4 },
      }}
    />
  ))}

  {/* Very light overlay only for readability */}
  <div className="absolute inset-0 bg-black/10" />

</div>

      {/* Content */}

      <div
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        min-h-screen
        flex
        items-center
        "
      >
        <div className="max-w-2xl">

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
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
            "
          >
            <BadgeCheck size={16} />
            Trusted Admission Partner
          </motion.div>

          <motion.h1
            initial={{
              opacity: 0,
              y: 30,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 4,
            }}
            className="
mt-6
text-4xl
md:text-5xl
font-bold
leading-tight
drop-shadow-[0_4px_15px_rgba(0,0,0,0.9)]
"
          >
            Find Your Future With

            <span className="block text-cyan-400">
              Top Online Universities
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
              delay: 0.2,
            }}
            className="
mt-5
text-lg
text-white
max-w-xl
drop-shadow-[0_2px_10px_rgba(0,0,0,0.9)]
"
          >
            Get expert counselling, admission guidance,
            scholarship support and university selection
            assistance from experienced education advisors.
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
              delay: 0.3,
            }}
            className="flex flex-wrap gap-4 mt-8"
          >
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
          </motion.div>

          {/* Stats */}

          <div className="flex gap-10 mt-10">

            <div>
              <h3 className="text-3xl font-bold text-cyan-400">
                150+
              </h3>

              <p className="text-sm text-gray-300">
                Universities
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-purple-400">
                500+
              </h3>

              <p className="text-sm text-gray-300">
                Courses
              </p>
            </div>

            <div>
              <h3 className="text-3xl font-bold text-green-400">
                10K+
              </h3>

              <p className="text-sm text-gray-300">
                Students
              </p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}