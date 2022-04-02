import React from "react";
import { Button} from "react-bootstrap";
import { useUserAuth } from "../context/UserAuthContext";
import Navbar from "./Navbar";

const Home = () => {
    const {user, logOut} = useUserAuth();
    console.log(user);
    const handleLogOut = async () => {
        try{
            await logOut();
        }catch(err){
            console.log(err.message)
        }
    };

    return(
        <>
            <Navbar />
            <div className="p-4 box mt-3 text-center">Bienvenido a la ferreteria "Don Raul"<br />
                {user && user.email}</div>
            <div className="d-grid gap-2">
                    <Button variant= "primary" onClick={handleLogOut}>Cerrar Sesion</Button>
            </div>
            
        </>
    );
};

export default Home;