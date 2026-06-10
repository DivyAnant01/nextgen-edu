import { Link } from "react-router-dom";

export default function CTASection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div
          className="
          rounded-[40px]
          p-12 md:p-16
          bg-gradient-to-r
          from-cyan-600
          to-blue-700
          text-center
          "
        >

          <h2 className="text-4xl md:text-6xl font-bold">
            Ready To Secure Your Admission?
          </h2>

          <p
            className="
            mt-6
            text-lg
            text-white/80
            max-w-3xl
            mx-auto
            "
          >
            Get expert counselling,
            university recommendations,
            admission assistance and
            career guidance from our
            experienced team.
          </p>

          <div
            className="
            flex
            flex-wrap
            justify-center
            gap-4
            mt-10
            "
          >

            <Link
              to="/contact"
              className="
              bg-white
              text-black
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:scale-105
              transition
              "
            >
              Get Free Counselling
            </Link>

            <Link
              to="/universities"
              className="
              border
              border-white
              px-8
              py-4
              rounded-xl
              font-semibold
              hover:bg-white/10
              transition
              "
            >
              Explore Universities
            </Link>

          </div>

        </div>

      </div>

    </section>
  );
}