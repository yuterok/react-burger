export const WS_PROFILE_ORDERS_CONNECT_START: "WS_PROFILE_CONNECT_START" =
  "WS_PROFILE_CONNECT_START";
export const WS_PROFILE_ORDERS_CONNECT_SUCCESS: "WS_PROFILE_CONNECT_SUCCESS" =
  "WS_PROFILE_CONNECT_SUCCESS";
export const WS_PROFILE_ORDERS_DISCONNECT: "WS_PROFILE_DISCONNECT" =
  "WS_PROFILE_DISCONNECT";
export const WS_PROFILE_ORDERS_MESSAGE: "WS_PROFILE_MESSAGE" =
  "WS_PROFILE_MESSAGE";
export const WS_PROFILE_ORDERS_ERROR: "WS_PROFILE_ERROR" = "WS_PROFILE_ERROR";

interface IconnectProfileOrdersStart {
  readonly type: typeof WS_PROFILE_ORDERS_CONNECT_START;
  readonly payload: string;
}
export const connectProfileOrders = (
  token: string
): IconnectProfileOrdersStart => ({
  type: WS_PROFILE_ORDERS_CONNECT_START,
  payload: `wss://norma.nomoreparties.space/orders?token=${token}`,
});

export const disconnectProfileOrders = () => ({
  type: WS_PROFILE_ORDERS_DISCONNECT,
});

export const profileOrdersMessage = (data: any) => ({
  type: WS_PROFILE_ORDERS_MESSAGE,
  payload: data,
});

export const profileOrdersError = (error: any) => ({
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
