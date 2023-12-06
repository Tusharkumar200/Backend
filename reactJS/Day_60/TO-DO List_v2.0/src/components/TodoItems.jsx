import TodoItem from "./TodoItem";


// const TodoItems = ({ todoItem }) => {
  
//   return
//   (<div>
//     {todoItems.map((item) => (
//       <TodoItem todoDate={item.Date} todoName={item.name}></TodoItem>))};

//   </div >);
  
// };



// In TodoItems.jsx
const TodoItems = ({ todoItems }) => {
  return (
    <div>
      {todoItems.map((item) => (
        <TodoItem key={item} todoDate={item.todoDate} todoName={item.todoName} />
      ))}
    </div>
  );
};

export default TodoItems;