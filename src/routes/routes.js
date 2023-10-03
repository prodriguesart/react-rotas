import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from "./Home";
import Sobre from "./Sobre";
import Usuario from "./Usuario";
import Body from "../components/Body";

const RoutesRoot = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Body />} path="/">
          <Route element={<Home />} path="/" exact />
          <Route element={<Sobre />} path="/sobre" />
          <Route element={<Usuario />} path="/usuario" />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RoutesRoot;
