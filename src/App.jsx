import {  Routes, Route, } from "react-router-dom"
import Home from "./pages/Home"
import Strategies from "./pages/Strategies"
import GetInTouch from "./pages/ContactUs"
import Applayout from "./ui/Applayout"
import Team from "./pages/Team"
import PageNotFound from "./pages/PageNotFound"
import AboutUs from "./pages/Aboutus"
import Disclaimer from "./pages/Disclaimer"
import PrivacyPolicyPage from "./pages/PrivacyPolicy"
import HedgeFund from "./pages/HedgeFund"

function App() {

  return (

      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="offerings" element={<Strategies />} />
          <Route path="team" element={<Team />} />
          <Route path="contact" element={<GetInTouch />} />
          <Route path="*" element={<PageNotFound />} />
          <Route path="disclaimer" element={<Disclaimer />} />
          <Route path="privacy-policy" element={<PrivacyPolicyPage />}
           />
           <Route path="hedge-fund" element={<HedgeFund />} />


        </Route>
      </Routes>
  )
}

export default App
