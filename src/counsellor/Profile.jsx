import { useEffect, useState } from "react";

export default function Profile() {

  const [counsellor, setCounsellor] =
    useState(null);

  const [stats, setStats] =
    useState({
      assigned: 0,
      converted: 0,
      rate: 0,
    });

  useEffect(() => {

    const user =
      JSON.parse(
        localStorage.getItem(
          "counsellor"
        )
      );

    setCounsellor(user);

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
          user?.name
      );

    const converted =
      myLeads.filter(
        (lead) =>
          lead.status ===
          "Converted"
      ).length;

    const rate =
      myLeads.length > 0
        ? Math.round(
            (converted /
              myLeads.length) *
              100
          )
        : 0;

    setStats({
      assigned:
        myLeads.length,
      converted,
      rate,
    });

  }, []);

  if (!counsellor) {
    return (
      <div className="p-8">
        Loading...
      </div>
    );
  }

  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        My Profile
      </h1>

      <div className="grid lg:grid-cols-3 gap-6">

        {/* Profile Card */}

        <div
          className="
          glass
          p-8
          rounded-3xl
          "
        >

          <div className="flex flex-col items-center">

            <div
              className="
              w-24
              h-24
              rounded-full
              bg-cyan-500
              flex
              items-center
              justify-center
              text-3xl
              font-bold
              "
            >
              {counsellor?.name
                ?.charAt(0)
                ?.toUpperCase()}
            </div>

            <h2
              className="
              text-2xl
              font-bold
              mt-4
              "
            >
              {counsellor.name}
            </h2>

            <p className="text-gray-400">
              Admission Counsellor
            </p>

          </div>

        </div>

        {/* Details */}

        <div
          className="
          glass
          p-8
          rounded-3xl
          lg:col-span-2
          "
        >

          <h2
            className="
            text-2xl
            font-bold
            mb-6
            "
          >
            Personal Details
          </h2>

          <div className="grid md:grid-cols-2 gap-6">

            <div>

              <p className="text-gray-400">
                Full Name
              </p>

              <h3 className="text-xl font-semibold">
                {counsellor.name}
              </h3>

            </div>

            <div>

              <p className="text-gray-400">
                Email
              </p>

              <h3 className="text-xl font-semibold">
                {counsellor.email}
              </h3>

            </div>

            <div>

              <p className="text-gray-400">
                Role
              </p>

              <h3 className="text-xl font-semibold">
                Counsellor
              </h3>

            </div>

            <div>

              <p className="text-gray-400">
                Status
              </p>

              <h3 className="text-green-400 font-semibold">
                Active
              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* Stats */}

      <div
        className="
        grid
        md:grid-cols-3
        gap-6
        mt-8
        "
      >

        <div
          className="
          glass
          p-6
          rounded-3xl
          "
        >

          <h3 className="text-gray-400">
            Assigned Leads
          </h3>

          <p className="text-4xl font-bold mt-2">
            {stats.assigned}
          </p>

        </div>

        <div
          className="
          glass
          p-6
          rounded-3xl
          "
        >

          <h3 className="text-gray-400">
            Converted Leads
          </h3>

          <p className="text-4xl font-bold mt-2 text-green-400">
            {stats.converted}
          </p>

        </div>

        <div
          className="
          glass
          p-6
          rounded-3xl
          "
        >

          <h3 className="text-gray-400">
            Conversion Rate
          </h3>

          <p className="text-4xl font-bold mt-2 text-cyan-400">
            {stats.rate}%
          </p>

        </div>

      </div>

    </div>
  );
}