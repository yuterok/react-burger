import { OrderDetails } from "../components/orders/order-details";

import styles from "./order-info.module.css";

export const OrderInfo = () => {
  return (
    <div className={styles.container}>
      <OrderDetails />
    </div>
  );
};
