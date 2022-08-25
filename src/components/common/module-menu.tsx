import { Center, Grid } from "@chakra-ui/react";
import { ModuleMenuButton } from "ui";
import { AiFillCaretRight } from "react-icons/ai";

export function ModuleMenu() {
  const initialValues = [
    { name: <AiFillCaretRight color="red" />, index: 1 },
    { name: "Easy Setup", index: 2 },
    { name: "Project", index: 3 },
    { name: "Dashboard", index: 4 },
  ];
  return (
    <Center position="fixed" top="10px" zIndex={10000}>
      <Grid
        templateColumns="repeat(4, 1fr)"
        boxShadow="rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px;"
        borderRadius="base"
        p={1}
      >
        {initialValues.map((item, index) => (
          <ModuleMenuButton {...item} key={index} />
        ))}
      </Grid>
    </Center>
  );
}
