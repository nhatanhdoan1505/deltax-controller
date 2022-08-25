import {
  ContactShadows,
  Environment,
  GizmoHelper,
  GizmoViewport,
  OrbitControls,
  PresentationControls,
} from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Suspense } from "react";
import { Loader, Robot } from ".";

export function Scene() {
  return (
    <Canvas
      gl={{ logarithmicDepthBuffer: true, antialias: false }}
      dpr={[1, 1.5]}
      camera={{
        position: [0, 0, 60],
        fov: 25,
      }}
    >
      {/* <color attach="background" args={["#15151a"]} /> */}
      <Suspense fallback={<Loader />}>
        <Robot />
      </Suspense>
      {/* <PresentationControls
        global
        config={{ mass: 2, tension: 500 }}
        snap={{ mass: 4, tension: 1500 }}
        rotation={[0, 0.3, 0]}
        polar={[-Math.PI / 3, Math.PI / 3]}
        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
      >
        <Robot
          rotation={[-Math.PI / 2, 0, 0]}
          position={[0, 0.25, 0]}
          scale={0.003}
        />
      </PresentationControls> */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[0, 30, 50]} intensity={1} color="white" />
      <directionalLight position={[0, 50, 0]} intensity={1} color="white" />
      <directionalLight position={[50, 0, 0]} intensity={1} color="white" />
      <directionalLight
        position={[-1, -2, -5]}
        intensity={0.2}
        color="#0c8cbf"
      />
      <spotLight
        position={[5, 0, 5]}
        intensity={2.5}
        penumbra={1}
        angle={0.35}
        castShadow
        color="red"
      />
      <group position={[0, -3.5, 0]}>
        <ContactShadows
          resolution={1024}
          frames={1}
          position={[0, -3, 0]}
          scale={20}
          blur={10}
          far={20}
          key={undefined}
          onPointerMissed={undefined}
          quaternion={undefined}
          attach={undefined}
          args={undefined}
          children={undefined}
          onUpdate={undefined}
          up={undefined}
          rotation={undefined}
          matrix={undefined}
          layers={undefined}
          dispose={undefined}
          clear={undefined}
          raycast={undefined}
          onClick={undefined}
          onContextMenu={undefined}
          onDoubleClick={undefined}
          onPointerUp={undefined}
          onPointerDown={undefined}
          onPointerOver={undefined}
          onPointerOut={undefined}
          onPointerEnter={undefined}
          onPointerLeave={undefined}
          onPointerMove={undefined}
          onPointerCancel={undefined}
          onWheel={undefined}
          castShadow={undefined}
          visible={undefined}
          type={undefined}
          isGroup={undefined}
          id={undefined}
          uuid={undefined}
          name={undefined}
          parent={undefined}
          modelViewMatrix={undefined}
          normalMatrix={undefined}
          matrixWorld={undefined}
          matrixAutoUpdate={undefined}
          matrixWorldNeedsUpdate={undefined}
          receiveShadow={undefined}
          frustumCulled={undefined}
          renderOrder={undefined}
          animations={undefined}
          userData={undefined}
          customDepthMaterial={undefined}
          customDistanceMaterial={undefined}
          isObject3D={undefined}
          onBeforeRender={undefined}
          onAfterRender={undefined}
          applyMatrix4={undefined}
          applyQuaternion={undefined}
          setRotationFromAxisAngle={undefined}
          setRotationFromEuler={undefined}
          setRotationFromMatrix={undefined}
          setRotationFromQuaternion={undefined}
          rotateOnAxis={undefined}
          rotateOnWorldAxis={undefined}
          rotateX={undefined}
          rotateY={undefined}
          rotateZ={undefined}
          translateOnAxis={undefined}
          translateX={undefined}
          translateY={undefined}
          translateZ={undefined}
          localToWorld={undefined}
          worldToLocal={undefined}
          lookAt={undefined}
          add={undefined}
          remove={undefined}
          removeFromParent={undefined}
          getObjectById={undefined}
          getObjectByName={undefined}
          getObjectByProperty={undefined}
          getWorldPosition={undefined}
          getWorldQuaternion={undefined}
          getWorldScale={undefined}
          getWorldDirection={undefined}
          traverse={undefined}
          traverseVisible={undefined}
          traverseAncestors={undefined}
          updateMatrix={undefined}
          updateMatrixWorld={undefined}
          updateWorldMatrix={undefined}
          toJSON={undefined}
          clone={undefined}
          copy={undefined}
          addEventListener={undefined}
          hasEventListener={undefined}
          removeEventListener={undefined}
          dispatchEvent={undefined}
        />
      </group>
      <OrbitControls autoRotate={false} />
      <Environment preset="city" />
      <axesHelper args={[2, 2, 2]} />
      <GizmoHelper
        alignment="bottom-right"
        margin={[80, 80]}
        // renderPriority={2}
      >
        <GizmoViewport
          axisColors={["hotpink", "aquamarine", "#3498DB"]}
          labelColor="black"
        />
      </GizmoHelper>
    </Canvas>
  );
}
