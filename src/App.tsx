import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/Create";
import ProtectedRoute from "./components/ProtectedRoute";
import { RoutesType } from "./Types/RoutesType";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={RoutesType.home} element={<Home />} />
          <Route
            path={RoutesType.create}
            element={
              <ProtectedRoute>
                <CreateForm />
              </ProtectedRoute>
            }
          />

          {/* <Route path={RoutesType.edit} element={<DexPage />} /> */}
        </Routes>
      </Router>
    </>
  );
}

export default App;
