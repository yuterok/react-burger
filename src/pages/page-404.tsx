import { Link } from "react-router-dom";
import styles from "./login.module.css";

export const Page404 = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <p className="text text_type_main-large">Ошибка 404</p>
        <p className="text text_type_main-medium p-6">
          Такой страницы не существует
        </p>
        <Link className="text text_type_main-medium text_color_inactive" to="/">
          Вернуться на главную
        </Link>
      </div>
    </div>
  );
};
