import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "../src/App.css";
import Header from "./components/Header";
import MainContent from "./pages/MainContent";
import Footer from "./components/Footer";
import About from "../src/pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";

function App() {
  return (
    <Router>
      <div>
        {/* Her sayfanın üst kısmında bulunan HEADER componentidir */}
        <Header />
        <Routes>
          {/* Uygulama başladığında '/' default olarak adresine gider */}
          <Route path="/" exact element={<MainContent />} />

          <Route path="/About" element={<About />} />
          <Route path="/Services" element={<Services />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Blog" element={<Blog />} />
        </Routes>
        {/* Her sayfanın alt kısmında bulunan FOOTER componentidir */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
