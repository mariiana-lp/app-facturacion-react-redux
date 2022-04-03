import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

function Proveedores() {
  const [proveedor, setProveedor] = useState([]);
  const URL = "http://localhost:8081/proveedores";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setProveedor(data);
  };

  useEffect(() => {
    showData();
  }, []);

  const columns = [
    {
      name: "ID",
      selector: (row) => row.id,
    },
    {
      name: "Nombre",
      selector: (row) => row.nombre,
    },
    {
      name: "Telefono",
      selector: (row) => row.telefono,
    },

    {
      name: "Dirección",
      selector: (row) => row.direccion,
    },
  ];

  const MyComponent = () => (
    <DataTable title="Proveedores" columns={columns} theme="solarized" />
  );

  return (
    <>
      <Navbar />
      <div className="m-3">
        <h3>
          {" "}
          <center>PROVEEDORES</center>{" "}
        </h3>
        <DataTable columns={columns} data={proveedor} pagination />
      </div>
      <div className="p-4 box mt-3 text-left">
        <Link className="btn btn-primary" to="/nuevoProveedor">
          Agregar Proveedor
        </Link>
      </div>
    </>
  );
}

export default Proveedores;
