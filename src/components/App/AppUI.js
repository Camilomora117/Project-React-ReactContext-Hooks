import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoItem} from '../TodoItem';
import { CreateButtom } from "../CreateButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../modal";
import { TodoForm } from "../TodoForm";

function AppUI() {

    const {
      error, 
      loading, 
      searchTodos, 
      completeTodo, 
      deleteTodo,
      openModal,
      setOpenModal,
    } = React.useContext(TodoContext);

    return(
    <React.Fragment>

        <TodoCounter />
  
        <TodoSearch /> 

        <TodoList>
            {error && <p>Hubo un error!</p>}
            {loading && <p>Cargando !</p>}
            {(!loading && !searchTodos.length) && <p>Crear tu primer Todo!</p>}

            {searchTodos.map((todo, index) => (
              <TodoItem 
              key={index} 
              text={todo.text} 
              completed={todo.completed}
              onComplete={() => completeTodo(todo.text)}
              onDelete={() => deleteTodo(todo.text)}
              /> 
            ))}
        </TodoList>

        {!!openModal && (
          <Modal>
            <TodoForm /> 
          </Modal> 
        )}
   
        <CreateButtom 
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUI};