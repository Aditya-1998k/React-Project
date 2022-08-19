import React from 'react'
import './style1.css'

const UpperPart=(props)=> {
  return (
    <>
        <div id="main1">
            <span id="sign"><strong>{"<"}</strong></span>
            <span id='detail'>
                <div><strong>{props.name}</strong></div>
                <div>{props.EmployeeID}</div>
            </span>
            <span ><button id='button'><strong>Print</strong></button></span>
        </div>
    </>
  )
}
export default UpperPart;
