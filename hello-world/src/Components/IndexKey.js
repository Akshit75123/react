// Lecture- 19

import React from 'react';

function IndexKey() {

    const Names = ['Bruce', 'Clark', 'Diana','Gol Gagot']
    const nameList = Names.map((name, index) => <h2  key = {index}>{index} {name}</h2>)
    //When to use index as a key
    // 1. The items in your list do not have a unique list
    // 2. The list is a static list and will not change.
    // 3. The list will never be reordered or filtered.
    return (<div>{nameList}</div>)
}

export default IndexKey;