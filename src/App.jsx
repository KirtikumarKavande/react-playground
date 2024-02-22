import { useState } from "react";
import useDebounce from "./hooks/useDebounce";

const App = () => {
  const [text, setText] = useState("");

  return (
    <div>
      <input
        type="text"
        onChange={useDebounce((e) => {
          setText(e.target.value);
        })}
      />
      <div>{text}</div>
    </div>
  );
};

export default App;
