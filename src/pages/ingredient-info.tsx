import IngredientDetails from "../components/burger-ingredients/ingredient-details/ingredient-details";

import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

import styles from "./ingredient-info.module.css";
import { useAppSelector } from "../services/store";

export const IngredientInfo = () => {
  const id = useParams().id;
  const { items } = useAppSelector((state) => state.ingredients);
  const currentIngredient = items.find((item) => item._id === id);
  return (
    <div className={styles.container}>
      <IngredientDetails />
    </div>
  );
};
