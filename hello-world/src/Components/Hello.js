//Lect 8  -- with and without JSX

import React from 'react'

const Hello = () => {
    // return (
    //     <div>
    //         <h1>JSX</h1>
    //     </div>
    // 
    return React.createElement(
        'div',
        {id:'new' , className:'dummyClass'}, //can be null also (props)
        React.createElement('h1',null,'JSX'));
}

export default Hello