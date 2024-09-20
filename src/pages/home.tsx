import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";
import { FC } from "react";

export const HomePage:FC = () => {
  return (
    <main className={styles.container}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};
