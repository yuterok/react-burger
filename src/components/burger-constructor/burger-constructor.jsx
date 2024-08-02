import {
  DragIcon,
  CurrencyIcon,
  LockIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import React, { useEffect, useState } from "react";

import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-constructor.module.css";
import PropTypes from "prop-types";

const Cart = ({ingredients}) => {

  if (!Array.isArray(ingredients) || ingredients.length === 0) {
    return null;
  };

  const filteredIngredients = ingredients.filter(
          (ingredient) =>
            ingredient.type == "sauce" || ingredient.type == "main"
        )

  filteredIngredients.push(ingredients[0]); // чтобы сверху и снизу была одна булка
  filteredIngredients.unshift(ingredients[0]);

  return (
    <ul
      className={styles.cart_container + " mt-25 mb-10 + custom-scroll"}
    >
      {filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

const IngredientItem = ({ key, ingredient }) => {
  return (
    <li className={styles.ingredient_item + " pt-4 pb-4"}>
      {ingredient.type !== "bun" ? <DragIcon type="primary" /> : <div></div>}
      <div className={styles.ingredient_container + " pl-6 pt-4 pb-4 pr-8"}>
        <img src={ingredient.image} alt={ingredient.name} />
        <p className="text text_type_main-default">{ingredient.name}</p>
        <span className={styles.item_price}>
          <p className="text text_type_digits-default">{ingredient.price}</p>{" "}
          <CurrencyIcon type="primary" />
        </span>
        {ingredient.type == "bun" ? (
          <LockIcon type="primary" />
        ) : (
          <DeleteIcon type="primary" />
        )}
      </div>
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

const Total = (props) => {
  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className="text text_type_digits-medium">{props.price}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button htmlType="button" type="primary" size="medium" extraClass="ml-2">
        Оформить заказ
      </Button>
    </div>
  );
};

const BurgerConstructor = ({ingredients}) => {
  return (
    <div className={styles.container}>
      <Cart ingredients={ingredients}/>
      <Total price="610" />
    </div>
  );
};

export default BurgerConstructor;

// не забыть делать проверку propTypes
