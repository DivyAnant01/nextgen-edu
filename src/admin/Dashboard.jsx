import { useEffect, useState } from "react";

export default function Dashboard() {
  const [stats, setStats] = useState({
    totalLeads: 0,
    newLeads: 0,
    contacted: 0,
    interested: 0,
    followUp: 0,
    converted: 0,
    closed: 0,
    conversionRate: 0,
  });

  const [recentLeads, setRecentLeads] =
    useState([]);

  useEffect(() => {
    const savedLeads =
      JSON.parse(
        localStorage.getItem("leads")
      ) || [];

    const totalLeads =
      savedLeads.length;

    const converted =
      savedLeads.filter(
        (lead) =>
          lead.status ===
          "Converted"
      ).length;

    setStats({
      totalLeads,

      newLeads:
        savedLeads.filter(
          (lead) =>
            lead.status === "New"
        ).length,

      contacted:
        savedLeads.filter(
          (lead) =>
            lead.status ===
            "Contacted"
        ).length,

      interested:
        savedLeads.filter(
          (lead) =>
            lead.status ===
            "Interested"
        ).length,

      followUp:
        savedLeads.filter(
          (lead) =>
            lead.status ===
            "Follow Up"
        ).length,

      converted,

      closed:
        savedLeads.filter(
          (lead) =>
            lead.status ===
            "Closed"
        ).length,

      conversionRate:
        totalLeads > 0
          ? Math.round(
              (converted /
                totalLeads) *
                100
            )
          : 0,
    });

    setRecentLeads(
      [...savedLeads]
        .reverse()
        .slice(0, 5)
    );
  }, []);

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Dashboard
      </h1>

      <div
        className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        "
      >

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Total Leads
          </p>

          <h2 className="text-4xl font-bold mt-2">
            {stats.totalLeads}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            New Leads
          </p>

          <h2 className="text-4xl font-bold mt-2 text-yellow-400">
            {stats.newLeads}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Contacted
          </p>

          <h2 className="text-4xl font-bold mt-2 text-blue-400">
            {stats.contacted}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Interested
          </p>

          <h2 className="text-4xl font-bold mt-2 text-cyan-400">
            {stats.interested}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Follow Up
          </p>

          <h2 className="text-4xl font-bold mt-2 text-orange-400">
            {stats.followUp}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Converted
          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-400">
            {stats.converted}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Closed
          </p>

          <h2 className="text-4xl font-bold mt-2 text-red-400">
            {stats.closed}
          </h2>
        </div>

        <div className="glass p-6 rounded-3xl">
          <p className="text-gray-400">
            Conversion Rate
          </p>

          <h2 className="text-4xl font-bold mt-2 text-green-500">
            {stats.conversionRate}%
          </h2>
        </div>

      </div>

      {/* Recent Leads */}

      <div className="glass p-8 rounded-3xl mt-8">

        <h2 className="text-2xl font-bold mb-6">
          Recent Leads
        </h2>

        <div className="space-y-4">

          {recentLeads.length ===
          0 ? (
            <p className="text-gray-400">
              No Leads Found
            </p>
          ) : (
            recentLeads.map(
              (lead) => (
                <div
                  key={lead.id}
                  className="
                  flex
                  justify-between
                  items-center
                  border-b
                  border-white/10
                  pb-3
                  "
                >

                  <div>

                    <h3 className="font-semibold">
                      {lead.name}
                    </h3>

                    <p className="text-sm opacity-70">
                      {lead.course}
                    </p>

                  </div>

                  <span
                    className="
                    px-3
                    py-1
                    rounded-lg
                    bg-cyan-500
                    text-white
                    "
                  >
                    {lead.status}
                  </span>

                </div>
              )
            )
          )}

        </div>

      </div>

    </div>
  );
}