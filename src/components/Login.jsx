import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";


const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn, signInWithGitHub } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      navigate("/home");
    } catch (err) {
      setError(err.message);
    }
  };

  const gitHubSignIn = async(e) => {
    e.preventDefault();
    try {
      await signInWithGitHub();
      navigate("/home");
    } catch (error) {
          setError(error.message)
    }};
    

  return (
    <>
      <div className="p-4 box">
        <h2>
          {" "}
          <center>FERRETERIA "DON RAUL"</center>{" "}
        </h2>
        <h5 className="mb-3">Inicio de Sesion</h5>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit} className="mb-3">
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              type="email"
              placeholder="Direccion de correo"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group>
            <Form.Control
              type="password"
              placeholder="Contraseña"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">
              Iniciar Sesion
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton
            className="g-btn"
            type="dark"
            onClick={handleGoogleSignIn}
          />
        </div>
        <div>
          <Button className="mt-5" onClick={gitHubSignIn} type="button">
            Sign in with GitHub
          </Button>
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        No tengo cuenta <Link to="/signup">Registrarse</Link>
      </div>
    </>
  );
};

export default Login;
