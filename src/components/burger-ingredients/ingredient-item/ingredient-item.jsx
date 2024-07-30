import { Counter, CurrencyIcon} from "@ya.praktikum/react-developer-burger-ui-components";
import PropTypes from 'prop-types';
import styles from "./ingredient-item.module.css";

const IngredientItem = ({ ingredient }) => {
    return (
      <li className={styles.ingredient_block + " pl-4"}>
        {ingredient._id !== "60666c42cc7b410027a1a9b2" ? <Counter count={1} size="default" extraClass="m-1" /> : ''}
        <img src={ingredient.image} alt={ingredient.name} />
        <span className={styles.item_price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>{" "}
          <CurrencyIcon type="primary" />
        </span>
        <p className="text text_type_main-default">{ingredient.name}</p>
      </li>
    );
  };
  
  IngredientItem.propTypes = {
    ingredient: PropTypes.shape({
      _id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    }).isRequired,
  };

  export default IngredientItem;