import React from "react";
import { AppUI } from "./AppUI";
import { TodoProvider } from "../TodoContext";

//const defaultTareas = [
//  {text: "Cortar Cabello", completed: true},
//  {text: "Tomar Curso", completed: false},
//  {text: "Lavar la Moto", completed: false}
//];

function App() {

  return (
    <TodoProvider>
      <AppUI/>
    </TodoProvider>
  );
}

export default App;
