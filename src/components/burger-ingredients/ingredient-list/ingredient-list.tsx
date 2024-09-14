import { useSelector } from "react-redux";
import IngredientItem from "../ingredient-item/ingredient-item";
import PropTypes from "prop-types";
import styles from "./ingredient-list.module.css";
import { useAppSelector } from "../../../services/store";
import { FC } from "react";

interface IngredientsListProps {
  type: string;
}
const IngredientsList: FC<IngredientsListProps> = ({ type }) => {
  const { items } = useAppSelector((state) => state.ingredients);
  const filteredIngredients = items.filter(
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
};

export default IngredientsList;
