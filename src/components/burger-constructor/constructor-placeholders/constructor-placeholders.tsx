import { FC } from "react";
import styles from "./constructor-placeholders.module.css";

interface PlaceholderProps {
  form: 'top' | 'bottom' | 'ingredient';
}

export const Placeholder: FC<PlaceholderProps> = ({ form }) => {
  const style = {
    borderRadius:
      form === "top"
        ? "var(--top-constructor-item-border-radius)"
        : form === "bottom"
        ? "var(--bottom-constructor-item-border-radius)"
        : "var(--common-border-radius-s)",
  };
  return (
    <div className={`${styles.container} ${styles.bun}`} style={style}>
      <p className="text text_type_main-default">
        {form === "top" || form === "bottom"
          ? "Выберите булку"
          : "Выберите начинку"}
      </p>
    </div>
  );
};
