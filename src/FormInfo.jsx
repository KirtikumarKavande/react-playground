import React, { useContext } from "react";
import FormContext from "./context/formContext";

const Form = () => {

  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

 const innerData= useContext(FormContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    innerData.setFormData(formData)
  };
  console.log(innerData)

  return (
    <form onSubmit={handleSubmit}>
        {innerData.data.email}
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        className="border border-black"
      />
      <input
        type="text"
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
        className="border border-black"
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
