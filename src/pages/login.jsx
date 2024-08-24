import { Link } from "react-router-dom";
import styles from "./login.module.css";

import {
  EmailCustomInput,
  PasswordCustomInput,
} from "../components/forms/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Вход</h3>
        <EmailCustomInput extraClass="mt-6 mb-6" />
        <PasswordCustomInput extraClass="mb-6" />
        <Button htmlType="button" type="primary" size="large">
          Войти
        </Button>
        <div className={`${styles.link_container} mt-20 mb-4`}>
          <p className="text text_type_main-default text_color_inactive">
            Вы - новый пользователь?
          </p>
          <Link
            className={`${styles.link} text text_type_main-default`}
            to="/register"
          >
            Зарегистрироваться
          </Link>
        </div>
        <div className={styles.link_container}>
          <p className="text text_type_main-default text_color_inactive">
            Забыли пароль?
          </p>
          <Link
            className={`${styles.link} text text_type_main-default`}
            to="/forgot-password"
          >
            Восстановить пароль
          </Link>
        </div>
      </div>
    </div>
  );
};
