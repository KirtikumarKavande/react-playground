import React, { useContext } from 'react'
import FormContext from '../context/Context'

const DisplayEmail = () => {
  const {  email } = useContext(FormContext)

  return (
    <div>{email}</div>
  )
}

export default DisplayEmail