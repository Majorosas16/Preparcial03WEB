import { useSelector } from "react-redux";
import type { RootState } from "../redux/store";
import { Navigate } from "react-router-dom";
import { RoutesType } from "../Types/RoutesType";

const ProtectedRoute: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const authUser = useSelector((state: RootState) => state.rickMorty.userType);

  // Si el usuario no es admin, redirigir a la página de HOME
  if (authUser !== "admin") {
    return <Navigate to={RoutesType.home} replace />;
  }
  return children;
};

export default ProtectedRoute;