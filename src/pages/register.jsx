import { useForm } from "../hooks/useForm";
import { useDispatch } from "react-redux";
import { fetchRegister } from "../services/user/actions";
import { isEmailValid } from "../utils/form-validation";

import styles from "./login.module.css";
import { Link } from "react-router-dom";

import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  EmailCustomInput,
  CustomInput,
  PasswordCustomInput,
} from "../components/ui-components/inputs";

export const Register = () => {
  const { values, handleChange } = useForm({
    name: "",
    email: "",
    password: "",
  });

  const dispatch = useDispatch();

  const data = {
    email: values.email,
    password: values.password,
    name: values.name,
  };

  const register = async (e) => {
    e.preventDefault();
    if (!isEmailValid(values.email)) {
      return;
    }
    dispatch(fetchRegister(data));
  };

  return (
    <div className={styles.container}>
      <div className={styles.container_inner}>
        <h3 className="text text_type_main-medium">Регистрация</h3>
        <form onSubmit={register}>
          <CustomInput
            value={values.name}
            onChange={handleChange}
            name="name"
            placeholder="Имя"
            extraClass="mt-6"
          />
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
