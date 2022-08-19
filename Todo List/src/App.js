import { useState } from 'react';
import './App.css';

function App() {
  const[todoItems,settodoitems]=useState([])
  const[item1, setitem1]=useState("")
   
  const handletodoadd=()=>{
    if(item1!=="")
     settodoitems([...todoItems, item1.toUpperCase()])
     
   }

   const handleclear=()=>{
     settodoitems([])
   }
   const handlechange=(event)=>{
     setitem1(event.target.value)
     this.input.value=""
   }
   const handlereset=()=>{
      setitem1("")
   }

   const renderList=()=>{
     return todoItems.map((items, index)=>{
       return <li>{items}</li>
     })
   }
 
   return (
    <>
    
    <div id='main'>
    <header><h1>Todo List</h1></header>
    <input id='input1' value={item1} onChange={handlechange}></input>
    <button id='buton' onClick={handletodoadd}>Add Items</button>
    <button id='buton2' onClick={handleclear} >Clear Page</button>
    <button id='buton3' onClick={handlereset}>Reset</button>
    
      {renderList()}
      
    </div>
    </>
  );
}

export default App;
