import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  Location,
} from "react-router-dom";
import { useEffect } from "react";
import { fetchIngredients } from "../../services/ingredients/actions";
import { checkUserAuth } from "../../services/user/actions";
import { useAppDispatch, useAppSelector } from "../../services/store";
import Modal from "../modal/modal";

import {
  HomePage,
  Login,
  Register,
  ForgotPassword,
  ResetPassword,
  Profile,
  IngredientInfo,
  Page404,
  Feed,
  Orders,
  OrderInfo,
} from "../../pages";

import styles from "./app.module.css";

import AppHeader from "../app-header/app-header";
import IngredientDetails from "../burger-ingredients/ingredient-details/ingredient-details";
import { OnlyAuth, OnlyUnAuth } from "./protected-route";
import { OrderDetails } from "../orders/order-details";

interface LocationState {
  backgroundLocation?: Location;
}
function App() {
  const location = useLocation() as Location & { state: LocationState };
  const state = location.state;
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkUserAuth());
  }, []);

  useEffect(() => {
    dispatch(fetchIngredients());
  }, []);

  const { itemsRequest, itemsFailed, items } = useAppSelector(
    (state) => state.ingredients
  );

  const closeModal = () => {
    navigate(-1);
  };

  const { isAuthChecked } = useAppSelector((state) => state.user);

  return (
    <div className={styles.app}>
      {itemsRequest || !isAuthChecked ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Загрузка...
        </h1>
      ) : itemsFailed || items.length === 0 ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Ошибка загрузки данных с сервера
        </h1>
      ) : (
        <div className={styles.app}>
          <AppHeader />
          <div className={styles.container}>
            <Routes location={state?.backgroundLocation || location}>
              <Route path="/" element={<HomePage />} />
              <Route
                path="/login"
                element={<OnlyUnAuth component={<Login />} />}
              />
              <Route
                path="/register"
                element={<OnlyUnAuth component={<Register />} />}
              />
              <Route
                path="/forgot-password"
                element={<OnlyUnAuth component={<ForgotPassword />} />}
              />
              <Route
                path="/reset-password"
                element={<OnlyUnAuth component={<ResetPassword />} />}
              />
              <Route
                path="/profile"
                element={<OnlyAuth component={<Profile />} />}
              />
              <Route path="/feed" element={<Feed />} />
              <Route
                path="/profile/orders"
                element={<OnlyAuth component={<Orders />} />}
              />
              <Route path="/ingredients/:id" element={<IngredientInfo />} />
              <Route path="/feed/:id" element={<OrderInfo />} />
              <Route path="/profile/orders/:id" element={<OrderInfo />} />
              <Route path="/*" element={<Page404 />} />
            </Routes>

            {state?.backgroundLocation && (
              <Routes>
                <Route
                  path="/ingredients/:id"
                  element={
                    <Modal onClose={closeModal}>
                      <IngredientDetails />
                    </Modal>
                  }
                />
                <Route
                  path="/profile/orders/:id"
                  element={
                    <Modal onClose={closeModal}>
                      <OrderDetails />
                    </Modal>
                  }
                />
                <Route
                  path="/feed/:id"
                  element={
                    <Modal onClose={closeModal}>
                      <OrderDetails />
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
