import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import StatsCards from "../components/dashboard/StatsCards";
import ProfileCompletion from "../components/dashboard/ProfileCompletion";
import RecentActivity from "../components/dashboard/RecentActivity";
import Notifications from "../components/dashboard/Notifications";

import { useAuth } from "../context/AuthContext";

export default function Dashboard() {
  const { user } = useAuth();

  return (
    <section className="pt-32 pb-20 min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-4 gap-8">

          <DashboardSidebar />

          <div className="lg:col-span-3">

            <h1 className="text-5xl font-bold mb-10">
              Welcome {user?.name}
            </h1>

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