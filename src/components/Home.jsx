import React from "react";
import { Button } from "bootstrap";

const Home = () => {
    return(
        <>
            <div className="p-4 box mt-3 text-center">Hola Bienvenido</div>
            <div className="d-grid gap-2">
                    <Button variant= "primary">Cerrar Sesion</Button>
            </div>
            
        </>
    );
};

export default Home;