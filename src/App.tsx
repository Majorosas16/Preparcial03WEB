import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Detail from "./pages/Detail";
import Fav from "./pages/Favorites";
import CreateForm from "./pages/Create";
import ProtectedRoute from "./components/ProtectedRoute";
import EditForm from "./pages/Edit";
import CreateUser from "./pages/Register";
import { RoutesType } from "./Types/RoutesType";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path={RoutesType.register} element={<CreateUser />} />
          <Route path={RoutesType.home} element={<Home />} />
          <Route path={RoutesType.detail} element={<Detail />} />
          <Route path={RoutesType.favorites} element={<Fav />} />
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
