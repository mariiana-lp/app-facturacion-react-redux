import React,{useState} from "react";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { Link, useNavigate } from "react-router-dom";
import { useUserAuth } from "../context/UserAuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn } = useUserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try{
      await logIn(email, password);
      navigate("/home");
    } catch(err){
      setError(err.message);
    }
  };
  return (
    <>
      <div className="p-4 box">
        <h2 className="mb-3">Inicio de Sesion</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Direccion de correo"
            onChange={(e) => setEmail(e.target.value)} />
          </Form.Group>

          <Form.Group>
            <Form.Control type="password" placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}  />
          </Form.Group>

          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">
              Iniciar Sesion
            </Button>
          </div>
        </Form>
        <hr />
        <div>
          <GoogleButton className="g-btn" type="dark" />
        </div>
      </div>
      <div className="p-4 box mt-3 text-center">
        No tengo cuenta <Link to="/signup">Registrarse</Link>
      </div>
    </>
  );
};

export default Login;
