import React from "react";
import {TodoCounter} from '../TodoCounter';
import { TodoSearch } from "../TodoSearch";
import { TodoList } from "../TodoList";
import {TodoItem} from '../TodoItem';
import { CreateButton } from "../CreateButton";
import { TodoContext } from "../TodoContext";
import { Modal } from "../Modal";
import { TodoForm } from "../TodoForm";

/* Imports Interfaces*/
import { TodosError } from "../TodosError";
import { TodosEmpty } from "../TodosEmpty";
import { TodosLoading } from "../TodosLoading";

function AppUI() {

    const {
      error, 
      loading, 
      searchedTodos, 
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
            {error && <TodosError error={'Hubo un error'}/>}
            {loading && <TodosLoading /> }
            {(!loading && !searchedTodos.length) && <TodosEmpty />}

            {searchedTodos.map(todo => (
              <TodoItem 
              key={todo.text} 
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
   
        <CreateButton 
        setOpenModal={setOpenModal}
        />
    </React.Fragment>
    );
}

export {AppUI};