import { FC } from "react";

import {
  FormattedDate,
  CurrencyIcon,
} from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./feed.module.css";
import { useAppDispatch, useAppSelector } from "../services/store";

export const Feed: FC = () => {
  const dispatch = useAppDispatch();

  const { items } = useAppSelector((state) => state.ingredients);

  interface IOrderDate {
    orderdate: Date | string;
  }
  const OrderDate: FC<IOrderDate> = ({ orderdate }) => {
    const dateFromServer = orderdate;
    return <FormattedDate date={new Date(dateFromServer)} />;
  };

  const test_data = {
    success: true,
    orders: [
      {
        _id: "66fb0bf807cc0b001c1d50a8",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "pending",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T20:37:12.885Z",
        updatedAt: "2024-09-30T20:37:13.611Z",
        number: 54720,
      },
      {
        _id: "66fb0a6d07cc0b001c1d50a6",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Space флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T20:30:37.307Z",
        updatedAt: "2024-09-30T20:30:38.163Z",
        number: 54719,
      },
      {
        _id: "66fb08fd07cc0b001c1d50a2",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa0946",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "pending",
        name: "Флюоресцентный space минеральный spicy люминесцентный метеоритный бургер",
        createdAt: "2024-09-30T20:24:29.887Z",
        updatedAt: "2024-09-30T20:24:30.747Z",
        number: 54718,
      },
      {
        _id: "66fb06e007cc0b001c1d509a",
        ingredients: [
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0944",
          "643d69a5c3f7b9001cfa093f",
          "643d69a5c3f7b9001cfa0940",
        ],
        status: "done",
        name: "Люминесцентный бессмертный традиционный-галактический био-марсианский метеоритный бургер",
        createdAt: "2024-09-30T20:15:28.062Z",
        updatedAt: "2024-09-30T20:15:28.826Z",
        number: 54717,
      },
      {
        _id: "66fb06a407cc0b001c1d5099",
        ingredients: ["643d69a5c3f7b9001cfa0943"],
        status: "done",
        name: "Space бургер",
        createdAt: "2024-09-30T20:14:28.452Z",
        updatedAt: "2024-09-30T20:14:29.286Z",
        number: 54716,
      },
      {
        _id: "66fb037607cc0b001c1d5094",
        ingredients: ["643d69a5c3f7b9001cfa0943", "643d69a5c3f7b9001cfa0945"],
        status: "done",
        name: "Space антарианский бургер",
        createdAt: "2024-09-30T20:00:54.381Z",
        updatedAt: "2024-09-30T20:00:55.855Z",
        number: 54715,
      },
      {
        _id: "66faec7307cc0b001c1d5061",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный space био-марсианский бургер",
        createdAt: "2024-09-30T18:22:43.774Z",
        updatedAt: "2024-09-30T18:22:44.652Z",
        number: 54714,
      },
      {
        _id: "66faeb6e07cc0b001c1d5058",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
        ],
        status: "done",
        name: "Краторный space бургер",
        createdAt: "2024-09-30T18:18:22.847Z",
        updatedAt: "2024-09-30T18:18:23.649Z",
        number: 54713,
      },
      {
        _id: "66fadc4b07cc0b001c1d502b",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T17:13:47.981Z",
        updatedAt: "2024-09-30T17:13:48.703Z",
        number: 54712,
      },
      {
        _id: "66fad5b707d06e001c3719c8",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T16:45:43.971Z",
        updatedAt: "2024-09-30T16:45:44.699Z",
        number: 54711,
      },
      {
        _id: "66fad4f207d06e001c3719c3",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T16:42:26.241Z",
        updatedAt: "2024-09-30T16:42:27.058Z",
        number: 54710,
      },
      {
        _id: "66fad3f5119d45001b50a89f",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T16:38:13.571Z",
        updatedAt: "2024-09-30T16:38:14.429Z",
        number: 54709,
      },
      {
        _id: "66fac9ea119d45001b50a88b",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa0944",
          "643d69a5c3f7b9001cfa0945",
          "643d69a5c3f7b9001cfa0943",
        ],
        status: "done",
        name: "Антарианский space краторный традиционный-галактический spicy бургер",
        createdAt: "2024-09-30T15:55:22.289Z",
        updatedAt: "2024-09-30T15:55:23.155Z",
        number: 54708,
      },
      {
        _id: "66fac9cf119d45001b50a88a",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0943",
        ],
        status: "done",
        name: "Space флюоресцентный бургер",
        createdAt: "2024-09-30T15:54:55.391Z",
        updatedAt: "2024-09-30T15:54:56.236Z",
        number: 54707,
      },
      {
        _id: "66fac985119d45001b50a886",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0945",
        ],
        status: "done",
        name: "Space флюоресцентный антарианский бургер",
        createdAt: "2024-09-30T15:53:41.376Z",
        updatedAt: "2024-09-30T15:53:42.245Z",
        number: 54706,
      },
      {
        _id: "66fac693119d45001b50a87a",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0944",
          "643d69a5c3f7b9001cfa0945",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный антарианский space традиционный-галактический люминесцентный бургер",
        createdAt: "2024-09-30T15:41:07.028Z",
        updatedAt: "2024-09-30T15:41:07.857Z",
        number: 54705,
      },
      {
        _id: "66fac3ad119d45001b50a872",
        ingredients: [
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный spicy био-марсианский бургер",
        createdAt: "2024-09-30T15:28:45.714Z",
        updatedAt: "2024-09-30T15:28:46.691Z",
        number: 54704,
      },
      {
        _id: "66fac336119d45001b50a870",
        ingredients: [
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный spicy био-марсианский бургер",
        createdAt: "2024-09-30T15:26:46.138Z",
        updatedAt: "2024-09-30T15:26:46.885Z",
        number: 54703,
      },
      {
        _id: "66fac09d119d45001b50a868",
        ingredients: ["643d69a5c3f7b9001cfa0943"],
        status: "done",
        name: "Space бургер",
        createdAt: "2024-09-30T15:15:41.035Z",
        updatedAt: "2024-09-30T15:15:42.000Z",
        number: 54702,
      },
      {
        _id: "66fabe7b119d45001b50a85e",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T15:06:35.216Z",
        updatedAt: "2024-09-30T15:06:36.038Z",
        number: 54701,
      },
      {
        _id: "66fab987119d45001b50a84a",
        ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa093c"],
        status: "done",
        name: "Краторный бургер",
        createdAt: "2024-09-30T14:45:27.517Z",
        updatedAt: "2024-09-30T14:45:28.414Z",
        number: 54700,
      },
      {
        _id: "66fab7a3119d45001b50a847",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный био-марсианский бургер",
        createdAt: "2024-09-30T14:37:23.113Z",
        updatedAt: "2024-09-30T14:37:24.081Z",
        number: 54699,
      },
      {
        _id: "66fab478119d45001b50a83b",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa093f",
          "643d69a5c3f7b9001cfa0949",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Экзо-плантаго метеоритный флюоресцентный бессмертный бургер",
        createdAt: "2024-09-30T14:23:52.053Z",
        updatedAt: "2024-09-30T14:23:52.930Z",
        number: 54698,
      },
      {
        _id: "66faaa8f119d45001b50a822",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa0940",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный метеоритный бургер",
        createdAt: "2024-09-30T13:41:35.022Z",
        updatedAt: "2024-09-30T13:41:37.785Z",
        number: 54697,
      },
      {
        _id: "66fa9b77119d45001b50a7fc",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный метеоритный бургер",
        createdAt: "2024-09-30T12:37:11.807Z",
        updatedAt: "2024-09-30T12:37:12.625Z",
        number: 54696,
      },
      {
        _id: "66fa97ff119d45001b50a7ec",
        ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
        status: "done",
        name: "Флюоресцентный бургер",
        createdAt: "2024-09-30T12:22:23.951Z",
        updatedAt: "2024-09-30T12:22:24.750Z",
        number: 54695,
      },
      {
        _id: "66fa95f5119d45001b50a7e8",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T12:13:41.834Z",
        updatedAt: "2024-09-30T12:13:42.639Z",
        number: 54694,
      },
      {
        _id: "66fa8a65119d45001b50a7be",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T11:24:21.819Z",
        updatedAt: "2024-09-30T11:24:22.695Z",
        number: 54693,
      },
      {
        _id: "66fa857f119d45001b50a7ab",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa0943",
          "643d69a5c3f7b9001cfa0944",
          "643d69a5c3f7b9001cfa0945",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093f",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa0946",
          "643d69a5c3f7b9001cfa0947",
          "643d69a5c3f7b9001cfa0948",
          "643d69a5c3f7b9001cfa0949",
          "643d69a5c3f7b9001cfa094a",
          "643d69a5c3f7b9001cfa094a",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный антарианский space астероидный фалленианский люминесцентный бессмертный минеральный альфа-сахаридный экзо-плантаго традиционный-галактический spicy био-марсианский метеоритный бургер",
        createdAt: "2024-09-30T11:03:27.174Z",
        updatedAt: "2024-09-30T11:03:28.093Z",
        number: 54692,
      },
      {
        _id: "66fa84c8119d45001b50a7a9",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T11:00:24.022Z",
        updatedAt: "2024-09-30T11:00:24.889Z",
        number: 54691,
      },
      {
        _id: "66fa844a119d45001b50a7a4",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный био-марсианский бургер",
        createdAt: "2024-09-30T10:58:18.791Z",
        updatedAt: "2024-09-30T10:58:19.438Z",
        number: 54690,
      },
      {
        _id: "66fa8254119d45001b50a79a",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T10:49:56.258Z",
        updatedAt: "2024-09-30T10:49:57.089Z",
        number: 54689,
      },
      {
        _id: "66fa81c3119d45001b50a799",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный био-марсианский бургер",
        createdAt: "2024-09-30T10:47:31.035Z",
        updatedAt: "2024-09-30T10:47:31.835Z",
        number: 54688,
      },
      {
        _id: "66fa8161119d45001b50a798",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T10:45:53.565Z",
        updatedAt: "2024-09-30T10:45:54.405Z",
        number: 54687,
      },
      {
        _id: "66fa7e06119d45001b50a790",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T10:31:34.263Z",
        updatedAt: "2024-09-30T10:31:35.121Z",
        number: 54686,
      },
      {
        _id: "66fa7d4a119d45001b50a787",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный био-марсианский бургер",
        createdAt: "2024-09-30T10:28:26.624Z",
        updatedAt: "2024-09-30T10:28:27.354Z",
        number: 54685,
      },
      {
        _id: "66fa7cf6119d45001b50a786",
        ingredients: [
          "643d69a5c3f7b9001cfa0942",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный био-марсианский spicy люминесцентный бургер",
        createdAt: "2024-09-30T10:27:02.803Z",
        updatedAt: "2024-09-30T10:27:03.718Z",
        number: 54684,
      },
      {
        _id: "66fa7ccd119d45001b50a785",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный бургер",
        createdAt: "2024-09-30T10:26:21.016Z",
        updatedAt: "2024-09-30T10:26:21.982Z",
        number: 54683,
      },
      {
        _id: "66fa7bd3119d45001b50a780",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa0941",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный био-марсианский люминесцентный бургер",
        createdAt: "2024-09-30T10:22:11.441Z",
        updatedAt: "2024-09-30T10:22:12.384Z",
        number: 54682,
      },
      {
        _id: "66fa7b6a119d45001b50a77f",
        ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
        status: "done",
        name: "Флюоресцентный бургер",
        createdAt: "2024-09-30T10:20:26.653Z",
        updatedAt: "2024-09-30T10:20:27.503Z",
        number: 54681,
      },
      {
        _id: "66fa7b21119d45001b50a77d",
        ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
        status: "done",
        name: "Флюоресцентный бургер",
        createdAt: "2024-09-30T10:19:13.607Z",
        updatedAt: "2024-09-30T10:19:14.535Z",
        number: 54680,
      },
      {
        _id: "66fa7926119d45001b50a778",
        ingredients: ["643d69a5c3f7b9001cfa093d", "643d69a5c3f7b9001cfa093d"],
        status: "done",
        name: "Флюоресцентный бургер",
        createdAt: "2024-09-30T10:10:46.980Z",
        updatedAt: "2024-09-30T10:10:47.736Z",
        number: 54679,
      },
      {
        _id: "66fa7449119d45001b50a76c",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный метеоритный бургер",
        createdAt: "2024-09-30T09:50:01.186Z",
        updatedAt: "2024-09-30T09:50:02.211Z",
        number: 54678,
      },
      {
        _id: "66fa708f119d45001b50a763",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T09:34:07.442Z",
        updatedAt: "2024-09-30T09:34:08.289Z",
        number: 54677,
      },
      {
        _id: "66fa6e86119d45001b50a75b",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T09:25:26.989Z",
        updatedAt: "2024-09-30T09:25:27.909Z",
        number: 54676,
      },
      {
        _id: "66fa6d0e119d45001b50a752",
        ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0942"],
        status: "done",
        name: "Краторный spicy бургер",
        createdAt: "2024-09-30T09:19:10.344Z",
        updatedAt: "2024-09-30T09:19:11.082Z",
        number: 54675,
      },
      {
        _id: "66fa6cd7119d45001b50a751",
        ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0941"],
        status: "done",
        name: "Краторный био-марсианский бургер",
        createdAt: "2024-09-30T09:18:15.592Z",
        updatedAt: "2024-09-30T09:18:16.355Z",
        number: 54674,
      },
      {
        _id: "66fa690b119d45001b50a74d",
        ingredients: [
          "643d69a5c3f7b9001cfa093d",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa0940",
          "643d69a5c3f7b9001cfa093d",
        ],
        status: "done",
        name: "Флюоресцентный люминесцентный метеоритный бургер",
        createdAt: "2024-09-30T09:02:03.320Z",
        updatedAt: "2024-09-30T09:02:04.479Z",
        number: 54673,
      },
      {
        _id: "66fa62b7119d45001b50a739",
        ingredients: ["643d69a5c3f7b9001cfa093c", "643d69a5c3f7b9001cfa0941"],
        status: "done",
        name: "Краторный био-марсианский бургер",
        createdAt: "2024-09-30T08:35:03.255Z",
        updatedAt: "2024-09-30T08:35:03.954Z",
        number: 54672,
      },
      {
        _id: "66fa5dd3119d45001b50a72d",
        ingredients: [
          "643d69a5c3f7b9001cfa093c",
          "643d69a5c3f7b9001cfa093e",
          "643d69a5c3f7b9001cfa093c",
        ],
        status: "done",
        name: "Краторный люминесцентный бургер",
        createdAt: "2024-09-30T08:14:11.580Z",
        updatedAt: "2024-09-30T08:14:12.355Z",
        number: 54671,
      },
    ],
    total: 54346,
    totalToday: 95,
  };

  interface IOrderIngredientItem {
    ingredient: string;
    index: number;
  }
  const OrderIngredientItem: FC<IOrderIngredientItem> = ({
    ingredient,
    index,
  }) => {
    const image = items.find((item) => item._id === ingredient)?.image;
    return (
      <div className={styles.ingredient_item} style={{ zIndex: 100 - index }}>
        <img src={image} alt="" />
      </div>
    );
  };
  interface IPrice {
    ingredients: Array<string>;
  }
  const Price = ({ ingredients }: IPrice) => {
    let sum: number = 0;
    ingredients.forEach((ingredient) => {
      const price = items.find((item) => item._id === ingredient)?.price;
      sum += price!;
    });
    return (
      <div className={styles.total_price}>
        <p className="text text_type_digits-default">{sum}</p>
        <CurrencyIcon type="primary" />
      </div>
    );
  };

  const OrderInfo = (order: any) => {
    const ingredients = order.order.ingredients;
    const visibleIngredients = ingredients.slice(0, 5);
    const remainingIngredientsCount = ingredients.length - 5;
    return (
      <div className={styles.order_container}>
        <span className={styles.order_stats}>
          <p className="text text_type_digits-default">{order.order.number}</p>
          <p className="text text_type_main-default text_color_inactive">
            <OrderDate orderdate={order.order.createdAt} />
          </p>
        </span>
        <p className="text text_type_main-medium">{order.order.name}</p>
        <span className={styles.order_content}>
          <div className={styles.order_ingredients}>
            {visibleIngredients.map((ingredient: any, index: number) => {
              if (index === 4 && remainingIngredientsCount > 0) {
                return (
                  <div
                    className={styles.ingredient_item}
                    key={index}
                    style={{ zIndex: 100 - index, position: "relative" }}
                  >
                    <img
                      src={items.find((item) => item._id === ingredient)?.image}
                      alt=""
                    />
                    <div className={styles.overlay}>
                      <span className="text text_type_main-default">
                        +{remainingIngredientsCount}
                      </span>
                    </div>
                  </div>
                );
              }
              return (
                <OrderIngredientItem
                  ingredient={ingredient}
                  index={index}
                  key={index}
                />
              );
            })}
          </div>
          <Price ingredients={order.order.ingredients} />
        </span>
      </div>
    );
  };
  const ordersDone = test_data.orders
    .filter((order) => order.status === "done")
    .slice(0, 10);
  const ordersPending = test_data.orders
    .filter((order) => order.status === "pending")
    .slice(0, 10);
  return (
    <div className={styles.container}>
      <h2 className="text text_type_main-large pt-10 pb-5">Лента заказов</h2>
      <main className={styles.main_container}>
        <div className={styles.orderslist}>
          {test_data.orders.map((order) => (
            <OrderInfo order={order} key={order._id} />
          ))}
        </div>
        <div className={styles.orders_numbers}>
          <div className={styles.orders_statuses}>
            <div className={styles.orders_status}>
              <h3 className="text text_type_main-large pb-6">Готовы</h3>
              <div className={styles.orders_numbers_list}>
                {ordersDone.map((order) => (
                  <p
                    style={{ color: "#00CCCC" }}
                    className="text text_type_digits-default"
                  >
                    {order.number}
                  </p>
                ))}
              </div>
            </div>
            <div className={styles.orders_status}>
              <h3 className="text text_type_main-large pb-6">В работе</h3>
              <div className={styles.orders_numbers_list}>
                {ordersPending.map((order) => (
                  <p className="text text_type_digits-default">
                    {order.number}
                  </p>
                ))}
              </div>
            </div>
          </div>
          <div className={styles.orders_stats}>
            <h2 className="text text_type_main-medium pt-15">
              Выполнено за всё время:
            </h2>
            <p className={`text text_type_digits-large ${styles.glow}`}>
              {test_data.total}
            </p>
            <h2 className="text text_type_main-medium pt-15">
              Выполнено за сегодня:
            </h2>
            <p className={`text text_type_digits-large ${styles.glow}`}>
              {test_data.totalToday}
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};
