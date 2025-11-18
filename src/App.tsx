import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import FieldPage from "./pages/Field";
// import DexPage from "./pages/Dex";
import Home from "./pages/Home";
// import { RoutesType } from "./Types/RoutesType";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path={RoutesType.create} element={<FieldPage />} />
          <Route path={RoutesType.edit} element={<DexPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
