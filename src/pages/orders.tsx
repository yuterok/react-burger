import { useEffect, FC } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/user/actions";
import { FormattedDate } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useAppDispatch, useAppSelector } from "../services/store";

export const Orders: FC = () => {
  const nav_link_style: string = `${styles.link} text text_type_main-medium`;
  const nav_link_style_active: string = `${styles.active} text text_type_main-medium`;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();


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
            end
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
          В этом разделе вы можете просмотреть свою историю заказов
        </p>

      </div>
      <div className={styles.info}></div>
    </div>
  );
};
