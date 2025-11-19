import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CreateForm from "./pages/Create";
import ProtectedRoute from "./components/ProtectedRoute";
import EditForm from "./pages/Edit";
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
          <Route
            // path={RoutesType.edit}
            path={"edit/:id"}
            element={
              <ProtectedRoute>
                <EditForm />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </>
  );
}

export default App;
