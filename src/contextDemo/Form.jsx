import { useContext, useState } from "react";
import FormContext from "../context/Context";
import { useDispatch } from "react-redux";
import { formInfo } from "../redux-store/form-slice";

const Form = () => {
  const [formData, setFormData] = useState({});
  const dispatch=useDispatch()

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(formInfo(formData) )
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="email"
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, email: e.target.value };
          });
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(e) => {
          setFormData((prev) => {
            return { ...prev, password: e.target.value };
          });
        }}
      />
      <button>Submit</button>
    </form>
  );
};

export default Form;
