import { Link } from "react-router-dom";
import { universities } from "../../data/universities";

export default function UniversitiesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex justify-between items-center mb-14">

          <div>

            <h2 className="text-5xl font-bold">
              Top Universities
            </h2>

            <p className="text-gray-400 mt-3">
              Explore UGC approved universities
              with expert admission guidance.
            </p>

          </div>

          <Link
            to="/universities"
            className="
            hidden md:block
            bg-cyan-500
            px-6
            py-3
            rounded-xl
            "
          >
            View All
          </Link>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {universities
            .slice(0, 6)
            .map((university) => (

              <div
                key={university.id}
                className="
                glass
                rounded-3xl
                overflow-hidden
                "
              >

                <img
                  src={
                    university.banner ||
                    university.image
                  }
                  alt={university.name}
                  className="
                  w-full
                  h-56
                  object-cover
                  "
                />

                <div className="p-6">

                  <h3 className="text-2xl font-bold">
                    {university.name}
                  </h3>

                  <p className="text-gray-400 mt-2">
                    📍 {university.location}
                  </p>

                  <div className="flex gap-4 mt-4">

                    <span>
                      ⭐ {university.rating}
                    </span>

                    <span>
                      ₹ {Number(
                        university.fees
                      ).toLocaleString()}
                    </span>

                  </div>

                  <Link
                    to={`/universities/${university.slug}`}
                    className="
                    inline-block
                    mt-6
                    bg-cyan-500
                    px-5
                    py-3
                    rounded-xl
                    "
                  >
                    View Details
                  </Link>

                </div>

              </div>

            ))}

        </div>

      </div>

    </section>
  );
}