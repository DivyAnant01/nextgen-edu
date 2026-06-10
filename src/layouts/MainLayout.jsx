import { Outlet } from "react-router-dom";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import FloatingAdmission from "../components/common/FloatingAdmission";

export default function MainLayout() {
  return (
    <>
      <Navbar />

      <Outlet />

      <FloatingAdmission />

      <Footer />
    </>
  );
}