import React, { useEffect, useState } from "react";
import ingredientsData from "../../../utils/data";
import IngredientItem from '../ingredient-item/ingredient-item';
import styles from "./ingredient-list.module.css";


const IngredientsList = ({ type }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredientsData);
  }, []);

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <ul className={styles.ingredients_list}>
      {filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

export default IngredientsList;