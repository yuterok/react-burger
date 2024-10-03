import { FC, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { logOut } from "../services/user/actions";
import styles from "./orders.module.css";
import { useAppDispatch, useAppSelector } from "../services/store";
import {
  connectProfileOrders,
  disconnectProfileOrders,
} from "../services/order-info/profile-actions";
import { OrdersList } from "../components/orders/orders-list/orders-list";

export const Orders: FC = () => {
  const nav_link_style: string = `${styles.link} text text_type_main-medium`;
  const nav_link_style_active: string = `${styles.active} text text_type_main-medium`;

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("accessToken")?.split("Bearer ")[1]!;
    dispatch(connectProfileOrders(token));

    return () => {
      dispatch(disconnectProfileOrders());
    };
  }, [dispatch]);
  const { userOrders } = useAppSelector((state) => state.orderProfile);
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
      <div className={styles.orders_list}>
        {userOrders.length < 1 ? (
          <p>
            Заказов пока нет. Скорее заказывайте самые вкусные космические
            бургеры!!
          </p>
        ) : (
          <OrdersList />
        )}
      </div>
    </div>
  );
};
