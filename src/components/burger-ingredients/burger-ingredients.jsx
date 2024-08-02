import React, { useEffect, useState, useRef } from "react";
import { Tab, Typography} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./burger-ingredients.module.css";

import IngredientsList from './ingredient-list/ingredient-list'

const TabIngredients = () => {
  const [current, setCurrent] = useState("bun");

  const handleTabClick = (value) => {
    setCurrent(value);
    document.getElementById(value).scrollIntoView({ behavior: "smooth" });
  };
  
  return (
    <div style={{ display: "flex" }}>
      <Tab id="bun" value="bun" active={current === "bun"} onClick={handleTabClick}>Булки
      </Tab>
      <Tab id="sauce" value="sauce" active={current === "sauce"} onClick={handleTabClick}>Соусы
      </Tab>
      <Tab id="main" value="main" active={current === "main"} onClick={handleTabClick}>Начинки
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
        <IngredientsList ingredients={ingredients} text="Булки" type="bun"></IngredientsList>
        <IngredientsList ingredients={ingredients} text="Соусы" type="sauce"></IngredientsList>
        <IngredientsList ingredients={ingredients} text="Начинка" type="main"></IngredientsList>
      </div>
    </div>
  );
};

export default BurgerIngredients;


// props drilling
// здесь делаем state для хранения currentIngredient и сеттер этого перебрасываем в карточку (через list).
// при клике на карточке вызываем сеттер
// тут смотрим, если currentIngredient не null, то отображаем модалку