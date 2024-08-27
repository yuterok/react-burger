import { Routes, Route, useLocation, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchIngredients } from "../../services/ingredients/actions";
import {
  HomePage,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  IngredientInfo,
  Page404,
} from "../../pages";

import Modal from "../modal/modal";
import { BASE_URL } from "../../utils/constants";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";

function App() {
  let location = useLocation();
  let state = location.state;

  const dispatch = useDispatch();
  const apiLink = BASE_URL + "/ingredients";
  useEffect(() => {
    dispatch(fetchIngredients());
  }, [apiLink]);

  const { itemsRequest, itemsFailed, items } = useSelector(
    (state) => state.ingredients
  );

  return (
    <div className={styles.app}>
      {itemsRequest ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Загрузка...
        </h1>
      ) : itemsFailed || items.length == 0 ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Ошибка загрузки данных с сервера
        </h1>
      ) : (
        <div className={styles.app}>
          <AppHeader />
          <div className={styles.container}>
            <Routes location={state?.backgroundLocation || location}>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />
              <Route path="/reset-password" element={<ResetPassword />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/ingredients/:id" element={<IngredientInfo />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>

            {state?.backgroundLocation && (
              <Routes>
                <Route
                  path="/ingredients/:id"
                  element={
                    <Modal>
                      <IngredientDetails />
                    </Modal>
                  }
                />
              </Routes>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
export default App;
