import { useSelector } from "react-redux";

const displayCounter = () =>{

  const {counterValue} = useSelector(store => store.counter);
  return  <p > Counter value : {counterValue}</p>
}

export default displayCounter;