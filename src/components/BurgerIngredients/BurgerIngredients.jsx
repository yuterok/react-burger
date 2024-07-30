import React, { useEffect, useState } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./BurgerIngredients.module.css";
import ingredientsData from "../../utils/data";
import PropTypes from 'prop-types';

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

const IngredientsList = ({ type }) => {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setIngredients(ingredientsData);
  }, []);

  const filteredIngredients = ingredients.filter(
    (ingredient) => ingredient.type === type
  );

  return (
    <ul className={styles.ingredients_list}>
      {filteredIngredients.map((ingredient) => (
        <IngredientItem key={ingredient._id} ingredient={ingredient} />
      ))}
    </ul>
  );
};

const TabIngredients = () => {
  const [current, setCurrent] = React.useState("one");
  const handleTabClick = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div style={{ display: "flex" }}>
      <Tab href="bun" value="bun" active={current === "bun"} onClick={handleTabClick}>Булки
      </Tab>
      <Tab value="sauce" active={current === "sauce"} onClick={handleTabClick}>Соусы
      </Tab>
      <Tab value="main" active={current === "main"} onClick={handleTabClick}>Начинки
      </Tab>
    </div>
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

const BurgerIngredients = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <TabIngredients />
      <div className={styles.ingredients_container + " mt-10 + custom-scroll"}>
        <p id="bun" className="text text_type_main-medium">
          Булки
        </p>
        <IngredientsList type="bun"></IngredientsList>
        <p id="sauce" className="text text_type_main-medium">
          Соусы
        </p>
        <IngredientsList type="sauce"></IngredientsList>
        <p id="main" className="text text_type_main-medium">
          Начинка
        </p>
        <IngredientsList type="main"></IngredientsList>
      </div>
    </div>
  );
};

export default BurgerIngredients;
