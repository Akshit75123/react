/* Lecture-17 and 18("the key Concepts") */

import React, {Component} from 'react';
import Person from "./Person";

function ListRender() {
    // const Names = ['Bruce','Clark','Diana'];

    const Persons = [
        {
            name: "Bruce",
            age: 32,
            skill: 'React'
        },
        {
            name: "Clark",
            age: 28,
            skill: 'Angular'
        },
        {
            name: "Diana",
            age: 23,
            skill: 'Vue'
        }
    ]

    // Method 2 to display list
    // const nameList = Names.map(name => <h2> { name } </h2>)
    // const personList = Persons.map(
    //     person =>
    //         <h2>
    //             I am {person.name}, I am {person.age} years old, I know {person.skill}.
    //         </h2>
    // )

    //using the Person component as to display the sentence.
    const personList = Persons.map(
        person => <Person key = {person.name} person={person} />
    )

    //Key prop is used to render the list efficiently -- every list item should have different key value.

    return(
        <div>
            {

                personList
                // nameList
                // Names.map(name => <h2>{name}</h2>) --> Method 1 to display List
            }
        </div>
    )
}

export default ListRender;
