import { centerCrop, makeAspectCrop } from "react-image-crop";

export function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number
) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: "%",
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight
    ),
    mediaWidth,
    mediaHeight
  );
}

export const detectAreaZoom = ({
  x,
  y,
  width,
  height,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
}) => {
  let horizontalPivot = width / 2;
  let verticalPivot = height / 2;
  return x <= horizontalPivot && y <= verticalPivot
    ? 1
    : x >= horizontalPivot && y <= verticalPivot
    ? 2
    : x <= horizontalPivot && y >= verticalPivot
    ? 3
    : 4;
};

export const getPositionZoom = ({
  x,
  y,
  width,
  height,
  xStage,
  yStage,
  scaleX,
  scaleY,
  sideOfSquare,
}: {
  x: number;
  y: number;
  width: number;
  height: number;
  xStage: number;
  yStage: number;
  scaleX: number;
  scaleY: number;
  sideOfSquare: number;
}) => {
  const area = detectAreaZoom({
    x,
    y,
    width,
    height,
  });
  let position = { x: 0, y: 0 };
  switch (area) {
    case 1:
      position = detectRealPosition({
        xStage,
        yStage,
        scaleX,
        scaleY,
        x: width - sideOfSquare,
        y: height - sideOfSquare,
      });
      break;
    case 2:
      position = detectRealPosition({
        xStage,
        yStage,
        scaleX,
        scaleY,
        x: 0,
        y: height - sideOfSquare,
      });
      break;
    case 3:
      position = detectRealPosition({
        xStage,
        yStage,
        scaleX,
        scaleY,
        x: width - sideOfSquare,
        y: 0,
      });
      break;
    case 4:
      position = detectRealPosition({
        xStage,
        yStage,
        scaleX,
        scaleY,
        x: 0,
        y: 0,
      });
      break;
    default:
      break;
  }

  return position;
};

export const detectRealPosition = ({
  x,
  y,
  xStage,
  yStage,
  scaleX,
  scaleY,
}: {
  x: number;
  y: number;
  xStage: number;
  yStage: number;
  scaleX: number;
  scaleY: number;
}) => {
  return { x: (x - xStage) / scaleX, y: (y - yStage) / scaleY };
};
