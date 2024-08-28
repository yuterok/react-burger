import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { logOut, updateUserProfile } from "../services/user/actions";
import {
  EditEmailInput,
  EditPasswordInput,
  EditNameInput,
} from "../components/ui-components/inputs";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export const Profile = () => {
  const nav_link_style = `${styles.link} text text_type_main-medium`;
  const nav_link_style_active = `${styles.active} text text_type_main-medium`;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.user);

  const [formValues, setFormValues] = useState({
    email: user.email,
    name: user.name,
    password: "",
  });
  const [originalValues, setOriginalValues] = useState({
    email: user.email,
    name: user.name,
  });

  useEffect(() => {
    if (user) {
      setFormValues({ email: user.email, name: user.name, password: "" });
      setOriginalValues({ email: user.email, name: user.name });
    }
  }, [user]);

  const handleSave = () => {
    dispatch(updateUserProfile(formValues));
  };

  const handleCancel = () => {
    setFormValues({ ...originalValues, password: "" });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const loggingOut = () => {
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
        <div className={styles.form}>
          <EditNameInput value={formValues.name} setValue={handleInputChange} />
          <EditEmailInput
            value={formValues.email}
            setValue={handleInputChange}
          />
          <EditPasswordInput
            value={formValues.password}
            setValue={handleInputChange}
          />
          <div className={styles.buttons}>
            <Button
              onClick={handleCancel}
              type="secondary"
              size="medium"
              htmlType="button"
            >
              Отмена
            </Button>
            <Button
              onClick={handleSave}
              type="primary"
              size="medium"
              htmlType="button"
            >
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
