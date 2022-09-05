import {
  useImageCrop,
  useLookZoom,
  useScaleImage,
  useStageSize,
  useTowFingersZoom,
} from "hook";
import Konva from "konva";
import { useEffect, useRef, useState } from "react";
import { Image, Layer, Stage } from "react-konva";
import useImage from "use-image";
import { getNumberTouches } from "utils";

export function ImageViewer({
  imageUrl,
  width,
  height,
}: {
  imageUrl: string;
  width: number;
  height: number;
}) {
  const [image] = useImage(
    imageUrl
    // "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
  );
  const stageRef = useRef<Konva.Stage>(null!);
  const imageRef = useRef<Konva.Image>(null!);
  const zoomRef = useRef<Konva.Image>(null!);
  const [imageRefState, setImageRefState] = useState<Konva.Image>(null!);
  const [widthImage, setWidthImage] = useState<number>(null!);
  const [heightImage, setHeightImage] = useState<number>(null!);
  const [isDraggable, setIsDraggable] = useState<boolean>(false);

  const { widthSize, heightSize, naturalHeight, naturalWidth } = useStageSize({
    width,
    height,
    imageRef: imageRefState,
  });

  const { widthCrop, heightCrop } = useImageCrop({
    max: width >= height ? height : width,
    imageRef: imageRef,
    stageRef: stageRef,
    naturalHeight,
    naturalWidth,
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

  const { zoomStart, zoomTouch, outZoomTouch } = useLookZoom({
    stageRef,
    imageRef,
    zoomRef,
    currentStage: { width: widthImage, height: heightImage },
  });

  const { zoomTwoFingers, setLastCenter, setLastDist } = useTowFingersZoom({
    imageRef,
    stageRef,
  });

  useEffect(() => {
    widthSize && setWidthImage(widthSize);
    heightSize && setHeightImage(heightSize);
  }, [widthSize, heightSize]);

  useEffect(() => {
    widthCrop && setWidthImage(widthCrop);
    heightCrop && setHeightImage(heightCrop);
  }, [widthCrop, heightCrop]);

  useEffect(() => {
    if (
      imageRef.current &&
      imageRef.current.attrs &&
      imageRef.current.attrs.image
    ) {
      setImageRefState(imageRef.current);
    }
  }, [imageRef, image]);

  return (
    <Stage
      style={{
        boxShadow:
          "rgba(0, 0, 0, 0.02) 0px 1px 3px 0px, rgba(27, 31, 35, 0.15) 0px 0px 0px 1px",
      }}
      ref={stageRef}
      onMouseDown={zoomStart}
      onMouseMove={zoomTouch}
      onMouseUp={outZoomTouch}
      onTouchStart={(evt) => {
        const touches = getNumberTouches(evt);
        if (touches === 1) zoomStart();
      }}
      onTouchMove={(evt) => {
        const touches = getNumberTouches(evt);
        if (touches === 1) zoomTouch();
        else if (touches === 2) zoomTwoFingers({ evt });
        // else if (touches === 3) setIsDraggable(true);
      }}
      onTouchEnd={() => {
        setLastDist(0);
        setLastCenter(null!);
        setIsDraggable(false);
        outZoomTouch();
      }}
    >
      <Layer x={0} y={0}>
        <Image image={image} ref={imageRef} draggable={isDraggable} />
        <Image image={undefined} x={0} y={0} ref={zoomRef} />
      </Layer>
    </Stage>
  );
}
