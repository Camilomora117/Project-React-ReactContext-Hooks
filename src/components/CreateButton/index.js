import './CreateButton.css';

function CreateButton(props){

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

export { CreateButton};