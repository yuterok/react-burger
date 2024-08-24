import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { request } from "../utils/request";

import styles from "./login.module.css";
import { Link } from "react-router-dom";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  EmailCustomInput,
  CustomInput,
  PasswordCustomInput,
} from "../components/forms/inputs";

export const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const navigate = useNavigate();

  const url = "https://norma.nomoreparties.space/api/auth/register";

  const data = {
    email: email,
    password: password,
    name: name,
  };

  const FetchRegister = async (e) => {
    e.preventDefault();

    const validateForm = () => {
      if (!email || !password || !name) {
        console.log("Все поля должны быть заполнены"); // Устанавливаем сообщение об ошибке
        return false;
      }
      return true;
    };

    if (!validateForm()) {
      return; // Прерываем выполнение, если форма невалидна
    }

    try {
      const res = await request(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      console.log("Registration successful:", res);
      navigate("/", { replace: true });
    } catch (error) {
      if (error.message == "User already exists") {
        alert("Пользователь с таким e-mail уже существует");
      }
      console.error("Registration failed:", error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Регистрация</h3>
        <form>
          <CustomInput
            value={name}
            setValue={setName}
            name="name"
            placeholder="Имя"
            extraClass="mt-6"
          />
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
          <Button
            htmlType="submit"
            type="primary"
            size="large"
            onClick={FetchRegister}
          >
            Зарегистрироваться
          </Button>
        </form>

        <div className={`${styles.link_container} mt-20 mb-4`}>
          <p className="text text_type_main-default text_color_inactive">
            Уже зарегистрированы?
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
