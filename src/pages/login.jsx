import { Link, useLocation } from "react-router-dom";
import { isEmailValid } from "../utils/form-validation";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fetchLogin } from "../services/user/actions";
import { useSelector } from "react-redux";

import styles from "./login.module.css";

import {
  EmailCustomInput,
  PasswordCustomInput,
} from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

export const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginRequest, loginFailed } = useSelector((state) => state.user);

  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();

  const data = {
    email: email,
    password: password,
  };
  const login = async (e) => {
    e.preventDefault();
    const validateForm = () => {
      if (!email || !password) {
        return false;
      }
      return true;
    };
    if (!validateForm() || !isEmailValid(email)) {
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
        <EmailCustomInput
          value={email}
          setValue={setEmail}
          extraClass="mt-6 mb-6"
        />
        <PasswordCustomInput
          value={password}
          setValue={setPassword}
          extraClass="mb-6"
        />
        <Button htmlType="button" type="primary" size="large" onClick={login}>
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
