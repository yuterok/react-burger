import { useEffect } from "react";
import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

import {
  PasswordCustomInput,
  CustomInput,
} from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { request, getErrorMessage } from "../utils/request";

export const ResetPassword = () => {
  const { values, handleChange } = useForm({ password: "", code: "" });

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("resetPassword")) {
      navigate("/forgot-password");
    }
  }, [navigate]);

  const data = {
    password: values.password,
    token: values.code,
  };

  const FetchResetPassword = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await request("/password-reset/reset", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      localStorage.removeItem("resetPassword");
      navigate("/login", { replace: true });
    } catch (error) {
      if (getErrorMessage(error) === "Invalid credentials provided") {
        alert("Введены неверные данные");
      }
      console.error("Failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Восстановление пароля</h3>
        <form onSubmit={FetchResetPassword}>
          <PasswordCustomInput
            placeholder="Введите новый пароль"
            extraClass="mt-6 mb-6"
            value={values.password}
            onChange={handleChange}
          />
          <CustomInput
            name="code"
            placeholder="Введите код из письма"
            extraClass="mb-6"
            value={values.code}
            onChange={handleChange}
          />
          <Button htmlType="submit" type="primary" size="large">
            Восстановить
          </Button>
        </form>
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
