import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIngredients } from "../services/ingredients/actions";

import BurgerIngredients from "../components/burger-ingredients/burger-ingredients";
import BurgerConstructor from "../components/burger-constructor/burger-constructor";
import styles from "./home.module.css";

import { BASE_URL } from "../utils/constants";

const apiLink = BASE_URL + "/ingredients";

export const HomePage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchIngredients());
  }, [apiLink]);

  const { itemsRequest, itemsFailed } = useSelector(
    (state) => state.ingredients
  );

  return (
    <div className={styles.app}>
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
};
