import { useEffect, useState } from "react";

export default function CounsellorDashboard() {

  const [stats, setStats] =
    useState({
      total: 0,
      interested: 0,
      followUp: 0,
      converted: 0,
    });

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

    const myLeads =
      leads.filter(
        (lead) =>
          lead.assignedTo ===
          counsellor?.name
      );

    setStats({
      total: myLeads.length,

      interested:
        myLeads.filter(
          (lead) =>
            lead.status ===
            "Interested"
        ).length,

      followUp:
        myLeads.filter(
          (lead) =>
            lead.status ===
            "Follow Up"
        ).length,

      converted:
        myLeads.filter(
          (lead) =>
            lead.status ===
            "Converted"
        ).length,
    });

  }, []);

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Counsellor Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Assigned Leads
          </h3>

          <p className="text-4xl font-bold mt-2">
            {stats.total}
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Interested
          </h3>

          <p className="text-4xl font-bold mt-2 text-cyan-400">
            {stats.interested}
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Follow Ups
          </h3>

          <p className="text-4xl font-bold mt-2 text-yellow-400">
            {stats.followUp}
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Converted
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-400">
            {stats.converted}
          </p>
        </div>

      </div>

      <div className="glass p-8 rounded-3xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Performance Summary
        </h2>

        <p className="text-gray-400">
          Track your assigned leads,
          follow-ups and conversions
          from here.
        </p>

      </div>

    </div>
  );
}