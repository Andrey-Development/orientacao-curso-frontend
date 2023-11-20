import React, { useContext, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserContext } from "../contexts/AuthContext";

import Home from '../pages/Home';
import LogIn from "../pages/Login";
import Cadastro from "../pages/Cadastro";

function Routers() {
  const { signed } = useContext(UserContext);

  return (
    <Router>
      <Routes>
        <Route path="/" element={ <Cadastro /> } />
        <Route path="/acessar" component={<LogIn />} />
        {signed ? (
          <Route path="/inicio" component={<Home />} />
        ) : (
          <></>
        )}
      </Routes>
    </Router>
  );
}

export default Routers;
