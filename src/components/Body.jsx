import React from 'react';
import Task from '../img/Taskubd.svg';

const body = () => {
  return (
    <div className='body'>
        <div className="contenedor">
        <div className="contenido">
            <h1>¿Qué es FreeTask?</h1>
            <p className='desciption'>FreeTask es una plataforma que te ofrece un espacio, donde podrás organizar tus tareas del día a día.</p>
        </div>
        <div className="imagen">
            <img src={Task} alt="FreeTask" />
        </div>
        </div>
    </div>
  );
};

export default body;
