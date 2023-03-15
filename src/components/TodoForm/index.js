import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {

    const [newTodoValue, setNewTodoValue] = React.useState('');

    const {
        addTodo,
        setOpenModal,
    } = React.useContext(TodoContext);

    const onChangeValue = (event) => {
        setNewTodoValue(event.target.value);
    }

    const onCancel = () => {
        setOpenModal(false);
    } 

    const onSubmit = (event) => {
        event.preventDefault();
        addTodo(newTodoValue);
        setOpenModal(false);
    }

    return (
       <form onSubmit={onSubmit}>
            <label>Agrega una Tarea</label>
            <textarea 
            value={newTodoValue}
            onChange={onChangeValue}
            placeholder='Escribe la tarea'
            />

            <div>
                <button onClick={onCancel} type="button">
                    Cancelar
                </button>

                <button type="submit">
                    Añadir
                </button>
            </div>
       </form> 
    );
}

export {TodoForm}