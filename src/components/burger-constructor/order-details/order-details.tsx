import styles from "./order-details.module.css";
import { Preloader } from "../../ui-components/preloader";
import doneImg from "../../../images/done.png";
import { useAppSelector } from "../../../services/store";
import { FC } from "react";

const OrderDetails: FC = () => {
  const { orderInfo, orderRequest, orderFailed } = useAppSelector(
    (state) => state.order
  );
  const { cart } = useAppSelector((state) => state.cart);
  return (
    <div data-cy="order-details" className={styles.container}>
      {cart.length === 0 ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Заказ пуст. Добавьте ингредиенты
        </h1>
      ) : orderRequest ? (
        <Preloader />
      ) : orderFailed ? (
        <h1 className={`${styles.warning} text text_type_main-large mt-10`}>
          Ошибка загрузки данных с сервера
        </h1>
      ) : (
        <>
          <p className={`${styles.number} text text_type_digits-large`}>
            {orderInfo.order.number}
          </p>
          <p className="text text_type_main-medium">идентификатор заказа</p>
          <img src={doneImg} alt="done" />
          <p className="text text_type_main-small">Ваш заказ начали готовить</p>
          <p className={`${styles.status} text text_type_main-small`}>
            Дождитесь готовности на орбитальной станции
          </p>
        </>
      )}
    </div>
  );
};

export default OrderDetails;
