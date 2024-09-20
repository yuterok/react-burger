import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";

import {
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./app-header.module.css";
import { NavLink } from "react-router-dom";
import { FC } from "react";
import { useAppSelector } from "../../services/store";

interface ICustomNavLink {
  link: string;
  text: string;
  Icon: any;
}

const CustomNavLink: FC<ICustomNavLink> = ({ link, text, Icon }) => {
  const nav_link_style = `${styles.nav_link} text text_type_main-default pl-5 pr-5 pb-5 pt-5`;
  const nav_link_style_active = `${styles.nav_link} ${styles.active} text text_type_main-default pl-5 pr-5 pb-5 pt-5`;
  return (
    <NavLink
      to={link}
      end
      className={({ isActive }) =>
        isActive ? `${nav_link_style_active}` : `${nav_link_style}`
      }
    >
      <Icon type="primary" />
      {text}
    </NavLink>
  );
};

const AppHeader: FC = () => {
  const { user } = useAppSelector((state) => state.user);

  return (
    <>
      <header className={styles.header + " p-4"}>
        <div className={styles.container}>
          <div className={styles.nav_section}>
            <CustomNavLink link="/" text="Конструктор" Icon={BurgerIcon} />
            <CustomNavLink
              link="/profile/orders"
              text="Лента заказов"
              Icon={ListIcon}
            />
          </div>

          <NavLink to="/">
            {" "}
            <Logo />
          </NavLink>

          <div className={styles.nav_section}>
            <CustomNavLink
              link="/profile"
              text={user ? user.name : "Личный кабинет"}
              Icon={ProfileIcon}
            />
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
