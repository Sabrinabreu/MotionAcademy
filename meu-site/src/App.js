import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import Home from "./paginas/Home";
import Catalogo from "./paginas/Catalogo";
import Contato from "./paginas/Contato";
import Encomendas from "./paginas/Encomendas";
import PopupProduto from "./paginas/PopupProduto";

import "./App.css";

function App() {
    return (
      <Router>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/catalogo" element={<Catalogo />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/encomendas" element={<Encomendas />} />
            <Route path="/produto" element={<PopupProduto />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    );
  }

export default App;
