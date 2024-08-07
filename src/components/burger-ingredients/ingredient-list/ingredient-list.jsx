import IngredientItem from "../ingredient-item/ingredient-item";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import styles from "./ingredient-list.module.css";

const IngredientsList = ({ type, ingredients }) => {
  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <div className={styles.ingredients_list}>
      <p id={type} className="text text_type_main-medium">
        {type === "bun"
          ? "Булки"
          : type === "sauce"
          ? "Соусы"
          : type === "main"
          ? "Начинка"
          : "Другое"}
      </p>
      <ul className={styles.ingredients_list_inner}>
        {filteredIngredients.map((ingredient) => (
          <IngredientItem key={ingredient._id} ingredient={ingredient} />
        ))}
      </ul>
    </div>
  );
};

IngredientsList.propTypes = {
  type: PropTypes.string.isRequired,
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
};

export default IngredientsList;
