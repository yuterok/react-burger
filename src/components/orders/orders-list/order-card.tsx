import { FC } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useModal } from "../../../hooks/useModal";
import Modal from "../../modal/modal";
import styles from "./order-card.module.css";
import { useAppSelector, useAppDispatch } from "../../../services/store";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { OrderDetails } from "../order-details";

interface IOrderDate {
  orderdate: Date | string;
}
export const OrderDate: FC<IOrderDate> = ({ orderdate }) => {
  const dateFromServer = orderdate;
  return <FormattedDate date={new Date(dateFromServer)} />;
};

export const OrderCard = (order: any) => {
  const { items } = useAppSelector((state) => state.ingredients);
  const ingredients = order.order.ingredients;

  const { isModalOpen, closeModal } = useModal();

  const closing = (): void => {
    closeModal();
  };
  const location = useLocation();
  const dispatch = useAppDispatch();

  interface IOrderIngredientItem {
    ingredient: string;
    index: number;
  }
  const OrderIngredientItem: FC<IOrderIngredientItem> = ({
    ingredient,
    index,
  }) => {
    const image = items.find((item) => item._id === ingredient)?.image;
    return (
      <div className={styles.ingredient_item} style={{ zIndex: 100 - index }}>
        <img src={image} alt="" />
      </div>
    );
  };
  interface IPrice {
    ingredients: Array<string>;
  }
  const Price = ({ ingredients }: IPrice) => {
    let sum: number = 0;
    ingredients.forEach((ingredient) => {
      const price = items.find((item) => item._id === ingredient)?.price;
      sum += price!;
    });
    return (
      <div className={styles.total_price}>
        <p className="text text_type_digits-default">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
    );
  };

  const visibleIngredients = ingredients.slice(0, 5);
  const remainingIngredientsCount = ingredients.length - 5;
  return (
    <Link
      key={order.number}
      to={`${location.pathname}/${order.order.number}`}
      className={styles.order_container}
      state={{ backgroundLocation: location }}
    >
      <span className={styles.order_stats}>
        <p className="text text_type_digits-default">{order.order.number}</p>
        <p className="text text_type_main-default text_color_inactive">
          <OrderDate orderdate={order.order.createdAt} />
        </p>
      </span>
      <p className="text text_type_main-medium">{order.order.name}</p>
      <span className={styles.order_content}>
        <div className={styles.order_ingredients}>
          {visibleIngredients.map((ingredient: any, index: number) => {
            if (index === 4 && remainingIngredientsCount > 0) {
              return (
                <div
                  className={styles.ingredient_item}
                  key={index}
                  style={{ zIndex: 100 - index, position: "relative" }}
                >
                  <img
                    src={items.find((item) => item._id === ingredient)?.image}
                    alt=""
                  />
                  <div className={styles.overlay}>
                    <span className="text text_type_main-default">
                      +{remainingIngredientsCount}
                    </span>
                  </div>
                </div>
              );
            }
            return (
              <OrderIngredientItem
                ingredient={ingredient}
                index={index}
                key={index}
              />
            );
          })}
        </div>
        <Price ingredients={order.order.ingredients} />
      </span>
      {isModalOpen && (
        <Modal onClose={closing}>
          <OrderDetails />
        </Modal>
      )}
    </Link>
  );
};
