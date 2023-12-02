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
      {todoItems.map((item, index) => (
        <TodoItem key={index} todoDate={item.Date} todoName={item.name} />
      ))}
    </div>
  );
};

export default TodoItems;