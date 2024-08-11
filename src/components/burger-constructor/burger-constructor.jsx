import PropTypes from "prop-types";

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
import { useModal } from "../../hooks/useModal";
import { useSelector } from "react-redux";

const Cart = () => {
  const { items } = useSelector((state) => state.ingredients);

  const { cart } = useSelector((state) => state.cart);

  if (!Array.isArray(items) || items.length === 0) {
    return null;
  }

  const filtered = items.filter(
    (ingredient) => ingredient.type == "sauce" || ingredient.type == "main"
  );

  const selectedBun = items[0];

  return (
    <div className={styles.cart_container + " mt-25 mb-10"}>
      <ConstructorElement
        type="top"
        isLocked={true}
        text={selectedBun.name + " (верх)"}
        price={selectedBun.price}
        thumbnail={selectedBun.image}
        extraClass="ml-8"
      />
      <ul className={styles.cart_container_inner + " mb-4 custom-scroll"}>
        {cart.map((ingredient) => (
          <CartIngredientItem key={ingredient._id} ingredient={ingredient} />
        ))}
      </ul>
      <ConstructorElement
        type="bottom"
        isLocked={true}
        text={selectedBun.name + " (низ)"}
        price={selectedBun.price}
        thumbnail={selectedBun.image}
        extraClass="ml-8"
      />
    </div>
  );
};

// Cart.propTypes = {
//   ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
// };

const CartIngredientItem = ({ ingredient }) => {
  return (
    <div className={styles.CartIngredientItem}>
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
      />
    </div>
  );
};

CartIngredientItem.propTypes = {
  ingredient: IngredientType,
};

const Total = (props) => {
  const { isModalOpen, openModal, closeModal } = useModal();

  return (
    <div className={styles.total}>
      <div className={styles.total_price}>
        <p className="text text_type_digits-medium">{props.price}</p>
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

Total.propTypes = {
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

const BurgerConstructor = ({ ingredients }) => {
  return (
    <div className={styles.container}>
      <Cart ingredients={ingredients} />
      <Total price="610" />
    </div>
  );
};

// BurgerConstructor.propTypes = {
//   ingredients: PropTypes.arrayOf(PropTypes.shape(IngredientType)).isRequired,
// };

export default BurgerConstructor;
