import { BrowserRouter as Router, Routes, Route, useNavigate, useLocation, Link } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";
import Layout from "../layouts/Layout";
import ScrollToTop from "../components/ScrollToTop";
import { useAuth } from "../utils/idb";
import { useEffect } from "react";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/home/Home";
import AboutUs from "../pages/AboutUs";
import Services from "../pages/Services";
import Course from "../pages/Course";
import ContactUs from "../pages/ContactUs";
import SplashCursor from "../components/SplashCursor";
import Terms from "../pages/Terms";
import PrivacyPolicy from "../pages/PrivacyPolicy";


export default function AppRouter() {
  return (
    <Router>
      <ScrollToTop />
      <SplashCursor />
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<Services />} />
            <Route path="/course" element={<Course />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          </Route>
        </Route>
        
      </Routes>
    </Router>
  );
}
