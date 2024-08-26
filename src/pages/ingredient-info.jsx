import IngredientDetails from "../components/burger-ingredients/ingredient-details/ingredient-details";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from './ingredient-info.module.css'

export const IngredientInfo = () => {
  let id = useParams().id;
  const { items } = useSelector((state) => state.ingredients);
  const currentIngredient = items.find((item) => item._id === id);
  return (
    <div className={styles.container}>
      <IngredientDetails ingredient={currentIngredient} />
    </div>
  );
};
