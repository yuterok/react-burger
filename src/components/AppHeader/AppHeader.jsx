import { Logo } from "@ya.praktikum/react-developer-burger-ui-components";
import {
  ListIcon,
  BurgerIcon,
  ProfileIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./AppHeader.module.css";

const NavLink = ({ link, text, Icon }) => {
  return (
    <a
      href={link}
      className={
        styles.nav_link + " text text_type_main-default pl-5 pr-5 pb-5 pt-5"
      }
    >
      <Icon type="primary" />
      {text}
    </a>
  );
};

const AppHeader = () => {
  return (
    <>
      <header className={styles.header + " p-4"}>
        <div className={styles.container}>
          <div className={styles.nav_section}>
            <NavLink link="#" text="Конструктор" Icon={BurgerIcon} />
            <NavLink link="#" text="Лента заказов" Icon={ListIcon} />
          </div>
          <div className={styles.logo}>          <Logo/></div>

          <div className={styles.nav_section}>
            <NavLink link="#" text="Личный кабинет" Icon={ProfileIcon} />
          </div>
        </div>
      </header>
    </>
  );
};

export default AppHeader;
