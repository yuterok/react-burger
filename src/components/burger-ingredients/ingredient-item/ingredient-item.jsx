import { useState } from "react";

import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import IngredientType from "../../../utils/types";
import styles from "./ingredient-item.module.css";
import { useModal } from "../../../hooks/useModal";

const IngredientItem = ({ ingredient }) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <li className={styles.ingredient_block + " pl-4"} onClick={openModal}>
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
        <Modal onClose={closeModal}>
          <IngredientDetails ingredient={ingredient} />
        </Modal>
      )}
    </li>
  );
};

IngredientItem.propTypes = IngredientType;

export default IngredientItem;
