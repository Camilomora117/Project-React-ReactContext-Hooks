import React from "react";
import {useLocalStorage} from './useLocalStorage';

const TodoContext = React.createContext();

//Proviver: Envolver la APP
function TodoProvider(props) {

    const {
        item: todos,
        setItem: saveTodos,
        loading,
        error,
      } = useLocalStorage('TODOS_V1', []);
      
      const [openModal, setOpenModal] = React.useState(false);
    
      const [searchValue, setSearchValue] = React.useState('');
      
      const completedTareas = todos.filter(todo => !!todo.completed).length;
      const totalTareas = todos.length;
    
      let searchTodos = [];
      if (!searchValue.length >= 1) {
        searchTodos = todos;
      } else {
        searchTodos = todos.filter(todo => {
          const todoText = todo.text.toLowerCase();
          const searchText = searchValue.toLowerCase();
          return todoText.includes(searchText);
        })
      }
    
      const completeTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [... todos];
        newTodos[todoIndex].completed = true;
        saveTodos(newTodos);
      }
    
      const deleteTodo = (text) => {
        const todoIndex = todos.findIndex(todo => todo.text === text);
        const newTodos = [... todos];
        newTodos.splice(todoIndex, 1);
        saveTodos(newTodos);
      }

      const addTodo = (text) => {
        const newTodos = [...todos];
        newTodos.push({
          text,
          completed: false,
        });
        saveTodos(newTodos);
      };

    return (
        <TodoContext.Provider value={{
            error,
            loading,
            totalTareas,
            completedTareas,
            searchValue,
            setSearchValue,
            searchTodos,
            completeTodo,
            deleteTodo,
            addTodo,
            openModal,
            setOpenModal,
        }}>
            {props.children}
        </TodoContext.Provider>
    );
} 

export {TodoContext, TodoProvider}