import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useForm } from "../hooks/useForm";
import { fetchLogin } from "../services/user/actions";
import { useSelector } from "react-redux";
import { isEmailValid } from "../utils/form-validation";
import styles from "./login.module.css";

import {
  EmailCustomInput,
  PasswordCustomInput,
} from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {
  const { values, handleChange } = useForm({ email: "", password: "" });

  const { loginRequest, loginFailed } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const data = {
    email: values.email,
    password: values.password,
  };
  const login = async (e) => {
    e.preventDefault();
    if (!isEmailValid(values.email)) {
      return;
    }
    dispatch(fetchLogin(data));
    if (!loginRequest && !loginFailed) {
      const from = location.state?.from?.pathname || "/";
      navigate(from, { replace: true });
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Вход</h3>
        <form onSubmit={login}>
          <EmailCustomInput
            value={values.email}
            onChange={handleChange}
            extraClass="mt-6 mb-6"
          />
          <PasswordCustomInput
            value={values.password}
            onChange={handleChange}
            extraClass="mb-6"
          />
          <Button htmlType="submit" type="primary" size="large">
            Войти
          </Button>
        </form>
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
