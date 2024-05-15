import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageMegasena from "../pages/PageMegasena";
import PageLoto from "../pages/PageLotoFacil";
import { Header } from "../components/Header/Header";
import PageTimemania from "../pages/PageTimemania";

export function AppRoutes() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/timemania" element={<PageTimemania />} />
        <Route path="/mega-sena" element={<PageMegasena />} />
        <Route path="/quina" element={<PageLoto />} />
      </Routes>
    </Router>
  );
}
