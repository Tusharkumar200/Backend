import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItem from "./components/TodoItem";
import TodoItems from "./components/TodoItems";
import { useState } from "react";
import WelcomeMessage from "./components/WelcomeMessage";


function App() {
  const initialTodoItems = [
    // {
    //   name: "rice",
    //   Date: "4/10/2023",
    // },
    // {
    //   name: "Ghee",
    //   Date: "4/10/2023",
    // },
    // {
    //   name: "samosa",
    //   Date: "4/10/2023",
    // },
  ];
  const [todoItems, setTodoItems] = useState(initialTodoItems);

  const handleNewItem = (itemName, itemDate) => {
    console.log(`new item ${itemName} Date: ${itemDate}`);
    const newTodoItem = [...todoItems, { name: itemName, Date: itemDate }];
    setTodoItems(newTodoItem);
  };

  
  return (
    <>
    <div className="container text-center">
      <AppName />
      <AddTodo onNewItem={handleNewItem}></AddTodo>
      {todoItems.length === 0 && <WelcomeMessage></WelcomeMessage>}
      
     
      
    </div>

    <div>
    {todoItems.map((item, index) => (
      <div key={index}>
        <p>{item.name}</p>
        <p>{item.Date}</p>
      </div>
    ))}

  </div>
    <TodoItems todoItems={todoItems}   />

  </>
  );
}

export default App;
