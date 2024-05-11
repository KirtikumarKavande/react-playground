import React from "react";
import Data from "./Data";
import useDebounce from "./useDebounce";

const App = () => {
  return (
    <div>
      <input
        type="text"
        className="border border-red-400"
        onChange={useDebounce((e) => {
          console.log(e.target.value);
        })}
      />
    </div>
  );
};

export default App;
