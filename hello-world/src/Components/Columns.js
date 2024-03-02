//Lect -25 Fragments

import React from 'react'

function Columns(){
    const items = [];

    return (
        <React.Fragment>
            {
                items.map( item => (
                    <React.Fragment key = {item.id}>
                        <h1>Title</h1>
                        <p>{item.title}</p>
                    </React.Fragment>
                ))
            }
            {/*React Fragments can also be used as key attributes while rendering the list*/}
            {/*div tag cannot be used as a enclosing tag as td cannot be stored in div. So use of React Fragments is crucial*/}
            <td>Name</td>
            <td>Vishwas</td>
        </ React.Fragment>
    )
}

export default Columns