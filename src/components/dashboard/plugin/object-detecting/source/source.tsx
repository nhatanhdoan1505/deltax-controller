import { Center } from "@chakra-ui/react";
import { useScaleImage, useStageSize } from "hook";
import Konva from "konva";
import { useContext, useEffect, useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import { AppContext, SocketEvent } from "store";
import useImage from "use-image";

export function Source({ width, height }: { width: number; height: number }) {
  const { state } = useContext(AppContext);
  const { socket } = state;
  const [buffer, setBuffer] = useState<any>(null!);
  const [image] = useImage(
    `data:image/png;base64, ${buffer}`
    // "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
  );

  const stageRef = useRef<Konva.Stage>(null!);
  const imageRef = useRef<Konva.Image>(null!);
  const [imageRefState, setImageRefState] = useState<Konva.Image>(null!);
  const [widthImage, setWidthImage] = useState<number>(null!);
  const [heightImage, setHeightImage] = useState<number>(null!);
  const [bufferList, setBufferList] = useState<string[]>([]);
  const [doneLoading, setDoneLoading] = useState<boolean>(true);
  
  const { widthSize, heightSize, naturalHeight, naturalWidth } = useStageSize({
    width,
    height,
    imageRef: imageRefState,
  });

  useScaleImage({
    stageRef,
    widthImage,
    heightImage,
    naturalHeight,
    naturalWidth,
    image,
    imageRef,
  });

  useEffect(() => {
    socket.on(SocketEvent.LIVE_CAMERA, (data: string) => {
      //convert string to array buffer
      // const arrayBuffer = new Uint8Array(data.length);

      // console.log(new Uint8Array(data.length));
      // const blob = new Blob([new Uint8Array(data.length)], {
      //   type: "image/jpeg",
      // }) as globalThis.Blob | MediaSource;
      // const url = URL.createObjectURL(blob);
      setBuffer(data);
      // setBufferList((prev) => [...prev, data]);
    });
  }, [socket]);

  // useEffect(() => {
  //   console.log("done");
  //   doneLoading && setBuffer(bufferList[0]);
  // }, [doneLoading]);

  // useEffect(() => {
  //   console.log("image");
  //   if (image) {
  //     setDoneLoading(false);
  //     bufferList.length > 0 && bufferList.shift();
  //     setBufferList(bufferList);
  //     setDoneLoading(true);
  //   }
  // }, [image]);

  useEffect(() => {
    if (
      imageRef.current &&
      imageRef.current.attrs &&
      imageRef.current.attrs.image
    ) {
      setImageRefState(imageRef.current);
    }
  }, [imageRef, image]);

  useEffect(() => {
    widthSize && setWidthImage(widthSize);
    heightSize && setHeightImage(heightSize);
  }, [widthSize, heightSize]);

  return buffer ? (
    <Center w="100%" h="100%">
      {/* <Image
        src={`data:image/png;base64, ${buffer}`}
        alt="LIVE CAMERA"
        h="100%"
        w="auto"
      /> */}
      {/* <Image src={`${buffer}`} alt="LIVE CAMERA" h="100%" w="auto" /> */}
      <Stage
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
        }}
        ref={stageRef}
      >
        <Layer x={0} y={0}>
          <Image image={image} ref={imageRef} />
        </Layer>
      </Stage>
    </Center>
  ) : null;
}
