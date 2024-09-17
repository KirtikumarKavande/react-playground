import Form from "./contextDemo/Form";
import DisplayEmail from "./contextDemo/DisplayEmail";
import FormContexProvider from "./context/FormContexProvider";
import { Provider } from "react-redux";
import store from "./redux-store/store";

const App = () => {
  return (
    <div>
      {/* <FormContexProvider> */}
      <Provider store={store}>
        <Form />
        <DisplayEmail />
      </Provider>
      {/* </FormContexProvider> */}
    </div>
  );
};

export default App;
