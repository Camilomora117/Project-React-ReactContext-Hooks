import React from "react";

//Custom Hook 
function useLocalStorage(itemName, intialValue) {
    //Hooks para la App
    const [item, setItem] = React.useState(intialValue);
    const [loading, setLoading] = React.useState(true);
    const [error, setError] = React.useState(false);
  
    React.useEffect(() => {
      setTimeout(() => {
        try {
          //Traemos Item
          const localStorageItem = localStorage.getItem(itemName);  
          let parseItem;
  
          //Verificamos si existe //Si no existe lo creamos
          if (!localStorageItem) {
            localStorage.setItem(itemName, JSON.stringify(intialValue));
            parseItem = intialValue;
          } else {
            parseItem = JSON.parse(localStorageItem);
          }
  
          setItem(parseItem);
          setLoading(false);
        } catch(error) {
          setError(error);
        }
  
      }, 2000);
    }, []);
  
    //Actualizar Hook y LocalStorage
    function saveItem(newItem) {
      try {
        const stringfiedItem = JSON.stringify(newItem);
        localStorage.setItem(itemName, stringfiedItem);
        setItem(newItem);
      }catch(error) {
        setError(error);
      }
    }
  
    return {
      item,
      saveItem,
      loading,
      error,
    };
}

export {useLocalStorage}