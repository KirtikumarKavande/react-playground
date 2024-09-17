import Form from "./contextDemo/Form";
import DisplayEmail from "./contextDemo/DisplayEmail";
import FormContexProvider from "./context/FormContexProvider";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import ShowName from "./HOF/ShowName";
import Input from "./Debounce/Input";

const App = () => {
  return (
    <div>
      {/* <FormContexProvider> */}
      <Provider store={store}>
        {/* <Form /> */}
        {/* <ShowName name={"kirti"}/> */}
        <Input/>

        {/* <DisplayEmail /> */}
      </Provider>
      {/* </FormContexProvider> */}
    </div>
  );
};

export default App;
