import React, { useEffect, useState } from "react";

import {
  CurrencyIcon,
  ConstructorElement,
  Typography,
  Box,
  Button,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import IngredientType from "../../utils/types";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import { useModal } from "../../hooks/useModal";

const Cart = ({ ingredients }) => {
  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return null;
  }

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type == "sauce" || ingredient.type == "main"
  );

  const selectedBun = ingredients[0];

  return (
    <div className={styles.cart_container + " mt-25 mb-10"}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={selectedBun.name + " (верх)"}
        price={selectedBun.price}
        thumbnail={selectedBun.image}
      />
      <ul className={styles.cart_container_inner + " mb-4 custom-scroll"}>
        {filteredIngredients.map((ingredient) => (
          <CartIngredientItem key={ingredient._id} ingredient={ingredient} />
        ))}
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={selectedBun.name + " (низ)"}
        price={selectedBun.price}
        thumbnail={selectedBun.image}
      />
    </div>
  );
};

const CartIngredientItem = ({ ingredient }) => {
  return (
    <ConstructorElement
      text={ingredient.name}
      price={ingredient.price}
      thumbnail={ingredient.image}
    />
  );
};

CartIngredientItem.propTypes = IngredientType;

const Total = (props) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className="text text_type_digits-medium">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        onClick={openModal}
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="ml-2"
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

const BurgerConstructor = ({ ingredients }) => {
  return (
    <div className={styles.container}>
      <Cart ingredients={ingredients} />
      <Total price="610" />
    </div>
  );
};

export default BurgerConstructor;
