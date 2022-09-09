import {
  HStack,
  VStack,
  Text,
  GridItem,
  Button,
  Input,
} from "@chakra-ui/react";
import { ConveyorX, IndependentConveyor } from "components";
import { GridLayout, TopTabLayout } from "components";
import { NumberInput, SelectButton } from "ui";

export function ConveyorTemplate() {
  const tabs = ["ConveyorX", "Independent Conveyor"];
  return (
    <TopTabLayout tabs={tabs}>
      {({ activeIndex }) =>
        activeIndex === 0 ? <ConveyorX /> : <IndependentConveyor />
      }
    </TopTabLayout>
  );
}
