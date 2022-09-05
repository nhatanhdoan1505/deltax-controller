import { socketEmit } from "utils";
import { useCallback, useContext, useEffect, useState } from "react";
import { AppContext, SocketEvent, SocketPayload } from "store";

export function useClickController({
  value,
  speed,
}: {
  value: SocketPayload;
  speed: number;
}) {
  const [isMouseDown, setIsMouseDown] = useState<boolean>(false);
  const [_interval, set_Interval] = useState<any>(null);
  const { state } = useContext(AppContext);
  const { socket } = state;

  const handleEvent = useCallback(
    (_function: Function) => {
      set_Interval(
        setInterval(() => {
          console.log("aaa");
          _function();
        }, speed)
      );
    },
    [isMouseDown, speed]
  );

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => e.preventDefault());
  }, []);

  const onPressHandler = useCallback(() => {
    socketEmit({ type: SocketEvent.MOVE, payload: { ...value }, socket });
  }, [socket, value]);

  const onMouseDown = () => {
    handleEvent(onPressHandler);
  };

  const onMouseUp = () => {
    clearInterval(_interval);
  };

  return { onMouseDown, onMouseUp, onPressHandler };
}
