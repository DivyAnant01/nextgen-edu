import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import MainLayout from "../layouts/MainLayout";

/* Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Universities from "../pages/Universities";
import UniversityDetails from "../pages/UniversityDetails";

import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";

import Scholarships from "../pages/Scholarships";
import Reviews from "../pages/Reviews";
import CompareUniversities from "../pages/CompareUniversities";

/* Admin */
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/Dashboard";
import Leads from "../admin/Leads";
import Counsellors from "../admin/Counsellors";
import UniversitiesAdmin from "../admin/Universities";
import CoursesAdmin from "../admin/Courses";
import BlogsAdmin from "../admin/Blogs";
import SettingsAdmin from "../admin/Settings";

import AdminLogin from "../admin/AdminLogin";
import LeadDetails from "../admin/LeadDetails";
import CounsellorProfile from "../admin/CounsellorProfile";

/* Counsellor */
import CounsellorLogin from "../counsellor/CounsellorLogin";
import CounsellorLayout from "../counsellor/CounsellorLayout";
import CounsellorDashboard from "../counsellor/CounsellorDashboard";
import MyLeads from "../counsellor/MyLeads";
import Profile from "../counsellor/Profile";

export default function AppRoutes() {
  return (
    <BrowserRouter>

      <Routes>

        {/* Website */}

        <Route
          path="/"
          element={<MainLayout />}
        >
          <Route
            index
            element={<Home />}
          />

          <Route
            path="about"
            element={<About />}
          />

          <Route
            path="contact"
            element={<Contact />}
          />

          <Route
            path="universities"
            element={<Universities />}
          />

          <Route
            path="universities/:slug"
            element={
              <UniversityDetails />
            }
          />

          <Route
            path="courses"
            element={<Courses />}
          />

          <Route
            path="courses/:slug"
            element={
              <CourseDetails />
            }
          />

          <Route
            path="scholarships"
            element={<Scholarships />}
          />

          <Route
            path="reviews"
            element={<Reviews />}
          />

          <Route
            path="compare"
            element={
              <CompareUniversities />
            }
          />
        </Route>

        {/* Admin Login */}

        <Route
          path="/admin/login"
          element={<AdminLogin />}
        />

        {/* Admin Panel */}

        <Route
          path="/admin"
          element={<AdminLayout />}
        >
          <Route
            index
            element={<Dashboard />}
          />

          <Route
            path="leads"
            element={<Leads />}
          />

          <Route
            path="leads/:id"
            element={<LeadDetails />}
          />

          <Route
            path="counsellors"
            element={<Counsellors />}
          />

          <Route
            path="counsellor/:id"
            element={
              <CounsellorProfile />
            }
          />

          <Route
            path="universities"
            element={
              <UniversitiesAdmin />
            }
          />

          <Route
            path="courses"
            element={<CoursesAdmin />}
          />

          <Route
            path="blogs"
            element={<BlogsAdmin />}
          />

          <Route
            path="settings"
            element={<SettingsAdmin />}
          />
        </Route>

        {/* Counsellor Login */}

        <Route
          path="/counsellor/login"
          element={
            <CounsellorLogin />
          }
        />

        {/* Counsellor Panel */}

        <Route
          path="/counsellor"
          element={
            <CounsellorLayout />
          }
        >
          <Route
            index
            element={
              <CounsellorDashboard />
            }
          />

          <Route
            path="leads"
            element={<MyLeads />}
          />

          <Route
            path="profile"
            element={<Profile />}
          />

          <Route
            path="leads/:id"
            element={<LeadDetails />}
          />
        </Route>

      </Routes>

    </BrowserRouter>
  );
}


