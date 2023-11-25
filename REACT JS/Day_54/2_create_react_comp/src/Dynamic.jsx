
function Dynamic(){
  
  let number = Math.random() *100;
  let MyName = 'Tushar Kumar';
  return (
    <div>
    <p> My name is {MyName}</p>

    <p>Random Number is : {Math.round(number)}</p>

    </div>
  )

  }
export default Dynamic;