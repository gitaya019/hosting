import React from "react";
const FreeTask =()=>{

    const redirectToLogin =()=>{
        window.location.href='/login.html'
    }

    return(
        <div>
            <p>Bienvenidos a FreeTask</p>
            <button onClick={redirectToLogin}>Cerrar Sesión</button>
        </div>
    );
};

export default FreeTask;