import { AppContext, SocketEvent } from "store";
import { useContext, useEffect, useLayoutEffect, useState } from "react";
import { Center, Image } from "@chakra-ui/react";
import { Buffer } from "buffer";

export function Source() {
  const { state } = useContext(AppContext);
  const { socket } = state;
  const [buffer, setBuffer] = useState<any>(null!);

  useLayoutEffect(() => {
    socket.on(SocketEvent.LIVE_CAMERA, (data: any) => {
      setBuffer(data);
    });
  }, [socket]);
  return buffer ? (
    <Center w="100%" h="100%">
      <Image src={`data:image/png;base64, ${buffer}`} alt="LIVE CAMERA" />
    </Center>
  ) : null;
}
