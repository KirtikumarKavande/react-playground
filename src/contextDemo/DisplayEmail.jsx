import React, { useContext } from 'react'
import FormContext from '../context/Context'
import { useSelector } from 'react-redux'

const DisplayEmail = () => {
const{email,password}= useSelector((store)=>store.formReducer)

  return (
    <>
    <div>{email}</div>
    <div>{password}</div>
    </>
  )
}

export default DisplayEmail