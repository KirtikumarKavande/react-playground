import Form from "./FormInfo";
import MyformContextProvider from "./context/MyformContextProvider";

const App = () => {
 
  return (
      <MyformContextProvider>
      <Form />
      </MyformContextProvider>
  );
};

export default App;
