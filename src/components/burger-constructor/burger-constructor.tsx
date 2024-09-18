import { useModal } from "../../hooks/useModal";
import { useDrop, useDrag } from "react-dnd";
import { FC, useRef } from "react";
import {
  deleteIngredient,
  emptyCart,
  moveIngredient,
} from "../../services/cart/actions";
import { fetchOrder } from "../../services/order/actions";

import {
  CurrencyIcon,
  ConstructorElement,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";
import { Placeholder } from "./constructor-placeholders/constructor-placeholders";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../services/store";
import { IngredientType, IUser } from "../../utils/types";

const Cart = () => {
  const { cart, bun } = useAppSelector((state) => state.cart);

  const [, dropRef] = useDrop({
    accept: ["bun", "ingredient"],
    drop: (item) => ({ name: "BurgerConstructor" }),
  });

  const dispatch = useAppDispatch();

  const handleDeleteIngredient = (key: string | undefined): void => {
    dispatch(deleteIngredient(key));
  };

  const moveIngredientHandler = (dragIndex: number, dropIndex: number) => {
    dispatch(moveIngredient(dragIndex, dropIndex));
  };

  return (
    <div ref={dropRef} className={styles.cart_container + " mt-25 mb-10"}>
      {bun ? (
        <ConstructorElement
          type="top"
          isLocked={true}
          text={bun.name + " (верх)"}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
      ) : (
        <Placeholder form="top" />
      )}
      {cart.length === 0 ? (
        <Placeholder form="ingredient" />
      ) : (
        <ul className={styles.cart_container_inner + " mb-4 custom-scroll"}>
          {cart.map((ingredient, index) => (
            <CartIngredientItem
              index={index}
              handleClose={handleDeleteIngredient}
              key={ingredient.key}
              ingredient={ingredient}
              moveIngredient={moveIngredientHandler}
            />
          ))}
        </ul>
      )}
      {bun ? (
        <ConstructorElement
          type="bottom"
          isLocked={true}
          text={bun.name + " (низ)"}
          price={bun.price}
          thumbnail={bun.image}
          extraClass="ml-8"
        />
      ) : (
        <Placeholder form="bottom" />
      )}
    </div>
  );
};
interface ICartIngredientItem {
  ingredient: IngredientType;
  handleClose: (id: string | undefined) => void;
  index: number;
  moveIngredient: (dragIndex: number, dropIndex: number) => void;
}

const CartIngredientItem: FC<ICartIngredientItem> = ({
  ingredient,
  handleClose,
  index,
  moveIngredient,
}) => {
  const ref = useRef<HTMLDivElement | null>(null);

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(item: { index: number }, monitor: any) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const dropIndex = index;

      if (dragIndex === dropIndex) return;

      moveIngredient(dragIndex, dropIndex);
      // item.index = dropIndex; теперь вылезает ошибка, не могу исправить
      // Object.assign(item, { index: dropIndex });
    },
  });

  const [{ isDragging }, drag] = useDrag<
    { index: number },
    unknown,
    { isDragging: boolean }
  >({
    type: "ingredient",
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  });

  drag(drop(ref));

  const opacity = isDragging ? 0 : 1;
  return (
    <div
      ref={ref}
      style={{ opacity: opacity }}
      className={styles.cart_ingredient_item}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleClose(ingredient.key)}
        extraClass={styles.cart_ingredient_item_inner}
      />
    </div>
  );
};

const Total: FC = () => {
  const { cart, bun } = useAppSelector((state) => state.cart);
  const { isModalOpen, openModal, closeModal } = useModal();
  const { user } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const price = (): number => {
    let sum: number = 0;
    if (bun !== null && cart.length > 0) {
      cart.forEach((item) => {
        sum += item.price;
      });
      sum += bun.price * 2;
    }
    return sum;
  };

  const ingredients: string[] = cart.map(function (item) {
    return item._id;
  });

  const orderIngredientsIDs: { ingredients: string[] } = { ingredients };

  const orderProcess = (): void => {
    if (!user) {
      navigate("/login", { state: { from: "/" } });
    } else {
      openModal();
      if (cart.length > 0) {
        dispatch(fetchOrder(orderIngredientsIDs));
      }
    }
  };

  const closing = (): void => {
    closeModal();
    dispatch(emptyCart());
  };

  return (
    <div className={styles.total}>
      {bun && (
        <div className={styles.total_price}>
          <p className="text text_type_digits-medium">{price()}</p>
          <CurrencyIcon type="primary" />
        </div>
      )}
      {bun && (
        <Button
          onClick={orderProcess}
          htmlType="button"
          type="primary"
          size="medium"
          extraClass="ml-2"
        >
          Оформить заказ
        </Button>
      )}
      {isModalOpen && (
        <Modal onClose={closing}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

const BurgerConstructor: FC = () => {
  return (
    <div className={styles.container}>
      <Cart />
      <Total />
    </div>
  );
};

export default BurgerConstructor;
