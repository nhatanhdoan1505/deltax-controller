import { Crop } from "react-image-crop";
import Konva from "konva";
import {
  MutableRefObject,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { AppContext } from "store";
export function useImageCrop({
  max,
  imageRef,
  stageRef,
  naturalWidth,
  naturalHeight,
}: {
  max: number;
  naturalWidth: number;
  naturalHeight: number;
  imageRef: MutableRefObject<Konva.Image>;
  stageRef: MutableRefObject<Konva.Stage>;
}) {
  const { state } = useContext(AppContext);
  const { isApplyCrop } = state.dashboard.plugin.objectDetecting.viewer.crop;

  const [widthCrop, setWidthCrop] = useState<number>(null!);
  const [heightCrop, setHeightCrop] = useState<number>(null!);

  const applyCrop = useCallback(
    ({
      _naturalWidth,
      _naturalHeight,
      crop,
    }: {
      crop: Crop;
      _naturalWidth: number;
      _naturalHeight: number;
    }) => {
      if (!crop) return;
      const width = (crop.width * _naturalWidth) / 100;
      const height = (crop.height * _naturalHeight) / 100;
      const x = (crop.x * _naturalWidth) / 100;
      const y = (crop.y * _naturalHeight) / 100;
      imageRef.current.crop({ width, height, x, y });
      imageRef.current.x(0);
      imageRef.current.y(0);
      stageRef.current.scaleX(1);
      stageRef.current.scaleY(1);
      stageRef.current.x(0);
      stageRef.current.y(0);

      calculateImageSize({
        aspect: width / height,
        width,
        height,
      });
    },
    [state, imageRef, stageRef]
  );

  const calculateImageSize = ({
    aspect,
    width,
    height,
  }: {
    aspect: number;
    width: number;
    height: number;
  }) => {
    if (width >= height) {
      width = width > max ? max : width;
      height = width / aspect;
    } else {
      height = height > max ? max : height;
      width = height * aspect;
    }
    setWidthCrop(width);
    setHeightCrop(height);
  };

  useEffect(() => {
    if (
      isApplyCrop &&
      stageRef &&
      stageRef.current &&
      imageRef &&
      imageRef.current &&
      imageRef.current.attrs &&
      naturalWidth &&
      naturalHeight &&
      state.dashboard.plugin.objectDetecting.viewer.crop.crop
    ) {
      applyCrop({
        _naturalHeight: naturalHeight,
        _naturalWidth: naturalWidth,
        crop: state.dashboard.plugin.objectDetecting.viewer.crop.crop!,
      });
    }
  }, [
    isApplyCrop,
    stageRef,
    imageRef,
    naturalWidth,
    naturalHeight,
    state.dashboard.plugin.objectDetecting.viewer.crop.crop,
  ]);

  return { widthCrop, heightCrop };
}
