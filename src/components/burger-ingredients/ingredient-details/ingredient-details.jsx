import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import styles from "./ingredient-details.module.css";
import { IngredientType } from "../../../utils/types";

const IngredientDetails = () => {
  const id = useParams().id;
  const { items } = useSelector((state) => state.ingredients);
  const ingredient = items.find((item) => item._id === id);
  return (
    <div className={styles.container}>
      <h2 className={styles.title + " text text_type_main-large"}>
        Детали ингредиента
      </h2>
      <img src={ingredient.image_large} alt={ingredient.name} />
      <p className="text text_type_main-medium">{ingredient.name}</p>
      <div className={styles.ingredient_info}>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{ingredient.calories}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{ingredient.proteins}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{ingredient.fat}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">
            {ingredient.carbohydrates}
          </p>
        </div>
      </div>
    </div>
  );
};

IngredientDetails.propTypes = {
  ingredient: IngredientType,
};

export default IngredientDetails;
