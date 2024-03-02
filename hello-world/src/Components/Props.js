//Lect - 9
 import React from 'react'

 const Greet = (props) => {
    console.log(props)
    return (
        <div>
            <h1>
                Hello {props.name} a.k.a {props.jobName}
            </h1>
            {props.children}
        </div>
        
    )
 }

 export default Greet