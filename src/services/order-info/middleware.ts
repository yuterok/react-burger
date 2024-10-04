import { feedWsActions } from "./feed-actions";
import { profileOrdersWsActions } from "./profile-actions";
import { refreshToken } from "../../utils/request";

export interface IOrder {
  _id: string;
  ingredients: string[];
  status: "done" | "pending" | "created";
  name: string;
  number: number;
  createdAt: string;
  updatedAt: string;
}

export interface IOrdersResponse {
  orders: IOrder[];
  total: number;
  totalToday: number;
}

const createWebSocketMiddleware = (wsActions: any) => {
  return (storeAPI: any) => {
    let socket: WebSocket | null = null;

    return (next: any) => (action: any) => {
      const { dispatch } = storeAPI;
      const { type } = action;

      if (type === wsActions.wsInit) {
        const wsUrl = (action as { payload: string }).payload;
        socket = new WebSocket(wsUrl);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: wsActions.onOpen, payload: event });
          console.log("WebSocket connection established");
        };

        socket.onerror = (event) => {
          dispatch({ type: wsActions.onError, payload: event });
          console.error("WebSocket error:", event);
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          if (parsedData.message === "Invalid or missing token") {
            refreshToken();
          } else {
            dispatch({ type: wsActions.onMessage, payload: parsedData });
          }
        };
        socket.onclose = (event) => {
          dispatch({ type: wsActions.onClose, payload: event });
          console.log("WebSocket connection closed");
        };
      }
      return next(action);
    };
  };
};

export const feedMiddleware = createWebSocketMiddleware(feedWsActions);
export const profileOrdersMiddleware = createWebSocketMiddleware(
  profileOrdersWsActions
);
