import React from 'react';
import './App.css';
import Practice from './components/Practice';
import Slider from './components/Slider';

function App() {
  
  const data = {
    name: 'John',
    age: 30,
    male: true,
    arrayOfObjects: [
      {
        firstName: 'jane',
        lastName: 'doe'
      },
      {
        firstName: 'joe',
        lastName: 'black'
      }
    ]
  }

  const name = data.name? data.name : 'no name';
  const age = data.age? data.age : 0;
  const male = data.male? data.male : false;
  const arrayOfObjects = data.arrayOfObjects? data.arrayOfObjects : [{firstName: 'no first name', lastName: 'no last name'}];
  // const array = data.array? data.array : []


  
  
  return (
    <div className="App">
    {/* <Practice name={name} age={age} male={male} arrayOfObjects={arrayOfObjects}/> */}
    <Slider/>
    </div>
  );
}

export default App;
