import { getPositionZoom } from "utils";
import Konva from "konva";
import { Vector2d } from "konva/lib/types";
import { MutableRefObject, useState } from "react";

export function useLookZoom({
  stageRef,
  currentStage,
  imageRef,
  zoomRef,
}: {
  stageRef: MutableRefObject<Konva.Stage>;
  currentStage: { width: number; height: number };
  imageRef: MutableRefObject<Konva.Image>;
  zoomRef: MutableRefObject<Konva.Image>;
}) {
  const [isZoom, setIsZoom] = useState<boolean>(false);
  const zoomScope = 50;

  const copyImageProperty = () => {
    let x = imageRef.current.x();
    let y = imageRef.current.y();
    let scaleX = imageRef.current.scaleX();
    let scaleY = imageRef.current.scaleY();
    let image = imageRef.current.image();
    zoomRef.current.x(x);
    zoomRef.current.y(y);
    zoomRef.current.scaleX(scaleX);
    zoomRef.current.scaleY(scaleY);
    zoomRef.current.image(image);
  };

  const zoomStart = () => {
    setIsZoom(true);
    copyImageProperty();
    let sideOfSquare =
      currentStage.width >= currentStage.height
        ? currentStage.height
        : currentStage.width;
    sideOfSquare = sideOfSquare / 3;
    sideOfSquare = sideOfSquare < 100 ? 100 : sideOfSquare;

    let { x, y } = stageRef.current.getPointerPosition() as Vector2d;
    console.log({ x, y });

    const zoomPosition = getPositionZoom({
      x,
      y,
      width: currentStage.width,
      height: currentStage.height,
      xStage: stageRef.current.x(),
      yStage: stageRef.current.y(),
      scaleX: stageRef.current.scaleX(),
      scaleY: stageRef.current.scaleY(),
      sideOfSquare,
    });

    x =
      (x - stageRef.current.x()) / stageRef.current.scaleX() -
      imageRef.current.x();
    y =
      (y - stageRef.current.y()) / stageRef.current.scaleY() -
      imageRef.current.y();

    console.log({
      scale: imageRef.current.scaleX(),
      width: stageRef.current.width(),
      naturalWidth: imageRef.current.attrs.image.naturalWidth,
    });

    console.log({ x, y });

    console.log({ crop: imageRef.current.crop() });

    const xImage =
      x / zoomRef.current.scaleX() +
      imageRef.current.crop().x * imageRef.current.scaleX();
    const yImage =
      y / zoomRef.current.scaleY() +
      imageRef.current.crop().y * imageRef.current.scaleY();

    console.log({ xImage, yImage });
    zoomRef.current.crop({
      x: xImage - zoomScope / 2,
      y: yImage - zoomScope / 2,
      width: zoomScope,
      height: zoomScope,
    });
    zoomRef.current.position(zoomPosition);

    zoomRef.current.width(sideOfSquare);
    zoomRef.current.height(sideOfSquare);
    zoomRef.current.scaleX(1 / stageRef.current.scaleX());
    zoomRef.current.scaleY(1 / stageRef.current.scaleY());
  };

  const zoomTouch = () => {
    if (!isZoom) return;
    copyImageProperty();
    let sideOfSquare =
      currentStage.width >= currentStage.height
        ? currentStage.height
        : currentStage.width;
    sideOfSquare = sideOfSquare / 3;
    sideOfSquare = sideOfSquare < 100 ? 100 : sideOfSquare;

    let { x, y } = stageRef.current.getPointerPosition() as Vector2d;
    const zoomPosition = getPositionZoom({
      x,
      y,
      width: currentStage.width,
      height: currentStage.height,
      xStage: stageRef.current.x(),
      yStage: stageRef.current.y(),
      scaleX: stageRef.current.scaleX(),
      scaleY: stageRef.current.scaleY(),
      sideOfSquare,
    });
    x =
      (x - stageRef.current.x()) / stageRef.current.scaleX() -
      imageRef.current.x();
    y =
      (y - stageRef.current.y()) / stageRef.current.scaleY() -
      imageRef.current.y();
    const xImage =
      x / zoomRef.current.scaleX() +
      imageRef.current.crop().x * imageRef.current.scaleX();
    const yImage =
      y / zoomRef.current.scaleY() +
      imageRef.current.crop().y * imageRef.current.scaleY();

    zoomRef.current.crop({
      x: xImage - zoomScope / 2,
      y: yImage - zoomScope / 2,
      width: zoomScope,
      height: zoomScope,
    });
    zoomRef.current.position(zoomPosition);
    zoomRef.current.width(sideOfSquare);
    zoomRef.current.height(sideOfSquare);
    zoomRef.current.scaleX(1 / stageRef.current.scaleX());
    zoomRef.current.scaleY(1 / stageRef.current.scaleY());
  };

  const outZoomTouch = () => {
    zoomRef.current.x(0);
    zoomRef.current.y(0);
    zoomRef.current.width(0);
    zoomRef.current.height(0);
    setIsZoom(false);
  };

  return { zoomStart, zoomTouch, outZoomTouch };
}
