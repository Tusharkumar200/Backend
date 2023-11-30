function App() {
//  map function
     let food = ['Pizza', 'Burger', 'Sandwich', 'Pasta', 'Biryani', 'Noodles'];
    // let food = [];
    let foodList = food.map((food, index) => {
        return <li key={index} className="list-group-item">{food}</li>
    });

    // using if condition
    // if(food.length === 0){
    //   foodList = <li className="list-group-item">No food available</li>
    // }

    // using ternary operator
    foodList = food.length === 0 ? <li className="list-group-item">No food available</li> : foodList;
  return (
    // React.Fragment <></>
    <>
      <ul className="list-group">
        <li className="list-group-item">{foodList}</li>
        
      </ul>

      
    </>
  );
}
export default App;
