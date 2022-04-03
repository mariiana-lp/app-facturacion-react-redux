import React, { useState } from "react";

import { Container, Row, Col } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import Home from "./components/Home";
import Signup from "./components/Signup";
import { UserAuthContextProvider } from "./context/UserAuthContext";
import ProtectedtRoute from "./components/ProtectedtRoute";
import Clientes from "./components/Clientes";
import Proveedores from "./components/Proveedores";
import Inventario from "./components/Inventario";
import HistoricoVentas from "./components/HistoricoVentas";
import NuevoCliente from "./components/NuevoCliente";
import NuevoProveedor from "./components/NuevoProveedor";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
            <Routes>
              <Route path="" element={<Login />} />
              <Route path="signup" element={<Signup />} />
              <Route
                path="home"
                element={
                  <ProtectedtRoute>
                    <Home />
                  </ProtectedtRoute>
                }
              />
              <Route
                path="clientes"
                element={
                  <ProtectedtRoute>
                    <Clientes />
                  </ProtectedtRoute>
                }
              />
               <Route
                path="proveedores"
                element={
                  <ProtectedtRoute>
                    <Proveedores />
                  </ProtectedtRoute>
                }
              />
              <Route
                path="inventario"
                element={
                  <ProtectedtRoute>
                    <Inventario />
                  </ProtectedtRoute>
                }
              />
              <Route
                path="ventas"
                element={
                  <ProtectedtRoute>
                    <HistoricoVentas />
                  </ProtectedtRoute>
                }
              />
              <Route
                path="nuevoCliente"
                element={
                  <ProtectedtRoute>
                    <NuevoCliente />
                  </ProtectedtRoute>
                }
              />
              <Route
                path="nuevoProveedor"
                element={
                  <ProtectedtRoute>
                    <NuevoProveedor/>
                  </ProtectedtRoute>
                }
              />
            </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  );
}
export default App;
