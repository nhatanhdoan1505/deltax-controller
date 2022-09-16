import { AppContext, SocketEvent } from "store";
import { useContext, useEffect, useState } from "react";
import { Center, Image } from "@chakra-ui/react";

export function Source() {
  const { state } = useContext(AppContext);
  const { socket } = state;
  const [urlImage, setUrlImage] = useState<string>("");

  useEffect(() => {
    socket.on(SocketEvent.LIVE_CAMERA, (data: string) => {
      setUrlImage(data);
    });
  }, [socket]);
  return (
    <Center w="100%" h="100%">
      <Image src={`data:image/png;base64, ${urlImage}`} alt="LIVE CAMERA" />
    </Center>
  );
}
