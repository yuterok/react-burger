import { useDrag } from "react-dnd";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import styles from "./ingredient-item.module.css";
import { useModal } from "../../../hooks/useModal";

import { addIngredient, replaceBun } from "../../../services/cart/actions";
import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../services/store";
import { IngredientType } from "../../../utils/types";

const IngredientItem: FC<IngredientType> = (ingredient) => {
  const { isModalOpen, closeModal } = useModal();

  const closing = (): void => {
    closeModal();
  };
  const location = useLocation();

  const dispatch = useAppDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: ingredient.type === "bun" ? "bun" : "ingredient",
    item: ingredient,
    end: (item: IngredientType, monitor: any) => {
      if (monitor.didDrop()) {
        if (item.type === "bun") {
          dispatch(replaceBun(item));
        } else {
          dispatch(addIngredient(item));
        }
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });
  const opacity = isDragging ? 0.5 : 1;

  const { cart, bun } = useAppSelector((state) => state.cart);

  const countIngredients = (ingredient: IngredientType): number => {
    let count = 0;
    if (cart.find((item) => item._id === ingredient._id)) {
      cart.forEach((item) => {
        if (item._id === ingredient._id) {
          count += 1;
        }
      });
    }
    if (bun && bun._id === ingredient._id) {
      count = 1;
    }
    return count;
  };

  return (
    <Link
      key={ingredient._id}
      to={`/ingredients/${ingredient._id}`}
      ref={dragRef}
      className={styles.ingredient_block + " pl-4"}
      style={{ opacity: opacity }}
      state={{ backgroundLocation: location }}
    >
      {countIngredients(ingredient) > 0 ? (
        <Counter
          count={countIngredients(ingredient)}
          size="default"
          extraClass="m-1"
        />
      ) : (
        ""
      )}

      <img src={ingredient.image} alt={ingredient.name} />
      <span className={styles.item_price}>
        <p className="text text_type_digits-default">{ingredient.price}</p>{" "}
        <CurrencyIcon type="primary" />
      </span>
      <p className="text text_type_main-default">{ingredient.name}</p>
      {isModalOpen && (
        <Modal onClose={closing}>
          <IngredientDetails />
        </Modal>
      )}
    </Link>
  );
};

export default IngredientItem;
