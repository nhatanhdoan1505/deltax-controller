import { Center, Image } from "@chakra-ui/react";
import { useContext, useEffect, useRef, useState } from "react";
import ReactCrop, { Crop, PercentCrop } from "react-image-crop";
import "react-image-crop/dist/ReactCrop.css";
import { AppContext, DashboardEvent } from "store";
import { appDispatch, centerAspectCrop } from "utils";

export function ImageCrop({
  image,
  width,
  height,
}: {
  image: string;
  width: number;
  height: number;
}) {
  const { state, dispatch } = useContext(AppContext);
  const [crop, setCrop] = useState<Crop>();
  const [aspect] = useState<number>(width / height);
  const [completedCrop, setCompletedCrop] = useState<PercentCrop>();
  const imageRef = useRef<HTMLImageElement>(null);

  function onImageLoad(_e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      setCrop(centerAspectCrop(width, height, aspect));
    }
  }

  useEffect(() => {
    if (completedCrop) {
      appDispatch({
        type: DashboardEvent.SET_PLUGIN_OBJECT_DETECTING_VIEWER_CROP_VALUE,
        payload: { crop: completedCrop },
        state,
        dispatch,
      });
    }
  }, [completedCrop, dispatch]);

  return (
    <Center maxW={width}>
      <ReactCrop
        crop={crop}
        onChange={(_pixelCrop, percentCrop) => setCrop(percentCrop)}
        onComplete={(_c, p) => {
          setCompletedCrop(p);
        }}
        aspect={undefined}
      >
        <Image
          ref={imageRef}
          alt="Crop me"
          src={`${image}`}
          onLoad={onImageLoad}
        />
      </ReactCrop>
    </Center>
  );
}
