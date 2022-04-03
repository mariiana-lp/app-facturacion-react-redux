import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DataTable from "react-data-table-component";

function Inventario() {
  const [productos, setProductos] = useState([]);
  const URL = "http://localhost:8081/i";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setProductos(data);
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
      name: "Nombre del Producto",
      selector: (row) => row.productoDTOReactivo.nombreProducto,
    },
    {
      name: "Telefono",
      selector: (row) => row.productoDTOReactivo.precioUnidad,
    },
    {
      name: "Cantidad en Stock",
      selector: (row) => row.cantidadActual,
    },
    {
      name: "Minimo para tener en stock",
      selector: (row) => row.minimo,
    },
    {
      name: "Maximo para tener en stock",
      selector: (row) => row.maximo,
    },
  ];

  const MyComponent = () => (
    <DataTable title="Inventario" columns={columns} theme="solarized" />
  );

  return (
    <>
      <Navbar />
      <div className="m-3">
        <h3>Inventario</h3>
        <DataTable columns={columns} data={productos} pagination />
      </div>
    </>
  );
}

export default Inventario;
