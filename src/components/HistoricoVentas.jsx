import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import DataTable from "react-data-table-component";

function HistoricoVentas() {
  const [ventas, setVentas] = useState([]);
  const URL = "http://localhost:8081/f";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setVentas(data);
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
      name: "Fecha",
      selector: (row) => row.fecha,
    },
    {
      name: "Total Pagado",
      selector: (row) => row.totalAPagar,
    },
    
  ];

  const MyComponent = () => (
    <DataTable title="HistoricoDeVentas" columns={columns} theme="solarized" />
  );

  return (
    <>
      <Navbar />
      <div className="m-3">
        <h3><center>Historico de Ventas</center> </h3>
        <DataTable columns={columns} data={ventas} pagination />
      </div>
    </>
  );
}

export default HistoricoVentas;
