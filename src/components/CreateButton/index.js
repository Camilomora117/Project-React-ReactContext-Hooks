//import react from "react";
import './CreateButton.css';

function CreateButtom(props){

    const onClickButton = () => {
        props.setOpenModal(prevState => !prevState);
    }
    
    return(
        <button 
        className="CreateTodoButton"
        onClick={() => onClickButton()}
        >
        +
        </button>
    );
}

export { CreateButtom};