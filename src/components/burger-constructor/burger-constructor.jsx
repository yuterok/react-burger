import { useModal } from "../../hooks/useModal";
import PropTypes from "prop-types";
import { useDrop, useDrag } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from "react";
import { deleteIngredient, moveIngredient } from "../../services/cart/actions";
import { fetchOrder } from "../../services/order/actions";

import {
  CurrencyIcon,
  ConstructorElement,
  Typography,
  Box,
  Button,
  DragIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import styles from "./burger-constructor.module.css";
import { IngredientType } from "../../utils/types";
import Modal from "../modal/modal";
import OrderDetails from "./order-details/order-details";

const Cart = () => {
  const { cart, bun } = useSelector((state) => state.cart);

  const [, dropRef] = useDrop({
    accept: ["bun", "ingredient"],
    drop: (item) => ({ name: "BurgerConstructor" }),
  });

  const dispatch = useDispatch();

  const handleDeleteIngredient = (key) => {
    dispatch(deleteIngredient(key));
  };

  const moveIngredientHandler = (dragIndex, dropIndex) => {
    dispatch(moveIngredient(dragIndex, dropIndex));
  };

  return (
    <div ref={dropRef} className={styles.cart_container + " mt-25 mb-10"}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={bun.name + " (верх)"}
        price={bun.price}
        thumbnail={bun.image}
        extraClass="ml-8"
      />
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
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={bun.name + " (низ)"}
        price={bun.price}
        thumbnail={bun.image}
        extraClass="ml-8"
      />
    </div>
  );
};

const CartIngredientItem = ({
  ingredient,
  handleClose,
  index,
  moveIngredient,
}) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "ingredient",
    hover(item, monitor) {
      if (!ref.current) return;
      const dragIndex = item.index;
      const dropIndex = index;

      if (dragIndex === dropIndex) return;

      moveIngredient(dragIndex, dropIndex);
      item.index = dropIndex;
    },
  });

  const [{ isDragging }, drag] = useDrag({
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

CartIngredientItem.propTypes = {
  ingredient: IngredientType,
  index: PropTypes.number.isRequired,
  moveIngredient: PropTypes.func.isRequired,
  handleClose: PropTypes.func.isRequired,
};

const Total = () => {
  const { cart, bun } = useSelector((state) => state.cart);
  const { isModalOpen, openModal, closeModal } = useModal();
  const dispatch = useDispatch();

  const price = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price;
    });
    sum += bun.price * 2;
    return sum;
  };

  const ingredients = cart.map(function (item) {
    return item._id;
  });

  const orderIngredientsIDs = { ingredients };

  const orderProcess = () => {
    openModal();
    if (cart.length > 0) {
      dispatch(fetchOrder(orderIngredientsIDs));
    }
  };

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className="text text_type_digits-medium">{price()}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        onClick={orderProcess}
        htmlType="button"
        type="primary"
        size="medium"
        extraClass="ml-2"
      >
        Оформить заказ
      </Button>
      {isModalOpen && (
        <Modal onClose={closeModal}>
          <OrderDetails />
        </Modal>
      )}
    </div>
  );
};

const BurgerConstructor = () => {
  return (
    <div className={styles.container}>
      <Cart />
      <Total />
    </div>
  );
};

export default BurgerConstructor;
