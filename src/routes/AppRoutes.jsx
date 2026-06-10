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
// import Admission from "../pages/Admission";

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
        </Route>
      </Routes>
    </BrowserRouter>
  );
}