import React from "react";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light mx-3" >
      <a className="navbar-brand text-uppercase mx-3" href="/home">
        Ferreteria Don Raul
      </a>

      <div className="collapse navbar-collapse " id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="/clientes">
              Clientes
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/proveedores">
              Proveedores
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/inventario">
              Inventario
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/ventas">
              Ventas
            </a>
          </li>
          <li className="nav-item active">
            <a className="nav-link" href="/nuevaVenta">
              Nueva Venta
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
