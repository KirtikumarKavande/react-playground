import React, { useReducer, useState } from "react";
import FormContext from "./Context";
import formReducer from "../contextDemo/reducers/formReducer";

const FormContexProvider = ({ children }) => {
const [form,dispatch]= useReducer(formReducer,{email:""})
console.log("kkk",form)

  
  let formData = {
    email: form.email,
    dispatch:dispatch
  };
  return (
    <div>
      <FormContext.Provider value={formData}>{children}</FormContext.Provider>
    </div>
  );
};

export default FormContexProvider;
