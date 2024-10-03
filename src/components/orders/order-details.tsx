import { FC, useEffect, useState } from "react";
import styles from "./order-details.module.css";
import { OrderDate } from "./orders-list/order-card";
import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { Price } from "./orders-computing";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { useLocation, useParams } from "react-router-dom";
import { request } from "../../utils/request";

interface IOrder {
  _id: string;
  ingredients: string[];
  status: "done" | "pending" | "created";
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}
interface IResponse {
  success: boolean;
  orders: [IOrder];
}
export const OrderDetails: FC = () => {
  const [order, setOrder] = useState<IOrder | null>(null);
  const id = useParams().id;
  const { items } = useAppSelector((state) => state.ingredients);
  const { orders } = useAppSelector((state) => state.orderFeed);
  const { userOrders } = useAppSelector((state) => state.orderProfile);

  useEffect(() => {
    const fetchOrder = async () => {
      const localOrder =
        orders.find((order) => order._id === id) ||
        userOrders.find((order) => order.number === Number(id));
      if (localOrder) {
        setOrder(localOrder);
      } else {
        try {
          const fetchedData = await request<IResponse>(`/orders/${id}`);
          const fetchedOrder = fetchedData.orders.find(
            (order) => order.number === Number(id)
          );
          if (fetchedOrder) {
            setOrder(fetchedOrder);
          } else {
            console.error("Order not found in fetched data");
          }
        } catch (err) {
          console.error(err);
        }
      }
    };

    fetchOrder();
  }, [id, orders, userOrders]);

  if (!order) {
    return <p>Заказ не найден</p>;
  }

  const groupIngredients = (ingredients: string[]) => {
    const grouped = ingredients.reduce(
      (acc: Record<string, { count: number }>, ingredient) => {
        if (!acc[ingredient]) {
          acc[ingredient] = { count: 1 };
        } else {
          acc[ingredient].count += 1;
        }
        return acc;
      },
      {}
    );
    return grouped;
  };

  const groupedIngredients = groupIngredients(order.ingredients);

  return (
    <div className={styles.container}>
      <div
        className={`text text_type_digits-default pb-10 ${styles.centertext}`}
      >
        #{order.number}
      </div>
      <div className="text text_type_main-medium pb-3">{order.name}</div>
      <div
        className="text text_type_main-default pb-15"
        style={{ color: order.status === "done" ? "#00CCCC" : "white" }}
      >
        {order.status === "done"
          ? "Выполнен"
          : order.status === "pending"
          ? "В работе"
          : ""}
      </div>
      <div className="text text_type_main-medium pb-6">Состав:</div>
      <div className={`${styles.composition} pb-10`}>
        {Object.keys(groupedIngredients).map((ingredientId) => {
          const currentIngredient = items.find(
            (item) => item._id === ingredientId
          );
          if (!currentIngredient) return null;

          const count = groupedIngredients[ingredientId].count;
          const price = currentIngredient.price * count;

          return (
            <div key={ingredientId} className={styles.ingredient}>
              <div className={styles.image}>
                {" "}
                <img
                  src={currentIngredient.image}
                  alt={currentIngredient.name}
                />
              </div>

              <p
                className={`text text_type_main-default ${styles.ingredient_name}`}
              >
                {currentIngredient.name}
              </p>
              <div className={styles.stats}>
                <p className="text text_type_digits-default">{count} x </p>
                <p className={`${styles.price} text text_type_digits-default`}>
                  &nbsp;{price} <CurrencyIcon type="primary" />
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className={styles.summary}>
        <div className="text text_type_main-default text_color_inactive">
          <OrderDate orderdate={order.createdAt} />
        </div>
        <div className={styles.price}>
          <Price ingredients={order.ingredients} />
        </div>
      </div>
    </div>
  );
};
