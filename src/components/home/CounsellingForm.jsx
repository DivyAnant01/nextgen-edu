export default function CounsellingForm() {
  return (
    <section className="py-24">

      <div className="max-w-5xl mx-auto px-6">

        <div className="glass p-10 rounded-3xl">

          <h2 className="text-4xl font-bold mb-8">
            Free Career Counselling
          </h2>

          <div className="grid md:grid-cols-2 gap-5">

            <input
              placeholder="Full Name"
              className="p-4 rounded-xl bg-black/20"
            />

            <input
              placeholder="Phone Number"
              className="p-4 rounded-xl bg-black/20"
            />

            <input
              placeholder="Email"
              className="p-4 rounded-xl bg-black/20"
            />

            <input
              placeholder="Interested Course"
              className="p-4 rounded-xl bg-black/20"
            />

          </div>

          <button
            className="
            mt-6
            bg-cyan-500
            px-8
            py-4
            rounded-xl
            "
          >
            Get Free Guidance
          </button>

        </div>

      </div>

    </section>
  );
}