import { useState } from "react";
import { IoIosAddCircle } from "react-icons/io";

function AddTodo({onNewItem}) {

  const [todoName,setTodoName] = useState("");
  const [todoDate,setDate] = useState("");

  const handleNameChange = (event) =>{
    setTodoName(event.target.value);
  }

  const handleDateChange = (event) =>{
    setDate(event.target.value);
  }
  
  const handleAddButtonClicked = () =>{
     onNewItem(todoName,todoDate);
     setDate("");
     setTodoName("");

  }

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col-6">
            <input type="text" placeholder="Enter ToDO Hear" value={todoName}onChange={handleNameChange} />
          </div>
          <div className="col-4">
            <input type="date" value={todoDate} onChange={handleDateChange} />
          </div>
          <div className="col-2">
            <button type="button" className="btn btn-success"
            onClick={handleAddButtonClicked}>
             { <IoIosAddCircle /> } 
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default AddTodo;
