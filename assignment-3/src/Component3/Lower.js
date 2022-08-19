import React from 'react'
import '../Component/style1.css'

const Lower=(props)=> {
  return (
    <>
    <div id="main4">
    <div id='image-section'>
      <img id='image-icon' src="https://t0.gstatic.com/images?q=tbn:ANd9GcRI3Q2eoAorbi_dqSpvHMnvzfXKBzIDnO312EcG1fswitS_WgX5" alt='aditya'/>
    </div>
    <div id='image2-section'>
        <img id='image-photo' src={props.profileImg} alt="by aditya"/>
    </div>
    <div id='name'>
    <div id='name1'>
        <h3>{props.name}</h3>
    </div>
    <div id='description'>
        {props.description}
    </div>
    </div>
    </div>
    </>
  )
}

export default Lower;