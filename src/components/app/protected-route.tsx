import { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { useAppSelector } from "../../services/store";

interface IProtectedRoute {
  onlyUnAuth?: boolean;
  component: ReactNode;
}

const ProtectedRoute = ({ onlyUnAuth = false, component }: IProtectedRoute): JSX.Element | null => {
  const { isAuthChecked, user } = useAppSelector((state) => state.user);
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

  return <>{component}</>;
};

export const OnlyAuth = ProtectedRoute;

export const OnlyUnAuth = ({ component }: { component: ReactNode }): JSX.Element | null => (
  <ProtectedRoute onlyUnAuth={true} component={component} />
);
