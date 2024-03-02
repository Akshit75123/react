//Lect-15

import React from 'react'

function ChildComponent(props) {
  return (
    <div>
        {/* <button onClick={props.greetHandler}>Greet Parent</button> */}
        {/* passing method defined in the ParentComponent as props in child component */}
        <button onClick={()=>props.greetHandler("child")}>Greet Parent</button> 
        {/* passing parameter in the greetHandler -- arrow functions */}
    </div>
  )
}

export default ChildComponent