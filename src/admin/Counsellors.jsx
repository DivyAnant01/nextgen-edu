const counsellors = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@nextgen.com",
    phone: "9876543210",
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@nextgen.com",
    phone: "9876543211",
  },
  {
    id: 3,
    name: "Ankit Singh",
    email: "ankit@nextgen.com",
    phone: "9876543212",
  },
];

export default function Counsellors() {
  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-3xl font-bold">
          Counsellors
        </h1>

        <button
          className="
          bg-cyan-500
          px-5
          py-3
          rounded-xl
          "
        >
          Add Counsellor
        </button>

      </div>

      <div className="glass rounded-3xl p-6">

        <table className="w-full">

          <thead>

            <tr className="text-left border-b border-white/10">

              <th className="py-4">
                Name
              </th>

              <th>
                Email
              </th>

              <th>
                Phone
              </th>

              <th>
                Action
              </th>

            </tr>

          </thead>

          <tbody>

            {counsellors.map(
              (person) => (
                <tr
                  key={person.id}
                  className="
                  border-b
                  border-white/5
                  "
                >
                  <td className="py-4">
                    {person.name}
                  </td>

                  <td>
                    {person.email}
                  </td>

                  <td>
                    {person.phone}
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