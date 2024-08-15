import { useEffect } from "react";

import styles from "./app.module.css";
import AppHeader from "../app-header/app-header";
import BurgerIngredients from "../burger-ingredients/burger-ingredients";
import BurgerConstructor from "../burger-constructor/burger-constructor";
import { useDispatch, useSelector } from "react-redux";
import { fetchIngredients } from "../../services/ingredients/actions";

export const BASE_URL = "https://norma.nomoreparties.space/api";

export const apiLink = BASE_URL + "/ingredients";

export const apiLinkOrder = BASE_URL + "/orders";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [apiLink]);

  const { items, itemsRequest, itemsFailed } = useSelector(
    (state) => state.ingredients
  );

  return (
    <div className={styles.app}>
      <AppHeader />

      {itemsRequest ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Загрузка...
        </h1>
      ) : itemsFailed ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Ошибка загрузки данных с сервера
        </h1>
      ) : (
        <main className={styles.container}>
          <BurgerIngredients />
          <BurgerConstructor />
        </main>
      )}
    </div>
  );
}

export default App;
