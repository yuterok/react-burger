import { useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOut, updateUserProfile } from "../services/user/actions";
import {
  EditEmailInput,
  EditPasswordInput,
  EditNameInput,
} from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useForm } from "../hooks/useForm";
import { useAppDispatch, useAppSelector } from "../services/store";

export const Profile: FC = () => {
  const nav_link_style: string = `${styles.link} text text_type_main-medium`;
  const nav_link_style_active: string = `${styles.active} text text_type_main-medium`;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const { user } = useAppSelector((state) => state.user);

  const { values, handleChange, setValues } = useForm({
    name: user!.name,
    email: user!.email,
  });

  useEffect(() => {
    setValues({
      name: user!.name,
      email: user!.email,
      password: "",
    });
  }, [user, setValues]);

  const handleSave = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (values.name && values.email) {
      dispatch(updateUserProfile(values));
    }
  };

  const handleCancel = (): void => {
    setValues({
      name: user!.name,
      email: user!.email,
      password: "",
    });
  };

  const loggingOut = (): void => {
    navigate("/login");
    dispatch(logOut());
  };

  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menu_inner}>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${nav_link_style_active}` : `${nav_link_style}`
            }
            to="/profile"
          >
            Профиль
          </NavLink>
          <NavLink
            className={({ isActive }) =>
              isActive ? `${nav_link_style_active}` : `${nav_link_style}`
            }
            to="/profile/orders"
            end
          >
            История заказов
          </NavLink>
          <NavLink className={nav_link_style} onClick={loggingOut} to="/">
            Выход
          </NavLink>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-25">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.info}>
        <form onSubmit={handleSave} className={styles.form}>
          <EditNameInput value={values.name} onChange={handleChange} />
          <EditEmailInput value={values.email} onChange={handleChange} />
          <EditPasswordInput value={values.password} onChange={handleChange} />
          <div className={styles.buttons}>
            <Button
              onClick={handleCancel}
              type="secondary"
              size="medium"
              htmlType="button"
            >
              Отмена
            </Button>
            <Button type="primary" size="medium" htmlType="submit">
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};
