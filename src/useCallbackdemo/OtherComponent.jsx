import React from "react";

const Increment = ({ incrementFn }) => {
  console.log("logged increment");

  return <div onClick={incrementFn}>Increment</div>;
};

export default React.memo(Increment);
