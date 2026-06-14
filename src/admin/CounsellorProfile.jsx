import { useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function CounsellorProfile() {
  const { id } = useParams();

  const counsellor = {
    id,
    name: "Rahul Sharma",
    email: "rahul@nextgen.com",
    phone: "9876543210",
    assignedLeads: 15,
    converted: 6,
  };

  const leads = [
    {
      id: 1,
      name: "Divy Varshney",
      course: "MBA",
      status: "Interested",
    },
    {
      id: 2,
      name: "Anant Kumar",
      course: "BCA",
      status: "Follow Up",
    },
    {
      id: 3,
      name: "Kamal Singh",
      course: "MCA",
      status: "Converted",
    },
  ];

  return (
    <div className="p-8">

      <Link
        to="/admin/counsellors"
        className="
        inline-flex
        items-center
        gap-2
        mb-6
        text-cyan-400
        hover:text-cyan-300
        "
      >
        <ArrowLeft size={18} />
        Back
      </Link>

      <div className="glass rounded-3xl p-8 mb-8">

        <h1 className="text-4xl font-bold mb-6">
          {counsellor.name}
        </h1>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <p className="text-gray-400 mb-1">
              Email
            </p>

            <p className="text-lg">
              {counsellor.email}
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">
              Phone
            </p>

            <p className="text-lg">
              {counsellor.phone}
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">
              Assigned Leads
            </p>

            <p className="text-lg font-semibold">
              {counsellor.assignedLeads}
            </p>
          </div>

          <div>
            <p className="text-gray-400 mb-1">
              Converted Leads
            </p>

            <p className="text-lg font-semibold">
              {counsellor.converted}
            </p>
          </div>

        </div>

      </div>

      <div className="glass rounded-3xl p-8">

        <h2 className="text-2xl font-bold mb-6">
          Assigned Leads
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b border-white/10">

              <th className="text-left py-4">
                Student
              </th>

              <th className="text-left">
                Course
              </th>

              <th className="text-left">
                Status
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
                  {lead.course}
                </td>

                <td>
                  {lead.status}
                </td>

              </tr>
            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}