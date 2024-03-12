import { Link, Route, Routes } from "react-router-dom";
import { AboutAsyncPage } from "./async/about.async.page";
import { MainAsyncPage } from "./async/main.async.page";
import "./index.sass";
import { Suspense } from "react";

type Props = {};

const App = (props: Props) => {
  return (
    <div className="app">
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
