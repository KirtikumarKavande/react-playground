import Form from "./contextDemo/Form";
import DisplayEmail from "./contextDemo/DisplayEmail";
import FormContexProvider from "./context/FormContexProvider";

const App = () => {
  return (
    <div>
      <FormContexProvider>
        <Form />
        <DisplayEmail />
      </FormContexProvider>
    </div>
  );
};

export default App;
