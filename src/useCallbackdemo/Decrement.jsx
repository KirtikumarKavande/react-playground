import React, { useMemo } from "react";

const Decrement = ({ decrementFn }) => {
    let array=[2,3,4,5,]
    
    let res=array.sort((a,b)=>a-b)
    console.log(res)
  console.log("logged decrement");
  return <div onClick={decrementFn}>Decrement</div>;
};

export default Decrement;
