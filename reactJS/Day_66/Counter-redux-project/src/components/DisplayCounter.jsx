import { useSelector } from "react-redux";

const displayCounter = () =>{

  const counter = useSelector(store => store.counter)
  return  <p > Counter value : {counter}</p>
}

export default displayCounter;