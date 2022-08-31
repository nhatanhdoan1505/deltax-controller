import { GridItem } from "@chakra-ui/react";
import { BoxWithTitle, GridLayout, RcServoGripper } from "components";
import { IEndEffector } from "type";
import { SwitchButton } from "ui";

export function EndEffector({ device, gripper }: IEndEffector) {
  return (
    <BoxWithTitle title="End Effector">
      <GridLayout gridColumn={2} gridRow={1} gap={1}>
        <GridItem>
          <GridLayout
            gridColumn={2}
            gridRow={1}
            h="100%"
            p={3}
            border="1px solid #adaaaa"
          >
            {device.map(({ name, type }) => (
              <GridItem key={name}>
                <SwitchButton
                  isHorizontal={false}
                  name={name}
                  onClick={() => {}}
                />
              </GridItem>
            ))}
          </GridLayout>
        </GridItem>
        <GridItem>
          <RcServoGripper {...gripper} />
        </GridItem>
      </GridLayout>
    </BoxWithTitle>
  );
}
