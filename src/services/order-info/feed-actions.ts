export const WS_FEED_CONNECT_START: "WS_FEED_CONNECT_START" =
  "WS_FEED_CONNECT_START";
export const WS_FEED_CONNECT_SUCCESS: "WS_FEED_CONNECT_SUCCESS" =
  "WS_FEED_CONNECT_SUCCESS";
export const WS_FEED_DISCONNECT: "WS_FEED_DISCONNECT" = "WS_FEED_DISCONNECT";
export const WS_FEED_MESSAGE: "WS_FEED_MESSAGE" = "WS_FEED_MESSAGE";
export const WS_FEED_ERROR: "WS_FEED_ERROR" = "WS_FEED_ERROR";

interface IconnectFeed {
  readonly type: typeof WS_FEED_CONNECT_START;
  readonly payload: string;
}

export const connectFeed = (): IconnectFeed => ({
  type: WS_FEED_CONNECT_START,
  payload: "wss://norma.nomoreparties.space/orders/all",
});

export const successFeed = () => ({
  type: WS_FEED_CONNECT_SUCCESS,
});

export const disconnectFeed = () => ({
  type: WS_FEED_DISCONNECT,
});

export const feedMessage = (data: any) => ({
  type: WS_FEED_MESSAGE,
  payload: data,
});

export const feedError = (error: any) => ({
  type: WS_FEED_ERROR,
  payload: error,
});

export const feedWsActions = {
  wsInit: WS_FEED_CONNECT_START,
  onOpen: WS_FEED_CONNECT_SUCCESS,
  onClose: WS_FEED_DISCONNECT,
  onError: WS_FEED_ERROR,
  onMessage: WS_FEED_MESSAGE,
};
