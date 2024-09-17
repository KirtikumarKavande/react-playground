import React, { useState } from "react";
import useDebounce from "./useDebounce";

const Input = () => {
    const [value, setValue] = useState("");
   const deboucedData= useDebounce(value);
   console.log(deboucedData)
  function handleChange(e) {
    setValue(e.target.value)
  }
  return (
    <div>
      <input type="text" placeholder="name" onChange={handleChange} />
    </div>
  );
};

export default Input;
