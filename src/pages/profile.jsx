import { NavLink } from "react-router-dom";
import { EditEmailInput, EditPasswordInput, EditNameInput } from "../components/forms/inputs";
import {
    Typography
  } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export const Profile = () => {
    const nav_link_style = `${styles.link} text text_type_main-medium`
    const nav_link_style_active = `${styles.active} text text_type_main-medium`
  return (
    <div className={styles.container}>
      <div className={styles.menu}>
        <div className={styles.menu_inner}>
          <NavLink
            className={({ isActive }) =>(isActive ? `${nav_link_style_active}` : `${nav_link_style}`)}
            to="/profile"
          >
            Профиль
          </NavLink>
          <NavLink
            className={({ isActive }) =>(isActive ? `${nav_link_style_active}` : `${nav_link_style}`)}
            to="/profile/orders"
          >
            История заказов
          </NavLink>
          <NavLink
            className={({ isActive }) =>(isActive ? `${nav_link_style_active}` : `${nav_link_style}`)}
            to="/"
          >
            Выход
          </NavLink>
        </div>
        <p className="text text_type_main-default text_color_inactive mt-20">
          В этом разделе вы можете изменить свои персональные данные
        </p>
      </div>
      <div className={styles.info}>
        <div className={styles.form}>
        <EditNameInput />
        <EditEmailInput />
        <EditPasswordInput />
      </div>
    </div>
    </div>
  );
};
