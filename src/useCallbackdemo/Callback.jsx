import { useCallback, useState } from "react";
import OtherComponent from "./OtherComponent";
import Decrement from "./Decrement";
import Increment from "./OtherComponent";

const Callback = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(100);

  let increment = useCallback(() => {
    return setCount(count + 1);
  }, [count]);

  function decrement() {
    setCount2(count2 - 1);
  }

  return (
    <div>
      <Increment incrementFn={increment} />
      <Decrement decrementFn={decrement} />
    </div>
  );
};

export default Callback;
