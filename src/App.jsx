import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layaout from "./pages/layout/Layaout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import CV from "./pages/cv/CV";
import Menu from "./pages/menu/Menu";
import MyProject from "./pages/myproject/MyProject";
import Myskills from "./pages/myskills/Myskills";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layaout />}>
            <Route path="about" element={<About />} />
            <Route path="cv" element={<CV />} />
            <Route path="menu" element={<Menu />} />
            <Route path="myproject" element={<MyProject />} />
            <Route path="myskills" element={<Myskills />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
