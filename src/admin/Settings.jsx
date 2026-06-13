export default function SettingsAdmin() {
  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-8">
        Settings
      </h1>

      <div className="grid lg:grid-cols-2 gap-6">

        {/* Website Settings */}

        <div
          className="
          glass
          p-6
          rounded-3xl
          "
        >
          <h2
            className="
            text-2xl
            font-semibold
            mb-6
            "
          >
            Website Settings
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Website Name"
              defaultValue="NextGenEdu"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <input
              type="email"
              placeholder="Support Email"
              defaultValue="info@nextgenedu.com"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <input
              type="text"
              placeholder="Support Phone"
              defaultValue="+91 9876543210"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <button
              className="
              bg-cyan-500
              px-6
              py-3
              rounded-xl
              "
            >
              Save Settings
            </button>

          </div>
        </div>

        {/* Admin Settings */}

        <div
          className="
          glass
          p-6
          rounded-3xl
          "
        >
          <h2
            className="
            text-2xl
            font-semibold
            mb-6
            "
          >
            Admin Settings
          </h2>

          <div className="space-y-4">

            <input
              type="text"
              placeholder="Admin Name"
              defaultValue="Super Admin"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <input
              type="email"
              placeholder="Admin Email"
              defaultValue="admin@nextgen.com"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <input
              type="password"
              placeholder="New Password"
              className="
              w-full
              p-4
              rounded-xl
              bg-black/20
              "
            />

            <button
              className="
              bg-green-500
              px-6
              py-3
              rounded-xl
              "
            >
              Update Admin
            </button>

          </div>
        </div>

      </div>

    </div>
  );
}