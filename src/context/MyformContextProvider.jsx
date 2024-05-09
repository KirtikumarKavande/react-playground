import FormContext from "./formContext";

const MyformContextProvider = ({ children }) => {
  return (
<div>
  <FormContext.Provider value={{ data: {} }}>
    {children}
  </FormContext.Provider>
</div>

  );
};

export default MyformContextProvider;
