import FormContext from "./formContext";

const MyformContextProvider = ({ children }) => {
  return (
<div>
  <FormContext.Provider value={{ data: {} }}>
    {children}
  </FormContext.Provider>
</div>

    // <FormContext.Provider value={{ data: {} }}>{children}</FormContext.Provider>
  );
};

export default MyformContextProvider;
