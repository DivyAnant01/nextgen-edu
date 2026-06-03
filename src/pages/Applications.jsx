import {
  useApplications,
} from "../context/ApplicationContext";

export default function Applications() {
  const {
    applications,
  } = useApplications();

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-7xl mx-auto px-6">

        <h1
          className="
          text-5xl
          font-bold
          mb-10
          "
        >
          My Applications
        </h1>

        {applications.length ===
        0 ? (
          <div
            className="
            glass
            p-10
            rounded-3xl
            "
          >
            No Applications Yet
          </div>
        ) : (
          <div className="grid gap-6">

            {applications.map(
              (app) => (
                <div
                  key={app.id}
                  className="
                  glass
                  p-6
                  rounded-3xl
                  "
                >
                  <h2
                    className="
                    text-2xl
                    font-bold
                    "
                  >
                    {
                      app.university
                    }
                  </h2>

                  <p className="mt-2">
                    Course:
                    {" "}
                    {
                      app.course
                    }
                  </p>

                  <p className="mt-2">
                    City:
                    {" "}
                    {
                      app.city
                    }
                  </p>

                  <span
                    className="
                    inline-block
                    mt-4
                    px-4
                    py-2
                    rounded-full
                    bg-yellow-500/20
                    "
                  >
                    {
                      app.status
                    }
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