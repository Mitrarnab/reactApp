import React from 'react'

export default function Alert(props) {

  const capLettr = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  return (
    props.alert && <div className={`alert alert-${props.alert.typ}`} role="alert">
      <strong>{capLettr(props.alert.typ)}</strong>, {props.alert.msg}
    </div>
  )
}
