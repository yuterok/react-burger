import React, { useEffect, useState } from "react";

import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";

const apiLink = "https://norma.nomoreparties.space/api/ingredients";

function App() {
  const [ingredientsData, setIngredients] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiLink);

        if (!response.ok) {
          throw new Error(response.status);
        }

        const data = await response.json();
        setIngredients(data.data);
      } catch (error) {
        console.error("Ошибка fetch ", error);
      }
    };

    fetchData();
  }, [apiLink]);

  return (
    <main className={styles.app}>
      <AppHeader />
      <div className={styles.container}>
        <BurgerIngredients ingredients={ingredientsData} />
        <BurgerConstructor ingredients={ingredientsData} />
      </div>
    </main>
  );
}

export default App;
