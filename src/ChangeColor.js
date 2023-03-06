import React, { useState } from 'react'

export default function ChangeColor() {
    const [color, setColor] = useState('#000000')
    const checkColor = () => {
        if (color === '#0000FF') {
            setColor('#FF0000')
        }
        else {
            setColor('#0000FF')
        }

    }
    return (
        <div>
            <h1>To change color of a button</h1>
            <button style={{ backgroundColor: `${color}`, padding:'20px', fontSize:'20px', color:'white' }} onClick={checkColor}>Change Color</button>


        </div>
    )
}
