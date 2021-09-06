import React, { useState } from "react";

const Count = (props) => {
  const [count, setCount] = useState(0);
  const AddOne = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <button onClick={AddOne}>Count</button>
    </div>
  );
};

export default Count;
