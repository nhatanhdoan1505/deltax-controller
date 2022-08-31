import Konva from "konva";
import { MutableRefObject, useEffect } from "react";

export function useScaleImage({
  stageRef,
  widthImage,
  heightImage,
  naturalHeight,
  naturalWidth,
  image,
  imageRef,
}: {
  stageRef: MutableRefObject<Konva.Stage>;
  widthImage: number;
  heightImage: number;
  naturalHeight: number;
  naturalWidth: number;
  image: HTMLImageElement | undefined;
  imageRef: MutableRefObject<Konva.Image>;
}) {
  useEffect(() => {
    if (
      stageRef.current &&
      widthImage &&
      heightImage &&
      naturalHeight &&
      naturalWidth
    ) {
      stageRef.current.width(widthImage);
      stageRef.current.height(heightImage);
      imageRef.current.scaleX(widthImage / naturalWidth);
      imageRef.current.scaleY(heightImage / naturalHeight);
    }
  }, [image, stageRef, widthImage, heightImage, naturalHeight, naturalWidth]);
}
