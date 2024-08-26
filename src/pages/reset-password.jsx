import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

import { PasswordCustomInput, CustomInput } from "../components/forms/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { request } from "../utils/request";
import { BASE_URL } from "../utils/constants";

export const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [code, setCode] = useState("");

  const navigate = useNavigate();

  const url = BASE_URL + "/password-reset/reset";
  const data = {
    password: password,
    token: code,
  };

  const FetchResetPassword = async () => {
    if (code && password) {
      try {
        const res = await request(url, {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (res.success) {
          localStorage.removeItem('resetPassword');
          navigate("/login", { replace: true });
        } else {
          alert("Данные неверны!");
        }
      } catch (error) {
        if (error.message == "Invalid credentials provided") {
          alert("Введены неверные данные");
        }
        console.error("Failed:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Восстановление пароля</h3>
          <PasswordCustomInput
            placeholder="Введите новый пароль"
            extraClass="mt-6 mb-6"
            value={password}
            setValue={setPassword}
          />
          <CustomInput
            name="sequre-code"
            placeholder="Введите код из письма"
            extraClass="mb-6"
            value={code}
            setValue={setCode}
          />
          <Button
            onClick={FetchResetPassword}
            htmlType="submit"
            type="primary"
            size="large"
          >
            Восстановить
          </Button>
        <div className={`${styles.link_container} mt-20 mb-4`}>
          <p className="text text_type_main-default text_color_inactive">
            Вспомнили пароль?
          </p>
          <Link
            className={`${styles.link} text text_type_main-default`}
            to="/login"
          >
            Войти
          </Link>
        </div>
      </div>
    </div>
  );
};
