const reviews = [
  {
    name: "Rahul Sharma",
    text: "Excellent counselling experience.",
  },
  {
    name: "Priya Singh",
    text: "Got admission successfully.",
  },
  {
    name: "Aman Verma",
    text: "Highly recommended platform.",
  },
];

export default function Testimonials() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-14">
          Student Reviews
        </h2>

        <div className="grid md:grid-cols-3 gap-6">

          {reviews.map((item, index) => (
            <div
              key={index}
              className="glass p-8 rounded-3xl"
            >
              <h3 className="font-bold text-xl">
                {item.name}
              </h3>

              <p className="mt-4 text-gray-400">
                {item.text}
              </p>
            </div>
          ))}

        </div>

      </div>

    </section>
  );
}