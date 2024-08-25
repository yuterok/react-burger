import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

import { EmailCustomInput } from "../components/forms/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { request } from "../utils/request";
import { BASE_URL } from "../utils/constants";
import {isEmailValid} from "../utils/form-validation";

export const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const url = BASE_URL + "/password-reset";
  const data = {
    email: email,
  };

  const FetchForgotPassword = async () => {
    if (isEmailValid(email)) {
      try {
        const res = await request(url, {
          method: "POST",
          body: JSON.stringify(data),
        });
        if (res.success && email) {
          console.log(res);
          navigate("/reset-password", { replace: true });
        }
      } catch (error) {
        if (error.message == "Invalid credentials provided") {
          alert("Введены неверные данные");
        }
        console.error("Registration failed:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Восстановление пароля</h3>
          <EmailCustomInput
            value={email}
            setValue={setEmail}
            extraClass="mt-6 mb-6"
          />
          <Button
            onClick={FetchForgotPassword}
            htmlType="button"
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
