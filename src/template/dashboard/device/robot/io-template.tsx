import { VStack } from "@chakra-ui/react";
import { AppContext } from "store";
import { EndEffector, Input, Output } from "components";
import { IIo } from "template";
import { useContext } from "react";
import { useWidthQuery } from "hook";

export function IoTemplate() {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  const query = useWidthQuery({ value: 700 });

  const { endEffector, output, input }: IIo = {
    endEffector: {
      device: [
        { name: "Vacuum", type: "vacuum" },
        { name: "Laser", type: "laser" },
      ],
      gripper: {
        min: 5,
        max: 100,
        value: 20,
      },
    },
    output: {
      custom: [
        { name: "D0", type: "D0" },
        { name: "R0", type: "R0" },
      ],
      digital: [
        { name: "D0", type: "D0" },
        { name: "D1", type: "D1" },
        { name: "D2", type: "D2" },
        { name: "D3", type: "D3" },
        { name: "D4", type: "D4" },
        { name: "D5", type: "D5" },
        { name: "D6", type: "D6" },
        { name: "D7", type: "D7" },
        { name: "D8", type: "D8" },
        { name: "D9", type: "D9" },
        { name: "D10", type: "D10" },
        { name: "D11", type: "D11" },
        { name: "D12", type: "D12" },
        { name: "D13", type: "D13" },
        { name: "D14", type: "D14" },
        { name: "D15", type: "D15" },
      ],
      pwm: [
        { name: "P0", type: 0 },
        { name: "P1", type: 0 },
        { name: "P2", type: 0 },
      ],
      rcServo: [
        { name: "S0", type: 0 },
        { name: "S1", type: 0 },
        { name: "S2", type: 0 },
      ],
    },
    input: [
      { name: "I0", value: null, isCheckbox: true, type: "I0" },
      { name: "I1", value: null, isCheckbox: true, type: "I1" },
      { name: "I2", value: null, isCheckbox: true, type: "I2" },
      { name: "I3", value: null, isCheckbox: true, type: "I3" },
      { name: "I4", value: null, isCheckbox: true, type: "I4" },
      { name: "I5", value: null, isCheckbox: true, type: "I5" },
      { name: "I6", value: null, isCheckbox: true, type: "I6" },
      { name: "A0", value: null, isCheckbox: false, type: "A0" },
      { name: "A1", value: null, isCheckbox: false, type: "A1" },
      { name: "A2", value: null, isCheckbox: false, type: "A2" },
    ],
  };

  return (
    <VStack w="100%" h="100%">
      <EndEffector {...endEffector} />
      <Output {...output} />

      {!query ? (
        <Input input={input} gap={1} />
      ) : dashboard.type === "full-screen" ||
        dashboard.type === "horizontal-split" ? (
        <Input input={input} gridColumn={2} gap={1} />
      ) : (
        <Input input={input} gap={1} />
      )}
    </VStack>
  );
}
