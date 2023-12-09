import React, { useContext, useState } from "react";
import { Routes, Route } from "react-router-dom";

import { UserContext } from "../contexts/AuthContext";

import Home from '../pages/Home';
import LogIn from "../pages/Login";
import Cadastro from "../pages/Cadastro";
import CadastroEndereco from "../pages/CadastroEndereco";
import Quest from "../pages/Quest";
import ResgatePontos from "../pages/ResgatePontos";
import Ranking from "../pages/Ranking";
import EditarPerfil from "../pages/EditarCadastro";
import Dashboard from "../pages/Dashboard";

function Routers() {
  const { signed } = useContext(UserContext);
  
  return (
      signed ? (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resgatar-pontos" element={<ResgatePontos />} />
          <Route path="/responder" element={<Quest />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resgatar-pontos" element={<ResgatePontos />} />
          <Route path="/cadastrar-endereco" element={<CadastroEndereco />} />
          <Route path="/cadastre-se" element={<Cadastro />} />
          <Route path="/acessar" element={<LogIn />} />
        </Routes>
      )
  );
}

export default Routers;
