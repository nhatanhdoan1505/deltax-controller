import { useEffect, useRef, useState } from "react";
import { Layer, Stage, Image } from "react-konva";
import Konva from "konva";
import useImage from "use-image";
import { useStageSize } from "hook";

export function ImageViewer({
  width,
  height,
}: {
  width: number;
  height: number;
}) {
  const [image] = useImage(
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60"
  );
  const stageRef = useRef<Konva.Stage>(null!);
  const imageRef = useRef<Konva.Image>(null!);
  const [imageRefState, setImageRefState] = useState<Konva.Image>(null!);
  const { widthReal, heightReal, naturalHeight, naturalWidth } = useStageSize({
    width,
    height,
    imageRef: imageRefState,
  });

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
    if (
      stageRef.current &&
      widthReal &&
      heightReal &&
      naturalHeight &&
      naturalWidth
    ) {
      stageRef.current.width(widthReal);
      stageRef.current.height(heightReal);
      imageRef.current.scaleX(widthReal / naturalWidth);
      imageRef.current.scaleY(heightReal / naturalHeight);
    }
  }, [image, stageRef, widthReal, heightReal, naturalHeight, naturalWidth]);

  return (
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
  );
}
