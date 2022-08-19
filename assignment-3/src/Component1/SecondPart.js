import React from 'react'
import '../Component/style1.css'

const SecondPart=(props)=> {
  return (
    <>
    <div id='main2'>
    <div id='first'>
        <div><strong>Status</strong></div>
        <div>{props.status}</div>
    </div>
    <div id='second'>
        <div><strong>Door</strong></div>
        <div>{props.Door}</div>
    </div>
    <div id='third'>
        <div><strong>Time</strong></div>
        <div>{props.Time}</div>
    </div>
    </div>
    </>
  )
}
export default SecondPart;
