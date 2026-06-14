import { Eye, Pencil, Trash2 } from "lucide-react";
import { Link } from "react-router-dom";

const counsellors = [
  {
    id: 1,
    name: "Rahul Sharma",
    email: "rahul@nextgen.com",
    phone: "9876543210",
    assignedLeads: 15,
    converted: 6,
  },
  {
    id: 2,
    name: "Priya Verma",
    email: "priya@nextgen.com",
    phone: "9876543211",
    assignedLeads: 12,
    converted: 5,
  },
  {
    id: 3,
    name: "Ankit Singh",
    email: "ankit@nextgen.com",
    phone: "9876543212",
    assignedLeads: 18,
    converted: 9,
  },
];

export default function Counsellors() {
return ( <div className="p-8">

  <div className="flex justify-between items-center mb-8">

    <h1 className="text-3xl font-bold">
      Counsellors Management
    </h1>

    <button
      className="
      bg-cyan-500
      px-5
      py-3
      rounded-xl
      hover:bg-cyan-600
      transition
      "
    >
      Add Counsellor
    </button>

  </div>

  <div className="glass rounded-3xl p-6 overflow-x-auto">

    <table className="w-full">

      <thead>

        <tr className="border-b border-white/10">

          <th className="text-left py-4">
            Name
          </th>

          <th className="text-left">
            Email
          </th>

          <th className="text-left">
            Phone
          </th>

          <th className="text-left">
            Leads
          </th>

          <th className="text-left">
            Converted
          </th>

          <th className="text-left">
            Rate
          </th>

          <th className="text-left">
            Actions
          </th>

        </tr>

      </thead>

      <tbody>

        {counsellors.map((person) => {

          const rate = Math.round(
            (person.converted /
              person.assignedLeads) *
              100
          );

          return (
            <tr
              key={person.id}
              className="
              border-b
              border-white/5
              "
            >

              <td className="py-4 font-medium">
                {person.name}
              </td>

              <td className="max-w-[220px]">
  <a
    href={`mailto:${person.email}`}
    className="
    text-cyan-400
    hover:text-cyan-300
    truncate
    block
    "
  >
    {person.email}
  </a>
</td>

              <td>
                {person.phone}
              </td>

              <td>
                {person.assignedLeads}
              </td>

              <td>
                {person.converted}
              </td>

              <td>
                {rate}%
              </td>

              <td>

                <div className="flex gap-2">

                  <Link
  to={`/admin/counsellor/${person.id}`}
  className="
  p-2
  rounded-lg
  bg-cyan-500/20
  hover:bg-cyan-500/30
  "
>
  <Eye size={16} />
</Link>

                  <button
                    className="
                    p-2
                    rounded-lg
                    bg-yellow-500/20
                    hover:bg-yellow-500/30
                    "
                  >
                    <Pencil size={16} />
                  </button>

                  <button
                    className="
                    p-2
                    rounded-lg
                    bg-red-500/20
                    hover:bg-red-500/30
                    "
                  >
                    <Trash2 size={16} />
                  </button>

                </div>

              </td>

            </tr>
          );
        })}

      </tbody>

    </table>

  </div>

</div>

);
}
