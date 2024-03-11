import { render } from "react-dom";
import Counter from "./components/counter";

render(
  <div>
    Hello there!
    <Counter />
  </div>,
  document.getElementById("root")
);
