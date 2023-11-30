import Item from "./item";

const FootItems = ({errItems}) => {
  // let foodItem = ["Pizza", "Burger", "Sandwich", "Pasta", "Biryani", "Noodles"];

  return (
   
      <ul className="list-group">
        {errItems.map((items) => {
           <item key ={items} fItem={items}></item>
        })}
      </ul>
    
  );
};

export default FootItems;
