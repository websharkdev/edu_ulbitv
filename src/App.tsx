import { Suspense } from "react";
import { Link, Route, Routes } from "react-router-dom";
import { AboutAsyncPage } from "./async/about.async.page";
import { MainAsyncPage } from "./async/main.async.page";
import { useTheme } from "./hooks/useTheme";
import "./styles/index.sass";

type Props = {};

const App = (props: Props) => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={`app ${theme}`}>
      <button onClick={toggleTheme}>Toggle theme</button>
      <Link to="/" children="Main" />
      <Link to="/about" children="About" />

      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<MainAsyncPage />} />
          <Route path="/about" element={<AboutAsyncPage />} />
        </Routes>
      </Suspense>
    </div>
  );
};

export default App;
