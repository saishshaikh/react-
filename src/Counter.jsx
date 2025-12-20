import { useState } from "react";

function Counter () {
//    let [stateVariable,setStateVariable]= useState (10);  
   let [count,setCount] = useState(0)

   let intCount =() =>{
    setCount (count+1);
   
   }

    
    return (
        <div>
             <h3>count = {count}</h3>
            <button onClick={intCount}>
                INCREASE COUNT
            </button>
        </div>

    )
}
export default Counter ;