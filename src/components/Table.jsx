import DataTable from "react-data-table-component";
import React,{useState, useEffect} from "react";

const Table = () => {
  const [productos, setProductos] = useState([]);
  const URL = "http://localhost:8081/product";
  const showData = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data);
    setProductos(data);
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
      name: 'Nombre Producto',
      selector: row => row.nombreProducto
    },
    {
      name: 'Precio Unidad',
      selector: row => row.precioUnidad
    },

  ]

  const MyComponent = () => (
    <DataTable
      title="Productos"
      columns={columns}
      theme="solarized"
    />
  );


  return(
    <div className="m-3">
      <h3>Productos</h3>
     <DataTable 
      columns={columns}
      data={productos}
      //theme='custom' //habilitar esta linea y descomentar createTheme()
      pagination
     />
    </div>
  );
};

export default Table;
