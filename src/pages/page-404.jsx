import { Link } from "react-router-dom";

export const Page404 = () => {
  return (
    <div>
      <p>Ошибка 404</p>
      <p>Такой страницы не существует</p>
      <Link to="/">Вернуться на главную</Link>
    </div>
  );
};
