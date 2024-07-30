import React, { useState } from 'react'






export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white'
  })

  const [newText, setNewText] = useState('Change to dark mode')
  const modeChange = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: '#2c2c2c'
      })
      setNewText('Change to light mode')
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white'
      })
      setNewText('Change to dark mode')
    }
  }
  return (
    <div style={myStyle}>
      <div className='container' >
        <h2 className='py-3' style={myStyle}>This is text</h2>
        <div className='text-center my-4'>
          <button type="button" className="btn btn-secondary m-2" onClick={modeChange}>{newText}</button>
        </div>
      </div>
    </div>
  )
}
