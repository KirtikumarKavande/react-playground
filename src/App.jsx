import Form from "./contextDemo/Form";
import DisplayEmail from "./contextDemo/DisplayEmail";
import FormContexProvider from "./context/FormContexProvider";
import { Provider } from "react-redux";
import store from "./redux-store/store";
import ShowName from "./HOF/ShowName";
import Input from "./Debounce/Input";
import FormHook from "./hooks-practice/Form";
import Callback from "./useCallbackdemo/Callback";
import MemoizationDemo from "./useMemodemo/UseMemoDemo";
import SimpleUseCallbackFn from "./useCallbackdemo/SimpleUseCallbackFn";
import HOC from "./HOC/HOC";

const App = () => {
  return (
    <div>
      {/* <FormContexProvider> */}
      {/* <Provider store={store}> */}
        {/* <Form /> */}
        {/* <ShowName name={"kirti"}/> */}
        {/* <Input/> */}
        {/* <FormHook/> */}

        {/* <DisplayEmail /> */}
        {/* <Callback/> */}
        {/* <MemoizationDemo/> */}
      {/* </Provider> */}
      {/* </FormContexProvider> */}
      <HOC/>
      <SimpleUseCallbackFn/>
    </div>
  );
};

export default App;
