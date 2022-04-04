import React,{useState, useEffect} from "react";
import { Form } from "react-bootstrap";

function SelectProductos() {
  const [productos, setProductos] = useState([]);
  const URLProducts = "http://localhost:8081/product";
  const showDataProduct = async () => {
    const response = await fetch(URLProducts);
    const data = await response.json();
    console.log(data);
    setProductos(data);
  };

  useEffect(() => {
    showDataProduct();
  }, []);
  return (
    <Form.Group className="mb-3">
      <select name="productos" className="form-control">
          {
              productos.map((item, i)=>(<option value={i}>
                    {item.nombreProducto}
              </option>))
          }
      </select>
    </Form.Group>
  );
}

export default SelectProductos;
