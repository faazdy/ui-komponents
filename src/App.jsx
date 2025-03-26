import React from "react";
import "./styles/main.scss"
import "./styles/cards.scss"
import "./styles/shadows.scss"
import "./styles/buttons.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Shadows from "./pages/shadows/ShadowsList";
import ButtonList from "./pages/buttons/ButtonList";
import CardList from "./pages/cards/CardList";
import Notfound from "./pages/NotFound/Notfound";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

function App() {
  return (
    <>
      <Router >
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shadows" element={<Shadows />} />
          <Route path="/buttons" element={<ButtonList />} />
          <Route path="/cards" element={<CardList />} />
          <Route path="/*" element={<Notfound />} />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
