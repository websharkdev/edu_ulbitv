import { useState } from "react";
import "./counter.sass";

type Props = {};

const Counter = (props: Props) => {
  const [value, setValue] = useState(0);
  return (
    <div>
      Counter
      <div>{value}</div>
      <button onClick={() => setValue((oldValue) => oldValue + 1)}>
        Increment value
      </button>
    </div>
  );
};

export default Counter;
