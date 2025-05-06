import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Layaout from "./pages/layout/Layaout";
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Formation from "./pages/formation/Formation";
import Menu from "./pages/menu/Menu";
import MyProject from "./pages/myProject/myProject";

function App() {
  return (
    <>
      <Router basename="/Portfolio/">
        <Routes>
          <Route index element={<Home />} />
          <Route path="/" element={<Layaout />}>
            <Route path="about" element={<About />} />
            <Route path="formation" element={<Formation />} />
            <Route path="menu" element={<Menu />} />
            <Route path="myproject" element={<MyProject />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
