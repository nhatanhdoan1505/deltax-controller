import { Button, GridItem } from "@chakra-ui/react";
import { AppContext } from "store";
import { useContext } from "react";
import { IMenuButton } from "type";

export function RobotMenuButton({ index, name, color }: IMenuButton) {
  const { state } = useContext(AppContext);
  const { dashboard } = state;
  return (
    <GridItem w="100%">
      <Button
        colorScheme={color}
        w="100%"
        h="100%"
        isActive={dashboard.deviceMenuItem === index}
        fontSize="sm"
      >
        {name}
      </Button>
    </GridItem>
  );
}
