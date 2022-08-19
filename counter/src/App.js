import './App.css';
import {useState} from 'react'

function App() {

  const [counter, setcounter]=useState(0);
  const incrementhandler=()=>{
    setcounter(counter+1)
  }
  const decrementhandler=(pre)=>{
    if(counter>0)
    setcounter(counter-1)
  }
  return (
    <>
    <div className="counter"><h1>{counter}</h1></div>
    <button className='incrementer' onClick={incrementhandler}>Increment The Counter</button>
    <button className='decrementer' onClick={decrementhandler}>Decrement The Counter</button>
    </>
  );
}

export default App;
