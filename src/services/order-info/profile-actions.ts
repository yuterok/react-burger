export const WS_PROFILE_ORDERS_CONNECT_START: "WS_PROFILE_CONNECT_START" =
  "WS_PROFILE_CONNECT_START";
export const WS_PROFILE_ORDERS_CONNECT_SUCCESS: "WS_PROFILE_CONNECT_SUCCESS" =
  "WS_PROFILE_CONNECT_SUCCESS";
export const WS_PROFILE_ORDERS_DISCONNECT: "WS_PROFILE_DISCONNECT" =
  "WS_PROFILE_DISCONNECT";
export const WS_PROFILE_ORDERS_MESSAGE: "WS_PROFILE_MESSAGE" =
  "WS_PROFILE_MESSAGE";
export const WS_PROFILE_ORDERS_ERROR: "WS_PROFILE_ERROR" = "WS_PROFILE_ERROR";

interface IconnectProfileOrders {
  readonly type: typeof WS_PROFILE_ORDERS_CONNECT_START;
  readonly payload: string;
}
interface IsuccessProfileOrders {
  readonly type: typeof WS_PROFILE_ORDERS_CONNECT_SUCCESS;
  readonly payload: Event;
}
interface IdisconnectProfileOrders {
  readonly type: typeof WS_PROFILE_ORDERS_DISCONNECT;
}
interface IProfileOrdersMessage {
  readonly type: typeof WS_PROFILE_ORDERS_MESSAGE;
  readonly payload: any;
}
interface IProfileOrdersError {
  readonly type: typeof WS_PROFILE_ORDERS_ERROR;
  readonly payload: any;
}

export type ProfileOrdersActions =
  | IconnectProfileOrders
  | IsuccessProfileOrders
  | IdisconnectProfileOrders
  | IProfileOrdersMessage
  | IProfileOrdersError;

export const connectProfileOrders = (token: string): IconnectProfileOrders => ({
  type: WS_PROFILE_ORDERS_CONNECT_START,
  payload: `wss://norma.nomoreparties.space/orders?token=${token}`,
});

export const disconnectProfileOrders = (): IdisconnectProfileOrders => ({
  type: WS_PROFILE_ORDERS_DISCONNECT,
});

export const profileOrdersMessage = (data: any): IProfileOrdersMessage => ({
  type: WS_PROFILE_ORDERS_MESSAGE,
  payload: data,
});

export const profileOrdersError = (error: any): IProfileOrdersError => ({
  type: WS_PROFILE_ORDERS_ERROR,
  payload: error,
});

export const profileOrdersWsActions = {
  wsInit: WS_PROFILE_ORDERS_CONNECT_START,
  onOpen: WS_PROFILE_ORDERS_CONNECT_SUCCESS,
  onClose: WS_PROFILE_ORDERS_DISCONNECT,
  onError: WS_PROFILE_ORDERS_ERROR,
  onMessage: WS_PROFILE_ORDERS_MESSAGE,
};
