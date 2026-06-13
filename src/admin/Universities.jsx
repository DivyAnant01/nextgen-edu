import { useState } from "react";

export default function UniversitiesAdmin() {
  const [universities] =
    useState([
      {
        id: 1,
        name: "Amity University",
        location: "Noida",
        courses: 15,
      },
      {
        id: 2,
        name: "LPU",
        location: "Punjab",
        courses: 22,
      },
      {
        id: 3,
        name: "Manipal University",
        location: "Jaipur",
        courses: 18,
      },
    ]);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Universities
        </h1>

        <button
          className="
          bg-cyan-500
          px-5
          py-3
          rounded-xl
          "
        >
          Add University
        </button>

      </div>

      <div className="glass p-6 rounded-3xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                University
              </th>

              <th className="text-left">
                Location
              </th>

              <th className="text-left">
                Courses
              </th>

              <th className="text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {universities.map(
              (university) => (
                <tr
                  key={university.id}
                  className="
                  border-b
                  border-white/5
                  "
                >
                  <td className="py-4">
                    {university.name}
                  </td>

                  <td>
                    {university.location}
                  </td>

                  <td>
                    {university.courses}
                  </td>

                  <td>

                    <button
                      className="
                      bg-yellow-500
                      px-3
                      py-1
                      rounded-lg
                      mr-2
                      "
                    >
                      Edit
                    </button>

                    <button
                      className="
                      bg-red-500
                      px-3
                      py-1
                      rounded-lg
                      "
                    >
                      Delete
                    </button>

                  </td>

                </tr>
              )
            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}