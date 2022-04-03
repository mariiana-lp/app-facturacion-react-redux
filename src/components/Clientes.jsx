import React,{useState, useEffect} from "react";
import Navbar from "./Navbar";
import DataTable from "react-data-table-component";


export default function Clientes() {
  const [clientes, setClientes] = useState([]);
  const URL = "http://localhost:8081/clientes";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setClientes(data);
  };

  useEffect( ()=>{
    showData()
  }, [])

  const columns = [
    {
      name: 'ID',
      selector: row => row.id
    },
    {
      name: 'Nombre',
      selector: row => row.nombre
    },
    {
      name: 'Telefono',
      selector: row => row.telefono
    },

    {
      name: 'Dirección',
      selector: row => row.direccion
    },

  ]

  const MyComponent = () => (
    <DataTable
      title="Clientes"
      columns={columns}
      theme="solarized"
    />
  );


  return (
    <>
      <Navbar />
      <div className="m-3">
      <h3>Clientes</h3>
     <DataTable 
      columns={columns}
      data={clientes}
      //theme='custom' //habilitar esta linea y descomentar createTheme()
      pagination
     />
    </div>
    </>
  );
}
