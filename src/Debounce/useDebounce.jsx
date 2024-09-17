import React, { useEffect, useState } from 'react'

const useDebounce = (text) => {
    
    const [data,setData]=useState()
    useEffect(()=>{
        const id=setTimeout(()=>{
            setData(text)
        },3000)

        return ()=>clearTimeout(id)
    },[text])

  return data
}

export default useDebounce