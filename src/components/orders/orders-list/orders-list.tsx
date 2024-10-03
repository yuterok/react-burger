import { FC } from "react";
import { OrderCard } from "./order-card";
import { useAppSelector } from "../../../services/store";

import styles from "./orders-list.module.css";

export const OrdersList: FC = () => {
  const { userOrders } = useAppSelector((state) => state.orderProfile);
  const reversedUserOrders = userOrders.map((item) => item).reverse(); // чтобы более свежие заказы были вверху

  const { orders } = useAppSelector((state) => state.orderFeed);

  return (
    <div className="">
      {orders.length > 0 ? (
        <div className={styles.orderslist}>
          {orders.map((order) => (
            <OrderCard order={order} key={order._id} />
          ))}
        </div>
      ) : (
        <div className={styles.orderslist}>
          {reversedUserOrders.map((order) => (
            <OrderCard order={order} key={order._id} />
          ))}
        </div>
      )}
    </div>
  );
};
