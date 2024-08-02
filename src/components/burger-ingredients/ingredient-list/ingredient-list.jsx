import React, { useEffect, useState } from "react";
import ingredientsData from "../../../utils/data";
import IngredientItem from '../ingredient-item/ingredient-item';
import styles from "./ingredient-list.module.css";


const IngredientsList = ({ text, type }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredientsData);
  }, []);

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <>
    <p id={type} className="text text_type_main-medium">{text}</p>
    <ul className={styles.ingredients_list}>
      {filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} ingredient={ingredient} />
      ))}
    </ul>
    </>
  );
};

export default IngredientsList;