import { useState } from "react";

export default function CoursesAdmin() {
  const [courses] =
    useState([
      {
        id: 1,
        name: "MBA",
        duration: "2 Years",
      },
      {
        id: 2,
        name: "BCA",
        duration: "3 Years",
      },
      {
        id: 3,
        name: "MCA",
        duration: "2 Years",
      },
      {
        id: 4,
        name: "BBA",
        duration: "3 Years",
      },
    ]);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Courses
        </h1>

        <button
          className="
          bg-cyan-500
          px-5
          py-3
          rounded-xl
          "
        >
          Add Course
        </button>

      </div>

      <div className="glass p-6 rounded-3xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                Course Name
              </th>

              <th className="text-left">
                Duration
              </th>

              <th className="text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {courses.map(
              (course) => (
                <tr
                  key={course.id}
                  className="
                  border-b
                  border-white/5
                  "
                >
                  <td className="py-4">
                    {course.name}
                  </td>

                  <td>
                    {course.duration}
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