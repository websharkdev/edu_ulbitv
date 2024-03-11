import Counter from "./components/counter";
import "./index.sass";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
      <h1>Hello world!</h1>
      <Counter />
    </div>
  );
};

export default App;
