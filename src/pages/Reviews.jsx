import { reviews } from "../data/reviews";

export default function Reviews() {
  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          Student Reviews
        </h1>

        <div className="grid md:grid-cols-3 gap-8">

          {reviews.map((item) => (
            <div
              key={item.id}
              className="
              glass
              p-6
              rounded-3xl
              "
            >
              <h2 className="text-xl font-bold">
                {item.name}
              </h2>

              <p className="text-cyan-400 mt-2">
                {item.course}
              </p>

              <p className="mt-4">
                {item.review}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}