import { Socket } from "socket.io-client";
import { SocketEvent, SocketPayload } from "store";
export function socketEmit({
  socket,
  type,
  payload,
}: {
  socket: Socket;
  type: SocketEvent;
  payload: SocketPayload;
}): void {
  switch (type) {
    case SocketEvent.MOVE:
      socket.emit(SocketEvent.MOVE, { ...payload.jogging });
      break;

    default:
      break;
  }
}
