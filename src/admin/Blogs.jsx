import { useState } from "react";

export default function BlogsAdmin() {
  const [blogs] =
    useState([
      {
        id: 1,
        title:
          "Top Online Universities in India",
        author: "Admin",
      },
      {
        id: 2,
        title:
          "Online MBA Complete Guide",
        author: "Admin",
      },
      {
        id: 3,
        title:
          "Education Loan Guide 2026",
        author: "Admin",
      },
    ]);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Blog Management
        </h1>

        <button
          className="
          bg-cyan-500
          px-5
          py-3
          rounded-xl
          "
        >
          Create Blog
        </button>

      </div>

      <div className="glass p-6 rounded-3xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                Title
              </th>

              <th className="text-left">
                Author
              </th>

              <th className="text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {blogs.map((blog) => (
              <tr
                key={blog.id}
                className="
                border-b
                border-white/5
                "
              >
                <td className="py-4">
                  {blog.title}
                </td>

                <td>
                  {blog.author}
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
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}