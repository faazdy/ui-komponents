import React from "react";
import "./styles/main.scss"
import "./styles/cards.scss"
import "./styles/shadows.scss"
import "./styles/buttons.scss"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/Navbar";
import Shadows from "./pages/shadows/Shadows";
import ButtonList from "./pages/buttons/ButtonList";
import CardList from "./pages/cards/CardList";


function App() {
  return (
    <>
      <Router >
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shadows" element={<Shadows />} />
          <Route path="/buttons" element={<ButtonList />} />
          <Route path="/cards" element={<CardList />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
