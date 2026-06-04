import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatsCards from "../components/dashboard/StatsCards";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";
import RecentActivity from "../components/dashboard/RecentActivity";
import Notifications from "../components/dashboard/Notifications";

import { useApplications } from "../context/ApplicationContext";
import { useWishlist } from "../context/WishlistContext";
import { useCompare } from "../context/CompareContext";
import { useAuth } from "../context/AuthContext";

import ApplicationChart from "../components/dashboard/ApplicationChart";
import CompareProgress from "../components/dashboard/CompareProgress";

export default function Dashboard() {
  const { applications } =
    useApplications();

  const { wishlist } =
    useWishlist();

  const { compareList } =
    useCompare();

  const { user } =
    useAuth();

  const approved =
    applications.filter(
      (a) =>
        a.status === "Approved"
    ).length;

  const pending =
    applications.filter(
      (a) =>
        a.status !== "Approved"
    ).length;

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-8">

          {/* Sidebar */}
          <DashboardSidebar />

          {/* Main Content */}
          <div className="lg:col-span-3">

            <h1 className="text-5xl font-bold mb-4">
              Welcome {user?.name}
            </h1>

            <p className="text-gray-400 mb-10">
              Track applications,
              wishlist and university
              comparisons from one place.
            </p>

            {/* Stats */}
            <div className="grid md:grid-cols-5 gap-6 mb-10">

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-gray-400">
                  Applications
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {applications.length}
                </h2>
              </div>

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-gray-400">
                  Approved
                </h3>

                <h2 className="text-4xl font-bold mt-2 text-green-400">
                  {approved}
                </h2>
              </div>

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-gray-400">
                  Pending
                </h3>

                <h2 className="text-4xl font-bold mt-2 text-yellow-400">
                  {pending}
                </h2>
              </div>

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-gray-400">
                  Wishlist
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {wishlist.length}
                </h2>
              </div>

              <div className="glass p-6 rounded-3xl">
                <h3 className="text-gray-400">
                  Compare
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {compareList.length}
                </h2>
              </div>

            </div>

            {/* Admission Progress */}
            <div className="glass p-8 rounded-3xl mb-8">

              <div className="flex justify-between mb-4">
                <h2 className="text-2xl font-bold">
                  Admission Progress
                </h2>

                <span>
                  75%
                </span>
              </div>

              <div className="w-full bg-white/10 h-4 rounded-full overflow-hidden">

                <div
                  className="
                  h-full
                  bg-cyan-500
                  rounded-full
                  "
                  style={{
                    width: "75%",
                  }}
                />

              </div>

            </div>

            {/* Existing Stats */}
            <StatsCards />

            {/* Widgets */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <ProfileCompletion />
              <Notifications />
            </div>

            {/* Compare Progress */}
            <div className="mt-8">
              <CompareProgress />
            </div>

            {/* Analytics Chart */}
            <div className="mt-8">
              <ApplicationChart />
            </div>

            {/* Recent Activity */}
            <div className="mt-8">
              <RecentActivity />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}