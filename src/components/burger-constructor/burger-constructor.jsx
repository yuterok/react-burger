import PropTypes from "prop-types";
import { useModal } from "../../hooks/useModal";
import { useDrop } from "react-dnd";
import { useDispatch, useSelector } from "react-redux";
import { deleteIngredient } from "../../services/cart/actions";

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

  const handleDeleteIngredient = (ingredientId) => {
    dispatch(deleteIngredient(ingredientId));
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
        {cart.map((ingredient) => (
          <CartIngredientItem
            handleClose={handleDeleteIngredient}
            key={ingredient._id}
            ingredient={ingredient}
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

// Cart.propTypes = {
//   ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
// };

const CartIngredientItem = ({ ingredient, handleClose }) => {
  return (
    <div className={styles.CartIngredientItem}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => handleClose(ingredient._id)}
      />
    </div>
  );
};

CartIngredientItem.propTypes = {
  ingredient: IngredientType,
};

const Total = () => {
  const { cart, bun } = useSelector((state) => state.cart);

  const price = () => {
    let sum = 0;
    cart.forEach((item) => {
      sum += item.price * item.count;
    });
    sum += bun.price * 2;
    return sum;
  };

  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className="text text_type_digits-medium">{price()}</p>
        <CurrencyIcon type="primary" />
      </div>

      <Button
        onClick={openModal}
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

const BurgerConstructor = ({ ingredients }) => {
  return (
    <div className={styles.container}>
      <Cart ingredients={ingredients} />
      <Total />
    </div>
  );
};

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
// };

export default BurgerConstructor;
