import React from 'react'

export default function CompB(props) {
  return (
    <>
    <div>
        <h2>Component B value : {props.value}</h2>
        <button style={{padding:'15px', fontSize:'20px', color:'red'}} onClick={()=>props.change(`Incremental value is ---> ${props.value*10}`)}>Increment</button>
    </div>
    </>
  )
}
