import Konva from "konva";
import { useEffect, useState } from "react";

export function useStageSize({
  width,
  height,
  imageRef,
}: {
  imageRef: Konva.Image;
  width: number;
  height: number;
}) {
  const [widthReal, setWidthReal] = useState<number>(null!);
  const [heightReal, setHeightReal] = useState<number>(null!);
  const [ratio, setRatio] = useState<number>(null!);
  const [_naturalWidth, setNaturalWidth] = useState<number>(null!);
  const [_naturalHeight, setNaturalHeight] = useState<number>(null!);

  useEffect(() => {
    if (!imageRef) return;
    const { naturalWidth, naturalHeight } = imageRef.attrs.image;
    setRatio(naturalWidth / naturalHeight);
    setNaturalHeight(naturalHeight);
    setNaturalWidth(naturalWidth);
  }, [imageRef]);

  useEffect(() => {
    if (!width || !height) return;
    setWidthReal(width >= height ? height : width);
  }, [width, height]);

  useEffect(() => {
    if (!imageRef) return;
    const imageWidth = imageRef.width();
    const imageHeight = imageRef.height();

    setRatio(imageWidth / imageHeight);
  }, [imageRef]);

  useEffect(() => {
    if (!ratio || !widthReal) return;
    setHeightReal(widthReal / ratio);
  }, [widthReal, ratio]);

  return {
    widthReal,
    heightReal,
    naturalWidth: _naturalWidth,
    naturalHeight: _naturalHeight,
  };
}
