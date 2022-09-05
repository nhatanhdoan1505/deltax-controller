import { MutableRefObject, useState } from "react";
import { getCenter, getDistance } from "utils";
import Konva from "konva";

export function useTowFingersZoom({
  stageRef,
  imageRef,
}: {
  imageRef: MutableRefObject<Konva.Image>;
  stageRef: MutableRefObject<Konva.Stage>;
}) {
  const [lastCenter, setLastCenter] = useState<{ x: number; y: number }>(null!);
  const [lastDist, setLastDist] = useState<number>(0);

  const zoomTwoFingers = ({
    evt,
  }: {
    evt: Konva.KonvaEventObject<TouchEvent>;
  }) => {
    evt.evt.preventDefault();
    const touch1 = evt.evt.touches[0];
    const touch2 = evt.evt.touches[1];

    if (touch1 && touch2) {
      if (stageRef.current.isDragging()) {
        stageRef.current.stopDrag();
      }

      const p1 = {
        x: touch1.clientX * imageRef.current.scaleX(),
        y: touch1.clientY * imageRef.current.scaleY(),
      };
      const p2 = {
        x: touch2.clientX * imageRef.current.scaleX(),
        y: touch2.clientY * imageRef.current.scaleY(),
      };

      const currentCenter = getCenter(p1, p2);
      if (!lastCenter) {
        setLastCenter(currentCenter);
        return;
      }

      const newCenter = getCenter(p1, p2);

      const dist = getDistance(p1, p2);

      const pointTo = {
        x: (newCenter.x - stageRef.current.x()) / stageRef.current.scaleX(),
        y: (newCenter.y - stageRef.current.y()) / stageRef.current.scaleX(),
      };

      let scale = lastDist
        ? stageRef.current.scaleX() * (dist / lastDist)
        : stageRef.current.scaleX();
      scale = scale < 1 ? 1 : scale;

      stageRef.current.scaleX(scale);
      stageRef.current.scaleY(scale);

      const dx = lastCenter
        ? newCenter.x - lastCenter.x
        : newCenter.x - currentCenter.x;
      const dy = lastCenter
        ? newCenter.y - lastCenter.y
        : newCenter.y - currentCenter.y;

      const newPos = {
        x: scale === 1 ? 0 : newCenter.x - pointTo.x * scale + dx,
        y: scale === 1 ? 0 : newCenter.y - pointTo.y * scale + dy,
      };

      stageRef.current.position(newPos);

      setLastDist(dist);
      setLastCenter(newCenter);
    }
  };

  return { zoomTwoFingers, setLastCenter, setLastDist };
}
