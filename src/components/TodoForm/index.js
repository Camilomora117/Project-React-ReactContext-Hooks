import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css';

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('');
  const [textAreaValue, setTextAreaValue] = React.useState('Escribe la tarea que quieres agregar');

  const {
    addTodo,
    setOpenModal,
  } = React.useContext(TodoContext);
  
  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };
  const onCancel = () => {
    setOpenModal(false);
  };
  const onSubmit = (event) => {
    event.preventDefault();
    if (!!newTodoValue) {
      addTodo(newTodoValue);
      setOpenModal(false);
    } else {
      setTextAreaValue('Tienes que escribir algo!');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <label>Escribe tu nueva Tarea</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder={textAreaValue}
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          className="TodoForm-button TodoForm-button--cancel"
          onClick={onCancel}
          >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button--add"
        >
          Añadir
        </button>
      </div>
    </form>
  );
}

export { TodoForm };
