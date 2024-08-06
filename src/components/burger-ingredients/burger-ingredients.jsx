import { useState } from "react";
import { IngredientType } from "../../utils/types";
import PropTypes from "prop-types";
import {
  Tab,
  Typography,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import IngredientsList from "./ingredient-list/ingredient-list";

const TabIngredients = () => {
  const [current, setCurrent] = useState("bun");

  const handleTabClick = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className={styles.tabs}>
      <Tab
        id="bun"
        value="bun"
        active={current === "bun"}
        onClick={handleTabClick}
      >
        Булки
      </Tab>
      <Tab
        id="sauce"
        value="sauce"
        active={current === "sauce"}
        onClick={handleTabClick}
      >
        Соусы
      </Tab>
      <Tab
        id="main"
        value="main"
        active={current === "main"}
        onClick={handleTabClick}
      >
        Начинки
      </Tab>
    </div>
  );
};

const BurgerIngredients = ({ ingredients }) => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <TabIngredients />
      <div className={styles.ingredients_container + " mt-10 + custom-scroll"}>
        <IngredientsList ingredients={ingredients} type="bun"></IngredientsList>
        <IngredientsList
          ingredients={ingredients}
          type="sauce"
        ></IngredientsList>
        <IngredientsList
          ingredients={ingredients}
          type="main"
        ></IngredientsList>
      </div>
    </div>
  );
};

BurgerIngredients.propTypes = {
  ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
};

export default BurgerIngredients;
