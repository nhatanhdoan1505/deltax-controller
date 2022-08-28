import { GridItem } from "@chakra-ui/react";
import { NumberInput, SwitchButton } from "ui";
import { BoxWithTitle, GridLayout } from "components";

export function EndEffector() {
  return (
    <BoxWithTitle title="End Effector">
      <GridLayout gridColumn={2} gridRow={1}>
        <GridItem>
          <SwitchButton
            isHorizontal={false}
            name="Vancuum"
            onClick={() => {}}
          />
        </GridItem>
        <GridItem>
          <SwitchButton isHorizontal={false} name="Laser" onClick={() => {}} />
        </GridItem>
      </GridLayout>
    </BoxWithTitle>
  );
}
