import { useState } from "react";
import classes from "./counter.module.sass";

type Props = {};

const Counter = (props: Props) => {
  const [value, setValue] = useState(0);
  return (
    <div className={classes.button}>
      Counter
      <div>{value}</div>
      <button onClick={() => setValue((oldValue) => oldValue + 1)}>
        Increment value
      </button>
    </div>
  );
};

export default Counter;
