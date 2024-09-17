import React, { useState } from 'react'

const useForm = () => {
    const [formData,setFormData]=useState({})
 function handleChange(e){
    setFormData((prev)=>{return {
        ...prev,
        [e.target.name]:e.target.value
    }})
 }
    return {
        formData,
        handleChange
    }
}

export default useForm