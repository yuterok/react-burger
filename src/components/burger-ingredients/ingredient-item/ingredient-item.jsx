import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useState } from "react";
import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import PropTypes from "prop-types";
import styles from "./ingredient-item.module.css";

const IngredientItem = ({ ingredient }) => {
  const [modalActive, setModalActive] = useState(false);

  return (
    <li
      className={styles.ingredient_block + " pl-4"}
      onClick={() => setModalActive(true)}
    >
      {ingredient._id !== "60666c42cc7b410027a1a9b2" ? (
        <Counter count={1} size="default" extraClass="m-1" />
      ) : (
        ""
      )}
      <img src={ingredient.image} alt={ingredient.name} />
      <span className={styles.item_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>{" "}
        <CurrencyIcon type="primary" />
      </span>
      <p className="text text_type_main-default">{ingredient.name}</p>
      <Modal active={modalActive} setActive={setModalActive}>
        <IngredientDetails ingredient={ingredient} />
      </Modal>
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
