import AppName from "./components/AppName";
import AddTodo from "./components/AddTodo";
import TodoItems from "./components/TodoItems";

function App() {

  const todoItems=[
    {
      name:"Milk and Eggs",
      date:"10/12/23"
    },
    {
      name:"Tea",
      date:"11/12/23"
    },
    {
      name:"Maggi",
      date:"12/12/23"
    },
    {
      name:"coffee",
      date:"13/12/23"
    },
  ]
  return (
    <>
      <div className="container text-center">
        <AppName />
        <AddTodo></AddTodo>
        <TodoItems todoItems={todoItems}/>

        
        
        
      </div>
    </>
  );
}

export default App;
