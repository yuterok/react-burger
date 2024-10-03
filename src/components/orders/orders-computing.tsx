import { useAppSelector } from "../../services/store";
import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
interface IPrice {
  ingredients: Array<string>;
}
export const Price = ({ ingredients }: IPrice) => {
  const { items } = useAppSelector((state) => state.ingredients);

  let sum: number = 0;
  ingredients.forEach((ingredient) => {
    const price = items.find((item) => item._id === ingredient)?.price;
    sum += price!;
  });
  return (
    <div
      style={{
        display: "flex",
        gap: 5,
        alignItems: "center",
      }}
    >
      <p className="text text_type_digits-default">{sum}</p>
      <CurrencyIcon type="primary" />
    </div>
  );
};
interface IOrderDate {
  orderdate: Date | string;
}
export const OrderDate = ({ orderdate }: IOrderDate) => {
  const dateFromServer = orderdate;
  return <FormattedDate date={new Date(dateFromServer)} />;
};
