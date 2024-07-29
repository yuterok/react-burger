import {
  DragIcon,
  CurrencyIcon,
  LockIcon,
  DeleteIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import { Typography } from "@ya.praktikum/react-developer-burger-ui-components";
import { Box } from "@ya.praktikum/react-developer-burger-ui-components";
import { Button } from "@ya.praktikum/react-developer-burger-ui-components";

const BurgerConstructor = () => {
  return (
    <>
      <DragIcon type="primary" />
      <CurrencyIcon type="primary" />
      <DeleteIcon type="primary" />
      <LockIcon type="primary" />
      <Button htmlType="button" type="primary" size="small" extraClass="ml-2">
        Нажми на меня
      </Button>
    </>
  );
};

export default BurgerConstructor;


// не забыть делать проверку propTypes