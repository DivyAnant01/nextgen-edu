const universities = [
  {
    id: 1,
    name: "Amity University",
    location: "Noida",
  },
  {
    id: 2,
    name: "LPU",
    location: "Punjab",
  },
  {
    id: 3,
    name: "Manipal University",
    location: "Jaipur",
  },
];

export default function UniversitiesSection() {
  return (
    <section className="py-24">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-14">
          Featured Universities
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {universities.map((item) => (
            <div
              key={item.id}
              className="
              glass
              rounded-3xl
              overflow-hidden
              "
            >

              <img
                src="https://placehold.co/600x400"
                alt=""
                className="w-full"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {item.name}
                </h3>

                <p className="text-gray-400 mt-2">
                  {item.location}
                </p>

                <button
                  className="
                  mt-5
                  bg-cyan-500
                  px-5
                  py-3
                  rounded-xl
                  "
                >
                  View Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}