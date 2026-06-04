import { applications } from "../data/applications";

export default function Applications() {
  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          My Applications
        </h1>

        <div className="space-y-6">

          {applications.map((app) => (
            <div
              key={app.id}
              className="
              glass
              p-6
              rounded-3xl
              "
            >
              <div className="flex justify-between flex-wrap gap-4">

                <div>
                  <h2 className="text-2xl font-bold">
                    {app.university}
                  </h2>

                  <p className="text-gray-400">
                    {app.course}
                  </p>
                </div>

                <div>
                  <span
                    className="
                    px-4
                    py-2
                    rounded-xl
                    bg-cyan-500/20
                    "
                  >
                    {app.status}
                  </span>
                </div>

              </div>

              <p className="mt-4 text-gray-400">
                Applied On: {app.date}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}