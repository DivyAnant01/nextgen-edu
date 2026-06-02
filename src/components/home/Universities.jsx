const universities = [
  {
    id:1,
    name:"Amity University"
  },
  {
    id:2,
    name:"Manipal University"
  },
  {
    id:3,
    name:"LPU"
  },
  {
    id:4,
    name:"Jain University"
  }
];

export default function Universities() {
  return (
    <section className="py-20">

      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold mb-12">
          Top Universities
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {universities.map((item)=>(
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
              />

              <div className="p-6">

                <h3 className="text-xl font-semibold">
                  {item.name}
                </h3>

                <button
                  className="
                  mt-4
                  bg-cyan-500
                  px-4
                  py-2
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