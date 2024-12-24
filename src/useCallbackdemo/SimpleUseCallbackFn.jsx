import React, { useMemo, useState } from 'react'

const UseMemoEx = () => {
   let [state,setState]=useState(false)
  function hevayOperation(){
    console.log("under heavy")
    
    for(let i=0 ;i<100000;i++){
      // console.log(i);
    }
    return "done"
  }
  // hevayOperation()
  useMemo(()=>hevayOperation(),[])
  return (
    <div>
      <button onClick={()=>{setState(!state)}}>Click</button>
    </div>
  )
}

export default UseMemoEx