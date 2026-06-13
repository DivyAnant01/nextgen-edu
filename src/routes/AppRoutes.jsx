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
// import Admission from "../pages/Admission";

// admin
import AdminLayout from "../admin/AdminLayout";
import Dashboard from "../admin/Dashboard";
import Leads from "../admin/Leads";
import Counsellors from "../admin/Counsellors";
import UniversitiesAdmin from "../admin/Universities";
import CoursesAdmin from "../admin/Courses";
import BlogsAdmin from "../admin/Blogs";
import SettingsAdmin from "../admin/Settings";

import AdminLogin from "../admin/AdminLogin";

export default function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Home */}
          <Route index element={<Home />} />

          {/* Static Pages */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />

          {/* Universities */}
          <Route
            path="universities"
            element={<Universities />}
          />
          <Route
            path="universities/:slug"
            element={<UniversityDetails />}
          />

          {/* Courses */}
          <Route
            path="courses"
            element={<Courses />}
          />
          <Route
            path="courses/:slug"
            element={<CourseDetails />}
          />

          {/* Scholarships */}
          <Route
            path="scholarships"
            element={<Scholarships />}
          />

          {/* Admission */}
{/* <Route
  path="admission"
  element={<Admission />}
/> */}

          {/* Reviews */}
          <Route
            path="reviews"
            element={<Reviews />}
          />

          <Route
            path="compare"
            element={<CompareUniversities />}
/>
        </Route>


        {/* admin */}

        <Route
  path="/admin/login"
  element={<AdminLogin />}
/>

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
    path="counsellors"
    element={<Counsellors />}
  />

  <Route
    path="universities"
    element={<UniversitiesAdmin />}
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
      </Routes>
    </BrowserRouter>
  );
}