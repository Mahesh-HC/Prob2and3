import React, { useState } from 'react'
import CompB from './CompB'

export default function CompA() {
    
    const [cendrol, setCendrol]=useState('3')
    const setvalue=(e)=>{
        setCendrol(e.target.value)
    }
  return (
    <div>
       <h2> <label>Enter the value to pass in the component B  </label>
        <input onChange={setvalue}></input></h2>
        <CompB value={cendrol} change={(val)=>setCendrol(val)}></CompB>
    </div>
  )
}
