import { useSelector } from "react-redux";
import { useLocation, Navigate } from "react-router-dom";

const ProtectedRoute = ({ onlyUnAuth = false, component }) => {
  const { isAuthChecked, user } = useSelector((state) => state.user);
  const location = useLocation();

  if (!isAuthChecked) {
    return <p>Загрузка пользователя</p>;
  }

  if (onlyUnAuth && user) {
    const { from } = location.state || { from: { pathname: "/" } };
    return <Navigate to={from.pathname} />;
  }

  if (!onlyUnAuth && !user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return component;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ component }) => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
