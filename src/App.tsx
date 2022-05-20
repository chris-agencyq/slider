import React from 'react';
import Practice, {PracticeProps} from './components/Practice';
import Slider from './components/Slider';

function App() {
  
  const data : PracticeProps = {
    name: null,
    age: 30,
    male: true,
    arrayOfObjects: [
      {
        firstName: null,
        lastName: 'doe'
      },
      {
        firstName: 'joe',
        lastName: 'black'
      }
    ]
  }
  
  return (
    <div className="App">
    <Practice {...data}/>
    <Slider/>
    </div>
  );
}

export default App;
