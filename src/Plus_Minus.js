import { useState } from "react"

function Plus_Minus () {
  const [ counter, setCounter] = useState(0)


  function Increment (){
    setCounter(counter+1)
  }
  function Decrement (){
    setCounter(counter-1)
  }

    return (
      <div>
        <h1>{counter}</h1>
        <button onClick={Increment}>Increment</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    )
  }


export default Plus_Minus