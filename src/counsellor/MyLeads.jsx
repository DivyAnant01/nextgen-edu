import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function MyLeads() {

  const [myLeads, setMyLeads] =
    useState([]);

  useEffect(() => {

    const counsellor =
      JSON.parse(
        localStorage.getItem(
          "counsellor"
        )
      );

    const leads =
      JSON.parse(
        localStorage.getItem(
          "leads"
        )
      ) || [];

    const assignedLeads =
      leads.filter(
        (lead) =>
          lead.assignedTo ===
          counsellor?.name
      );

    setMyLeads(
      assignedLeads
    );

  }, []);

  return (
    <div className="p-8">

      <div className="flex justify-between items-center mb-8">

        <h1 className="text-4xl font-bold">
          My Leads
        </h1>

        <span
          className="
          bg-cyan-500
          px-4
          py-2
          rounded-xl
          "
        >
          {myLeads.length} Leads
        </span>

      </div>

      <div
        className="
        glass
        rounded-3xl
        p-6
        overflow-x-auto
        "
      >

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                Name
              </th>

              <th className="text-left">
                Phone
              </th>

              <th className="text-left">
                Course
              </th>

              <th className="text-left">
                Status
              </th>

              <th className="text-left">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {myLeads.length === 0 ? (

              <tr>

                <td
                  colSpan="5"
                  className="
                  py-10
                  text-center
                  text-gray-400
                  "
                >
                  No Leads Assigned
                </td>

              </tr>

            ) : (

              myLeads.map((lead) => (

                <tr
                  key={lead.id}
                  className="
                  border-b
                  border-white/5
                  "
                >

                  <td className="py-4">
                    {lead.name}
                  </td>

                  <td>
                    {lead.phone}
                  </td>

                  <td>
                    {lead.course}
                  </td>

                  <td>

                    <span
                      className="
                      px-3
                      py-1
                      rounded-full
                      bg-cyan-500/20
                      "
                    >
                      {lead.status}
                    </span>

                  </td>

                  <td>

                    <Link
                      to={`/counsellor/leads/${lead.id}`}
                      className="
                      bg-cyan-500
                      px-4
                      py-2
                      rounded-lg
                      hover:bg-cyan-600
                      transition
                      "
                    >
                      View
                    </Link>

                  </td>

                </tr>

              ))

            )}

          </tbody>

        </table>

      </div>

    </div>
  );
}