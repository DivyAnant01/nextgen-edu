import {
  useApplications,
} from "../context/ApplicationContext";

export default function MyApplications() {

  const {
    applications,
  } = useApplications();

  return (
    <section className="pt-32 pb-20 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <h1 className="text-5xl font-bold mb-10">
          My Applications
        </h1>

        {applications.length === 0 ? (

          <div
            className="
            glass
            p-10
            rounded-3xl
            text-center
            "
          >
            <h2 className="text-2xl font-bold">
              No Applications Yet
            </h2>

            <p className="text-gray-400 mt-3">
              Apply to a university to
              see your applications here.
            </p>
          </div>

        ) : (

          <div className="space-y-6">

            {applications.map(
              (item) => (

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

                  <p className="mt-3">
                    Course:
                    {" "}
                    {item.course}
                  </p>

                  <p className="mt-2">
                    Applicant:
                    {" "}
                    {item.name}
                  </p>

                  <p className="mt-2">
                    Email:
                    {" "}
                    {item.email}
                  </p>

                  <p className="mt-2">
                    Phone:
                    {" "}
                    {item.phone}
                  </p>

                  <p className="mt-2 text-gray-400">
                    Applied:
                    {" "}
                    {item.appliedAt}
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

              )
            )}

          </div>

        )}

      </div>

    </section>
  );
}