import TodoItem from "./TodoItem";

const TodoItems = ({todoItems})=>{
  return <>
  
    {todoItems.map((todoItem)=>{
      return <TodoItem toName={todoItem.name} toDate={todoItem.date}/>
    })
  }
  </>
}

export default TodoItems; 