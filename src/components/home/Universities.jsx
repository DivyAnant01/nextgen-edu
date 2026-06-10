import { Link } from "react-router-dom";
import { universities } from "../data/universities";

export default function Universities() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h1 className="text-5xl font-bold">
            Top Universities
          </h1>

          <p className="text-gray-400 mt-4">
            Explore UGC approved universities
            and find the right program for
            your career goals.
          </p>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {universities.map((university) => (

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

                <div className="mt-5 flex flex-wrap gap-2">

                  {university.approvals
                    ?.slice(0, 3)
                    .map((item) => (

                      <span
                        key={item}
                        className="
                        text-xs
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/20
                        "
                      >
                        {item}
                      </span>

                    ))}

                </div>

                <Link
                  to={`/universities/${university.slug}`}
                  className="
                  mt-6
                  inline-block
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