import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Layaout from "./pages/layout/Layaout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Formation from "./pages/formation/Formation";
import MyProject from "./pages/myProject/MyProject";
import Services from "./pages/services/Services";
import MentionsLegales from "./pages/mentionsLegales/MentionsLegales";
import PolitiqueConfidentialite from "./pages/politiqueConfidentialite/PolitiqueConfidentialite";
import { ContactFormProvider } from "./context/ContactFormProvider";

function App() {
  return (
    <HelmetProvider>
      <ContactFormProvider>
        <Router>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/" element={<Layaout />}>
              <Route path="about" element={<About />} />
              <Route path="formation" element={<Formation />} />
              <Route path="myproject" element={<MyProject />} />
              <Route path="services" element={<Services />} />
              <Route path="mentions-legales" element={<MentionsLegales />} />
              <Route path="politique-confidentialite" element={<PolitiqueConfidentialite />} />
            </Route>
          </Routes>
        </Router>
      </ContactFormProvider>
    </HelmetProvider>
  );
}

export default App;
