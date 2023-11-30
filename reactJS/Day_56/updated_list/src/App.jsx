import FootItems from "./components/FoodItems";
import errorMsg from "./components/errorMsg";
import Item from "./components/item";
function App() {
  //  map function
  let foodItem = ["Pizza", "Burger", "Sandwich", "Pasta", "Biryani", "Noodles"];
  // let food = [];

  return (
    // React.Fragment <></>
    <>
      <h1>Food items </h1>
      <errorMsg errItems={foodItem}></errorMsg>
      <FootItems errItems={foodItem}></FootItems>
      
    </>
  );
}
export default App;
