import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import Axios from "axios";

function NuevoProveedor() {
    const url = "http://localhost:8081/proveedores"
    const [data, setData] = useState({
        nombre:"",
        telefono:"",
        direccion:""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
            nombre: data.nombre,
            telefono: data.telefono,
            direccion: data.direccion
        }).then(res=>{
            console.log(res.data)
        })
    }
    function handle(e){
        const newData={...data}
        newData[e.target.id] = e.target.value
        setData(newData)
        console.log(newData)
    }
  return (
    <>
      <Navbar />
      <div className="p-4 box">
        <h2 className="m-5">Datos del Cliente</h2>
        <Form className="m-5" onSubmit={(e)=> submit(e)}>
          <Form.Group>
            <Form.Control type="text" placeholder="Nombre"  
            onChange={(e) => handle(e)} id="nombre" value={data.nombre} />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Telefono"
            onChange={(e) => handle(e)} id="telefono" value={data.telefono}  />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="Direccion" 
            onChange={(e) => handle(e)} id="direccion" value={data.direccion} />
          </Form.Group>
          <div className="d-grid gap-2 mt-3">
            <Button variant="primary" type="Submit">
              Guardar
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
}

export default NuevoProveedor;