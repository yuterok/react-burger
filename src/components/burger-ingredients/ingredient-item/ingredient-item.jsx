import { useSelector, useDispatch } from "react-redux";
import { useDrag } from "react-dnd";
import {
  Counter,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";

import IngredientDetails from "../ingredient-details/ingredient-details";
import Modal from "../../modal/modal";
import { IngredientType } from "../../../utils/types";
import PropTypes from "prop-types";
import styles from "./ingredient-item.module.css";
import { useModal } from "../../../hooks/useModal";

import {
  setCurrentIngredient,
  clearCurrentIngredient,
} from "../../../services/currentIngredient/actions";
import { addIngredient, replaceBun } from "../../../services/cart/actions";

const IngredientItem = ({ ingredient }) => {
  const { isModalOpen, openModal, closeModal } = useModal();
  const { currentIngredient } = useSelector((state) => state.currentIngredient);

  const dispatch = useDispatch();

  const [{ isDragging }, dragRef] = useDrag({
    type: ingredient.type === "bun" ? "bun" : "ingredient",
    item: ingredient,
    end: (item, monitor) => {
      if (monitor.didDrop()) {
        const dropResult = monitor.getDropResult();
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

  const setCurrentItem = () => {
    dispatch(setCurrentIngredient(ingredient));
    openModal();
  };

  const clearCurrentItem = () => {
    dispatch(clearCurrentIngredient());
    closeModal();
  };

  const { cart, bun } = useSelector((state) => state.cart);

  const countIngredients = (ingredient) => {
    let count = 0;
    if (cart.find((item) => item._id === ingredient._id)) {
      cart.forEach((item) => {
        if (item._id == ingredient._id) {
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
    <li
      ref={dragRef}
      className={styles.ingredient_block + " pl-4"}
      onClick={setCurrentItem}
      style={{ opacity: opacity }}
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
        <Modal onClose={clearCurrentItem}>
          <IngredientDetails ingredient={currentIngredient} />
        </Modal>
      )}
    </li>
  );
};

IngredientItem.propTypes = {
  ingredient: PropTypes.shape(IngredientType).isRequired,
};

export default IngredientItem;
