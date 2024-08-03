import styles from "./ingredient-details.module.css";
import { Box, CloseIcon} from "@ya.praktikum/react-developer-burger-ui-components";

const IngredientDetails = ({ingredient}) => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title + " text text_type_main-large"}>Детали ингредиента</h2>
      <img src={ingredient.image_large} alt="" />
      <p className="text text_type_main-medium">
        {ingredient.name}
      </p>
      <div className={styles.ingredient_info}>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Калории,ккал</p>
          <p className="text text_type_digits-default">{ingredient.calories}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Белки, г</p>
          <p className="text text_type_digits-default">{ingredient.proteins}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Жиры, г</p>
          <p className="text text_type_digits-default">{ingredient.fat}</p>
        </div>
        <div className={styles.ingredient_info_item}>
          <p className="text text_type_main-default">Углеводы, г</p>
          <p className="text text_type_digits-default">{ingredient.carbohydrates}</p>
        </div>
      </div>
    </div>
  );
};

export default IngredientDetails;

// const Modal = ({title, onClose, children}) => {
//     return createPortal(
//         <div>
//             {/* header */}
//             <div className={styles.content}>{children}</div>
//             <ModalOverlay onClose={onClose} />
//        </div>,
//       modalRoot
//     );
// }
