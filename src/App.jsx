import { useState } from "react";
import { useReducer } from "react";

const App = () => {
  const reducerfunc = (state, action) => {
   switch(action.type)
   {
    case "email":
      return {...state,email:action.value}
   }
         
  
  };
  const [state, dispatch] = useReducer(reducerfunc, {
    email: "",
    password: "",
  });

  const handleEmailChange = (e) => {
    dispatch({ type: "email", value: e.target.value });
  };
  const handlePassChange = () => {};
  return (
    <div>
      email:{state.email}
      <input className="border border-black" name="email" onChange={handleEmailChange} />
      <input  className="border border-black"  name="password" onChange={handlePassChange} />
    </div>
  );
};

export default App;
