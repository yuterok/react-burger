import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";

export const HomePage = () => {
  return (
    <main className={styles.container}>
      <BurgerIngredients />
      <BurgerConstructor />
    </main>
  );
};
