import React from 'react'

export default function Alert(props) {

  const capLettr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    <div className='alertBox' style={{ height: '50px' }}>
      {
        props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
          <strong>{capLettr(props.alert.typ)}</strong>, {props.alert.msg}
        </div>
      }
    </div>
  )
}
