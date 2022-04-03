import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Navbar from "./Navbar";
import { Button } from "react-bootstrap";
import Axios from "axios";

function NuevoProveedor() {
    const url = "http://localhost:8081/f"
    const [data, setData] = useState({
        fecha:"",
        totalPagado:"",
        nombreCliente:"",
        vendedor: ""
    })
    function submit(e){
        e.preventDefault();
        Axios.post(url,{
          fecha: data.fecha,
          totalPagado: data.totalPagado,
          nombreCliente: data.nombreCliente,
          vendedor: data.vendedor
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
        <h2 className="m-5">Venta</h2>
        <Form className="m-5" onSubmit={(e)=> submit(e)}>
          <Form.Group>
            <Form.Control type="date" placeholder="fecha"  
            onChange={(e) => handle(e)} id="fecha" value={data.fecha} />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="nombreCliente"
            onChange={(e) => handle(e)} id="nombreCliente" value={data.nombreCliente}  />
          </Form.Group>

          <Form.Group>
            <Form.Control type="text" placeholder="vendedor" 
            onChange={(e) => handle(e)} id="vendedor" value={data.vendedor} />
          </Form.Group>

          <Form.Group>
            <Form.Control type="number" placeholder="totalPagado" 
            onChange={(e) => handle(e)} id="totalPagado" value={data.totalPagado} />
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