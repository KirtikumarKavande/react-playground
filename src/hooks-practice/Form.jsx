import React from 'react'
import useForm from './useForm'

const FormHook = () => {
   const {formData,handleChange}= useForm()
   console.log(formData)
  return (
    <div>
        <input type="text" placeholder='email' name='email' onChange={handleChange}/>
        <input type="text" placeholder='username' name='username' onChange={handleChange}/>
        <input type="text" placeholder='password' name='password' onChange={handleChange}/>
        
    </div>
  )
}

export default FormHook