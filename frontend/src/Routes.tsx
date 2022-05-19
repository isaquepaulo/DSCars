import Navbar from "components/Navbar";
import Home from "pages/Home";
import Catalogo from "pages/Catalogo";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const Rota = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" caseSensitive={false} element={<Home />} />
        <Route path="/catalogo" caseSensitive={false} element={<Catalogo />} />
      </Routes>
    </Router>
  );
};

export default Rota;
