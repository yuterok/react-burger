import { useForm } from "../hooks/useForm";
import { Link, useNavigate } from "react-router-dom";
import styles from "./login.module.css";

import { EmailCustomInput } from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

import { request } from "../utils/request";
import { isEmailValid } from "../utils/form-validation";

export const ForgotPassword = () => {
  const { values, handleChange } = useForm({ email: '' });
  const navigate = useNavigate();

  const data = {
    email: values.email,
  };

  const FetchForgotPassword = async (e) => {
    e.preventDefault();
    if (isEmailValid(values.email)) {
      try {
        const res = await request('/password-reset', {
          method: "POST",
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(data),
        });
        console.log(res);
          localStorage.setItem("resetPassword", true);
          navigate("/reset-password", { replace: true });
      } catch (error) {
        if (error.message === "Invalid credentials provided") {
          alert("Введены неверные данные");
        }
        console.error("Password reset failed:", error);
      }
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Восстановление пароля</h3>
        <form onSubmit={FetchForgotPassword}>
        <EmailCustomInput
          value={values.email}
          onChange={handleChange}
          extraClass="mt-6 mb-6"
        />
        <Button
          htmlType="submit"
          type="primary"
          size="large"
        >
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


