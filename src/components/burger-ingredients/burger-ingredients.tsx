import { useState, useEffect, FC, useRef } from "react";
import { Tab } from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-ingredients.module.css";
import IngredientsList from "./ingredient-list/ingredient-list";

interface ITabIngredients {
  currentTab: string;
  setCurrentTab: React.Dispatch<React.SetStateAction<string>>;
}

const TabIngredients: FC<ITabIngredients> = ({ currentTab, setCurrentTab }) => {
  const handleTabClick = (value: string): void => {
    setCurrentTab(value);
    document.getElementById(value)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div className={styles.tabs}>
      <Tab
        id="bun"
        value="bun"
        active={currentTab === "bun"}
        onClick={handleTabClick}
      >
        Булки
      </Tab>
      <Tab
        id="sauce"
        value="sauce"
        active={currentTab === "sauce"}
        onClick={handleTabClick}
      >
        Соусы
      </Tab>
      <Tab
        id="main"
        value="main"
        active={currentTab === "main"}
        onClick={handleTabClick}
      >
        Начинки
      </Tab>
    </div>
  );
};

const BurgerIngredients: FC = () => {
  const [currentTab, setCurrentTab] = useState("bun");

  const bunRef = useRef<HTMLDivElement>(null);
  const sauceRef = useRef<HTMLDivElement>(null);
  const mainRef = useRef<HTMLDivElement>(null);

  const handleScroll = (): void => {
    const bunPosition = bunRef.current?.getBoundingClientRect().top || 0;
    const saucePosition = sauceRef.current?.getBoundingClientRect().top || 0;
    const mainPosition = mainRef.current?.getBoundingClientRect().top || 0;

    const offset = 300;

    if (bunPosition < offset && saucePosition > offset) {
      setCurrentTab("bun");
    } else if (saucePosition < offset && mainPosition > offset) {
      setCurrentTab("sauce");
    } else if (mainPosition < offset) {
      setCurrentTab("main");
    }
  };

  useEffect(() => {
    const container = document.getElementById("ingredients-container");
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={styles.container}>
      <p className="text text_type_main-large pt-10 pb-5">Соберите бургер</p>
      <TabIngredients currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <div
        id="ingredients-container"
        className={styles.ingredients_container + " mt-10 + custom-scroll"}
      >
        <div ref={bunRef} id="bun">
          <IngredientsList type="bun" />
        </div>
        <div ref={sauceRef} id="sauce">
          <IngredientsList type="sauce" />
        </div>
        <div ref={mainRef} id="main">
          <IngredientsList type="main" />
        </div>
      </div>
    </div>
  );
};

export default BurgerIngredients;
