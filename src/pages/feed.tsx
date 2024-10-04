import { FC, useEffect } from "react";
import {
  connectFeed,
  disconnectFeed,
} from "../services/order-info/feed-actions";
import styles from "./feed.module.css";
import { OrdersList } from "../components/orders/orders-list/orders-list";
import { useAppDispatch, useAppSelector } from "../services/store";

export const Feed: FC = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(connectFeed());

    return () => {
      dispatch(disconnectFeed());
    };
  }, [dispatch]);
  const { totalToday, total, orders, isConnected } = useAppSelector(
    (state) => state.orderFeed
  );
  const ordersDone = orders
    .filter((order) => order.status === "done")
    .slice(0, 10);
  const ordersPending = orders
    .filter((order) => order.status === "pending")
    .slice(0, 10);
  return (
    <div>
      {!isConnected ? (
        <p>Загрузка</p>
      ) : (
        <div className={styles.container}>
          <h2 className="text text_type_main-large pt-10 pb-5">
            Лента заказов
          </h2>
          <main className={styles.main_container}>
            <div className={styles.orders_list}>
              <OrdersList />
            </div>
            <div className={styles.orders_numbers}>
              <div className={styles.orders_statuses}>
                <div className={styles.orders_status}>
                  <h3 className="text text_type_main-large pb-6">Готовы</h3>
                  <div className={styles.orders_numbers_list}>
                    {ordersDone.map((order) => (
                      <p
                        key={order.number}
                        style={{ color: "#00CCCC" }}
                        className="text text_type_digits-default"
                      >
                        {order.number}
                      </p>
                    ))}
                  </div>
                </div>
                <div className={styles.orders_status}>
                  <h3 className="text text_type_main-large pb-6">В работе</h3>
                  <div className={styles.orders_numbers_list}>
                    {ordersPending.map((order) => (
                      <p
                        key={order.number}
                        className="text text_type_digits-default"
                      >
                        {order.number}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
              <div className={styles.orders_stats}>
                <h2 className="text text_type_main-medium pt-15">
                  Выполнено за всё время:
                </h2>
                <p className={`text text_type_digits-large ${styles.glow}`}>
                  {total}
                </p>
                <h2 className="text text_type_main-medium pt-15">
                  Выполнено за сегодня:
                </h2>
                <p className={`text text_type_digits-large ${styles.glow}`}>
                  {totalToday}
                </p>
              </div>
            </div>
          </main>
        </div>
      )}
    </div>
  );
};
