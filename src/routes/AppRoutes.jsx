import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import UniversityDetails from "../pages/UniversityDetails";

import MainLayout from "../layouts/MainLayout";
import ProtectedRoute from "./ProtectedRoute";
import Admission from "../pages/Admission";

/* Pages */
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";

import Universities from "../pages/Universities";
// import UniversityDetails from "../pages/UniversityDetails";

import Courses from "../pages/Courses";
import CourseDetails from "../pages/CourseDetails";

import Wishlist from "../pages/Wishlist";
import CompareUniversities from "../pages/CompareUniversities";

import Login from "../pages/Login";
import Register from "../pages/Register";
import ForgotPassword from "../pages/ForgotPassword";
import Applications from "../pages/Applications";

import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import MyApplications from "../pages/MyApplications";
import Scholarships
from "../pages/Scholarships";

import Reviews
from "../pages/Reviews";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<Home />} />

          <Route
  path="applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>

          {/* Static Pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Authentication */}
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route
            path="forgot-password"
            element={<ForgotPassword />}
          />

          {/* Dashboard */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />

          {/* Profile */}
          <Route
            path="profile"
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />

          {/* My Applications */}
          <Route
            path="applications"
            element={
              <ProtectedRoute>
                <MyApplications />
              </ProtectedRoute>
            }
          />

          {/* Wishlist */}
          <Route path="wishlist" element={<Wishlist />} />

          {/* Compare Universities */}
          <Route
            path="compare"
            element={<CompareUniversities />}
          />

          {/* Universities */}
          <Route
            path="universities"
            element={<Universities />}
          />
          <Route
            path="universities/:slug"
            element={<UniversityDetails />}
          />

          <Route
  path="/university/:slug"
  element={<UniversityDetails />}
/>

          <Route
  path="applications"
  element={
    <ProtectedRoute>
      <Applications />
    </ProtectedRoute>
  }
/>

          {/* Courses */}
          <Route path="courses" element={<Courses />} />
          <Route
            path="courses/:slug"
            element={<CourseDetails />}
          />

          <Route
             path="scholarships"
             element={<Scholarships />}
          />

          <Route
  path="admission"
  element={<Admission />}
/>

          <Route
  path="reviews"
  element={<Reviews />}
/>

        </Route>
      </Routes>
    </BrowserRouter>
  );
}