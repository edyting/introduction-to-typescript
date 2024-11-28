# introduction-to-typescript
## INITIAL APP.TSX
import React from 'react';

import './App.css';

function App :React.FC =() {
  // declaration
  let name:string; //string
  let age:number;  //number
  let isStudent:boolean; //boolean
  let activities:string[]; //array of strings - changing the type to numbers makes it am array of numbers
  let person:Person
  let lotsOfPersons:Person[];  //array of person

  let printName:(name:string) => void;   //declaring a function that returns undefined (use "never" if it doesn't return anything)

  // declaring types- for objects
  type Person = {
    name:string,
    age?:number   //adding "?" after property name makes it optional
  }

  // interface
  interface PersonInterface {   //changed name to avoid duplicate
    name:string,
    age?:number   //adding "?" after property name makes it optional
  }

  // assignment
  name='Manuel';
  age=20;
  isStudent=true;
  activities=["football","hackaton","Pick & Act"];
  person={name:"manuel"};
  lotsOfPersons=[{name:"Joe",age:18},{name:"Mark",age:22}]

  return (
    <div className="App">
      <h1>Hello World {name + " "+age}</h1>
    </div>
  );
}

export default App;
