import React from 'react'
import './Button.css'
import {useState} from 'react'

//hooks are nothing but function created by react community
//state re-render or refresh the document object model
//clicke on button then heading color should change

function Button() {

    const[isDanger, setDanger]=useState(false);   //creating use click to rerender the vlaue of variable in react
    const[mode, setMode]=useState( false);
    const handleclick = () =>{    //creating function to change the value of is danger
        setDanger(!isDanger)
        setMode(!mode)
        console.log(isDanger)
        }

return (
    <>
      <div>
        <h3 className={isDanger ? "heading-danger" :"heading-normal"}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Click to change the color of the text And the magic is here that you can't imagin</h3>
        <button id='buton' className={isDanger ? "heading-normal" :"heading-danger"} onClick={handleclick}>{mode ? "Click to Dark Mode ON" : "Click to On Light Mode On"}</button>
      </div>
    </>
    )
}
export default Button;
