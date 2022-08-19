import React from 'react'
import { useState } from 'react'

export default function Textbox(props) {
        const handleOnchange=(event)=>{
             console.log("hanldle onchange clicked")
             setText(event.target.value)
            }

        const handleUpClick=()=>{
             console.log("upper case was click")
             let newtext=text.toUpperCase()
             setText(newtext)
           }
        const handleLoClick=()=>{
            console.log("upper case was click")
            let newtext=text.toLowerCase()
            setText(newtext)
          }

        const handleClearClick=()=>{
            console.log("upper case was click")
            let newtext=''
            setText(newtext)
          }
          const clearextraspace=()=>{
            console.log("upper case was click")
            let newtext=text.split(/[ ]+/)
            setText(newtext.join(" "))
          }

          const copytext=()=>{
            var text=document.getElementById("Textbox");
            text.select();
            navigator.clipboard.writeText(text.value);
          }

       
        const [text, setText]=useState('')  //usestate return default value inside that

       return (
         <>
         <div className='container'>
            <div className="mb-3">
               <h3>{props.heading}</h3>
               <textarea className="form-control" value={text} onChange={handleOnchange}  id="Textbox" rows="10"></textarea>
            </div>
            <button className='btn btn-primary mx-3' onClick={handleUpClick} >To Upper Case</button>
            <button className='btn btn-secondary mx-3' onClick={handleLoClick} >To Lower Case</button>
            <button className='btn btn-success mx-3' onClick={clearextraspace} >Clear Extra Space  </button>
            <button className='btn btn-warning mx-3' onClick={copytext} >Copy To ClipBoard </button>
            <button className='btn btn-danger mx-3' onClick={handleClearClick} >Clear TextBox </button>
          </div>
          <div className='container my-3'>
              <h2>Your Text Summary:</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.25*text.split(" ").length} minutes to read</p>
            <h3>Preview</h3>
            <p>{text}</p>
          </div>
        </>
  )
}

