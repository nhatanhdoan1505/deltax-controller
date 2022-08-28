import { useFBX } from "@react-three/drei";
import { PrimitiveProps, ThreeElements } from "@react-three/fiber";
import { useEffect, useRef } from "react";

export function Robot() {
  const robotRef = useRef<any>(null!);
  const fbx = useFBX("/model/v5.fbx");
  useEffect(() => {
    if (robotRef.current) {
      console.log(robotRef.current);
      console.log(robotRef.current.children.map((v: any) => v.name));

      // const skeleton = robotRef.current.children[0].skeleton;
      // const bones = skeleton.bones as Array<any>;
      // console.log(bones);
      // const childrenName = bones[10].children.map(
      //   (c: any) => c.name
      // ) as string[];
      // for (let i in bones) {
      //   if (childrenName.includes(bones[i].name)) {
      //     const { x, y, z } = bones[i].position;
      //     bones[i].position.set(x + 2, y, z);
      //   }
      // }
      // console.log(bones);
    }
  }, [robotRef]);
  return (
    <primitive
      rotation={[0, 0, 0]}
      object={fbx}
      scale={0.25}
      ref={robotRef}
      position={[0, 10, 0]}
    />
  );
}
