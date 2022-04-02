import React from "react";
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Inicio de Sesion</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Direccion de correo" />
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" placeholder="Contraseña" />
          </Form.Group>

          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">Iniciar Sesion</Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            
          />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        No tengo cuenta <Link to="/signup">Registrarse</Link>
      </div>
    </>
  );
};

export default Login;
