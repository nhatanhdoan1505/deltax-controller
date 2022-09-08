import { KonvaEventObject } from "konva/lib/Node";
import { MutableRefObject } from "react";
import Konva from "konva";
import { Vector2d } from "konva/lib/types";

export function useWheelZoom({
  stageRef,
}: {
  stageRef: MutableRefObject<Konva.Stage>;
}) {
  const scaleBy = 1.01;
  const onWheel = (evt: KonvaEventObject<WheelEvent>) => {
    evt.evt.preventDefault();

    const oldScale = stageRef.current.scaleX();
    const pointer = stageRef.current.getPointerPosition() as Vector2d;

    const mousePointTo = {
      x: (pointer.x - stageRef.current.x()) / oldScale,
      y: (pointer.y - stageRef.current.y()) / oldScale,
    };

    let direction = evt.evt.deltaY > 0 ? 1 : -1;

    if (evt.evt.ctrlKey) {
      direction = -direction;
    }

    let newScale = direction > 0 ? oldScale * scaleBy : oldScale / scaleBy;

    newScale = newScale < 1 ? 1 : newScale;
    stageRef.current.scale({
      x: newScale,
      y: newScale,
    });

    const newPos = {
      x: newScale === 1 ? 0 : pointer.x - mousePointTo.x * newScale,
      y: newScale === 1 ? 0 : pointer.y - mousePointTo.y * newScale,
    };

    stageRef.current.position(newPos);
  };

  return { onWheel };
}
