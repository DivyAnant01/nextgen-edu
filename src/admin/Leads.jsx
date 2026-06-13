import { useState } from "react";

const counsellors = [
  "Rahul",
  "Priya",
  "Ankit",
];

export default function Leads() {
  const [leads, setLeads] =
    useState([
      {
        id: 1,
        name: "Divy",
        phone: "9876543210",
        course: "MBA",
        status: "New",
        assignedTo: "",
      },
      {
        id: 2,
        name: "Anant",
        phone: "9999999999",
        course: "BCA",
        status: "Contacted",
        assignedTo: "Rahul",
      },
      
      {
        id: 3,
        name: "radhike",
        phone: "9876543210",
        course: "MBA",
        status: "New",
        assignedTo: "",
      },
      {
        id: 4,
        name: "kamal",
        phone: "9999999999",
        course: "BCA",
        status: "Contacted",
        assignedTo: "Rahul",
      },
      {
        id: 5,
        name: "jaker",
        phone: "9876543210",
        course: "MBA",
        status: "New",
        assignedTo: "",
      },
      {
        id: 5,
        name: "sonu singh",
        phone: "9999999999",
        course: "BCA",
        status: "Contacted",
        assignedTo: "Rahul",
      },
    ]);

  const assignLead = (
    leadId,
    counsellor
  ) => {
    setLeads(
      leads.map((lead) =>
        lead.id === leadId
          ? {
              ...lead,
              assignedTo:
                counsellor,
            }
          : lead
      )
    );
  };

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Leads Management
      </h1>

      <div className="glass p-6 rounded-3xl overflow-x-auto">

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="py-4 text-left">
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
                Assigned To
              </th>

            </tr>

          </thead>

          <tbody>

            {leads.map((lead) => (
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
                  {lead.status}
                </td>

                <td>

                  <select
                    value={
                      lead.assignedTo
                    }
                    onChange={(e) =>
                      assignLead(
                        lead.id,
                        e.target.value
                      )
                    }
                    className="
                    bg-black/20
                    p-2
                    rounded-lg
                    "
                  >
                    <option value="">
                      Select
                    </option>

                    {counsellors.map(
                      (
                        counsellor
                      ) => (
                        <option
                          key={
                            counsellor
                          }
                          value={
                            counsellor
                          }
                        >
                          {
                            counsellor
                          }
                        </option>
                      )
                    )}

                  </select>

                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}