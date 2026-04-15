import { lazy, Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Applayout from "./ui/Applayout";

// Lazy-load non-homepage routes to reduce initial bundle size
const Strategies = lazy(() => import("./pages/Strategies"));
const GetInTouch = lazy(() => import("./pages/ContactUs"));
const Team = lazy(() => import("./pages/Team"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AboutUs = lazy(() => import("./pages/Aboutus"));
const Disclaimer = lazy(() => import("./pages/Disclaimer"));
const PrivacyPolicyPage = lazy(() => import("./pages/PrivacyPolicy"));
const HedgeFund = lazy(() => import("./pages/HedgeFund"));
const TestSEO = lazy(() => import("./pages/TestSEO"));

function App() {
  return (
    <Suspense fallback={null}>
      <Routes>
        <Route element={<Applayout />}>
          {/* Main Routes - keeping your original URLs */}
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="services" element={<Strategies />} />
          <Route path="team" element={<Team />} />
          <Route path="/test-seo" element={<TestSEO />} />
          <Route path="contact" element={<GetInTouch />} />
          <Route path="hedge-fund" element={<HedgeFund />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />} />

          {/* Redirects for common variations */}
          <Route path="about" element={<Navigate to="/aboutus" replace />} />
          <Route path="about-us" element={<Navigate to="/aboutus" replace />} />
          <Route path="offerings" element={<Navigate to="/services" replace />} />
          <Route
            path="strategies"
            element={<Navigate to="/services" replace />}
          />
          <Route path="contactus" element={<Navigate to="/contact" replace />} />
          <Route path="contact-us" element={<Navigate to="/contact" replace />} />

          {/* Handle trailing slashes */}
          {/* <Route path="aboutus/" element={<Navigate to="/aboutus" replace />} />
          <Route path="services/" element={<Navigate to="/services" replace />} />
          <Route path="contact/" element={<Navigate to="/contact" replace />} />
          <Route path="team/" element={<Navigate to="/team" replace />} /> */}

          {/* 404 - Must be last */}
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
