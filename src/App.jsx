import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Login from './pages/Login';
import Cadastro from './pages/Cadastro';
import Batalhas from './pages/Batalhas'; 
import Loja from './pages/Loja'; 
import Perfil from './pages/Perfil'; 
import Decks from './pages/Decks'; 


function App() {
  return (
    <Router>
      <Routes>
        {/* Rota para login e cadastro*/}
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />

        {/* Rotas da navbar */}
        <Route path="/" element={<Navbar />}>
          <Route path="batalhas" element={<Batalhas />} />
          <Route path="perfil" element={<Perfil />} />
          <Route path="decks" element={<Decks />} />
          <Route path="loja" element={<Loja />} />
        </Route>

        {/* Redireciona para login por padrão */}
        <Route path="*" element={<Navigate to="/login" />} />
      </Routes>
    </Router>
  );
}

export default App
