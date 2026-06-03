import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatsCards from "../components/dashboard/StatsCards";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";
import RecentActivity from "../components/dashboard/RecentActivity";
import Notifications from "../components/dashboard/Notifications";

import {
  useApplications,
} from "../context/ApplicationContext";

import {
  useWishlist,
} from "../context/WishlistContext";

import {
  useCompare,
} from "../context/CompareContext";

import {
  useAuth,
} from "../context/AuthContext";

export default function Dashboard() {

  const {
    applications,
  } = useApplications();

  const {
    wishlist,
  } = useWishlist();

  const {
    compareList,
  } = useCompare();

  const {
    user,
  } = useAuth();

  return (
    <section className="pt-32 pb-20 min-h-screen">

      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3">

            <h1 className="text-5xl font-bold mb-10">
              Welcome {user?.name}
            </h1>

            {/* Dashboard Counters */}

            <div className="grid md:grid-cols-3 gap-6 mb-10">

              <div
                className="
                glass
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-gray-400">
                  Applications
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {applications.length}
                </h2>
              </div>

              <div
                className="
                glass
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-gray-400">
                  Wishlist
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {wishlist.length}
                </h2>
              </div>

              <div
                className="
                glass
                p-6
                rounded-3xl
                "
              >
                <h3 className="text-gray-400">
                  Compare
                </h3>

                <h2 className="text-4xl font-bold mt-2">
                  {compareList.length}
                </h2>
              </div>

            </div>

            {/* Existing Stats Cards */}

            <StatsCards />

            <div className="grid md:grid-cols-2 gap-6 mt-8">

              <ProfileCompletion />

              <Notifications />

            </div>

            <div className="mt-8">

              <RecentActivity />

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}