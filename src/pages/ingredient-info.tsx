import IngredientDetails from "../components/burger-ingredients/ingredient-details/ingredient-details";

import styles from "./ingredient-info.module.css";

export const IngredientInfo = () => {
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};
