import { useSelector, useDispatch } from "react-redux";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import styles from "./ingredient-item.module.css";
import { useModal } from "../../../hooks/useModal";

import {
  setCurrentIngredient,
  clearCurrentIngredient,
} from "../../../services/currentIngredient/actions";

const IngredientItem = ({ ingredient }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  const dispatch = useDispatch();

  const { currentIngredient } = useSelector((state) => state.currentIngredient);

  const setCurrentItem = () => {
    dispatch(setCurrentIngredient(ingredient));
    openModal();
  };

  const clearCurrentItem = () => {
    dispatch(clearCurrentIngredient());
    closeModal();
  };

  return (
    <li className={styles.ingredient_block + " pl-4"} onClick={setCurrentItem}>
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
      {isModalOpen && (
        <Modal onClose={clearCurrentItem}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.shape(IngredientType).isRequired,
};

export default IngredientItem;
