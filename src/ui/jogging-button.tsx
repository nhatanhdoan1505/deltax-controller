import { Button } from "@chakra-ui/react";
import { IJoggingButton } from "type";

export function JoggingButton({ type, name, color }: IJoggingButton) {
  return (
    <Button colorScheme={color} w="100%">
      {name}
    </Button>
  );
}
