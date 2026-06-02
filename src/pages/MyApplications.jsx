export default function MyApplications() {
  const applications = [
    {
      id: 1,
      university: "Amity University",
      course: "Online MBA",
      status: "Under Review",
    },
    {
      id: 2,
      university: "LPU",
      course: "Online MCA",
      status: "Approved",
    },
  ];

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          My Applications
        </h1>

        <div className="space-y-6">

          {applications.map((item) => (
            <div
              key={item.id}
              className="
              glass
              p-6
              rounded-3xl
              "
            >
              <h2 className="text-2xl font-bold">
                {item.university}
              </h2>

              <p className="mt-2">
                Course:
                {" "}
                {item.course}
              </p>

              <span
                className="
                inline-block
                mt-4
                px-4
                py-2
                rounded-xl
                bg-cyan-500/20
                "
              >
                {item.status}
              </span>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}