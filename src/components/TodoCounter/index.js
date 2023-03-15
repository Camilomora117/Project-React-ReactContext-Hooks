import React, { useContext } from 'react';
import './TodoCounter.css';
import { TodoContext } from '../TodoContext';

function TodoCounter() {

    const {totalTareas, completedTareas} = React.useContext(TodoContext);
    
    return (
        <h2 className='TodoCounter'>Has completado {completedTareas} de {totalTareas} Tareas</h2>
    );
}

export {TodoCounter};