import React, { useEffect, useState } from "react";
import { Tab, Typography} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

import IngredientItem from './ingredient-item/ingredient-item'
import IngredientsList from './ingredient-list/ingredient-list'

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

const BurgerIngredients = () => {
  return (
    <div className={styles.container}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <TabIngredients />
      <div className={styles.ingredients_container + " mt-10 + custom-scroll"}>
        <IngredientsList text="Булки" type="bun"></IngredientsList>
        <IngredientsList text="Соусы" type="sauce"></IngredientsList>
        <IngredientsList text="Начинка" type="main"></IngredientsList>
      </div>
    </div>
  );
};

export default BurgerIngredients;
