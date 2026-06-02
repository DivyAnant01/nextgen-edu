import { useAuth } from "../context/AuthContext";

export default function Profile() {
  const { user } = useAuth();

  return (
    <section className="pt-32 pb-20">

      <div className="max-w-5xl mx-auto px-6">

        <div
          className="
          glass
          p-8
          rounded-3xl
          "
        >
          <h1 className="text-5xl font-bold mb-8">
            My Profile
          </h1>

          <div className="space-y-4 text-lg">

            <p>
              Name:
              {" "}
              {user?.name || "Guest User"}
            </p>

            <p>
              Email:
              {" "}
              {user?.email || "No Email"}
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}