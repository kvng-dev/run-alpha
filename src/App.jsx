import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Strategies from "./pages/Strategies";
import GetInTouch from "./pages/ContactUs";
import Applayout from "./ui/Applayout";
import Team from "./pages/Team";
import PageNotFound from "./pages/PageNotFound";
import AboutUs from "./pages/Aboutus";
import Disclaimer from "./pages/Disclaimer";
import PrivacyPolicyPage from "./pages/PrivacyPolicy";
import HedgeFund from "./pages/HedgeFund";

function App() {
  return (
    <Routes>
      <Route element={<Applayout />}>
        {/* Main Routes - keeping your original URLs */}
        <Route index element={<Home />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="services" element={<Strategies />} />
        <Route path="team" element={<Team />} />
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
        <Route path="aboutus/" element={<Navigate to="/aboutus" replace />} />
        <Route path="services/" element={<Navigate to="/services" replace />} />
        <Route path="contact/" element={<Navigate to="/contact" replace />} />
        <Route path="team/" element={<Navigate to="/team" replace />} />

        {/* 404 - Must be last */}
        <Route path="*" element={<PageNotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
