export default function Dashboard() {
  return (
    <div className="p-8">

      <h1 className="text-4xl font-bold mb-8">
        Admin Dashboard
      </h1>

      <div className="grid md:grid-cols-4 gap-6">

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Total Leads
          </h3>

          <p className="text-4xl font-bold mt-2">
            124
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Universities
          </h3>

          <p className="text-4xl font-bold mt-2">
            32
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Courses
          </h3>

          <p className="text-4xl font-bold mt-2">
            89
          </p>
        </div>

        <div className="glass p-6 rounded-3xl">
          <h3 className="text-gray-400">
            Counsellors
          </h3>

          <p className="text-4xl font-bold mt-2">
            6
          </p>
        </div>

      </div>

      <div className="glass p-8 rounded-3xl mt-8">

        <h2 className="text-2xl font-bold mb-4">
          Recent Activity
        </h2>

        <ul className="space-y-3">

          <li>
            New Lead Submitted - MBA
          </li>

          <li>
            Rahul assigned a lead
          </li>

          <li>
            New University Added
          </li>

          <li>
            Blog Published
          </li>

        </ul>

      </div>

    </div>
  );
}