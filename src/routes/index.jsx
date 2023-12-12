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
import { QuestsProvider } from "../contexts/QuestsContext";

function Routers() {
  const { signed } = useContext(UserContext);

  return (
    signed ? (
      <QuestsProvider>
        <Routes>
          <Route path="*" element={<Home />} />
          <Route path="/resgatar-pontos" element={<ResgatePontos />} />
          <Route path="/ranking" element={<Ranking />} />
          <Route path="/editar-perfil" element={<EditarPerfil />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/responder" element={<Quest />} />
        </Routes>
      </QuestsProvider>
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
