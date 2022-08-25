import { HStack } from "@chakra-ui/react";
import { useWidthQuery } from "hook";
import { useContext } from "react";
import { AiOutlineFullscreen } from "react-icons/ai";
import { GrFormClose } from "react-icons/gr";
import { TbFlipHorizontal, TbFlipVertical } from "react-icons/tb";
import { AppContext } from "store";
import { IScreenOption } from "type";
import { OptionButton } from "ui";

export function ScreenOption({ screen }: { screen: "PLUGIN" | "DEVICE" }) {
  const query = useWidthQuery({ value: 792 });
  const { state } = useContext(AppContext);
  const { dashboard } = state;

  const options: IScreenOption[] = [
    {
      icon: <GrFormClose fontSize="1rem" />,
      color: "red.500",
      type: "close",
      screen,
    },
    {
      icon: <TbFlipHorizontal fontSize="1rem" />,
      color: "yellow.500",
      type: "horizontal-split",
      screen,
    },
    {
      icon: <TbFlipVertical fontSize="1rem" />,
      color: "orange.500",
      type: "vertical-split",
      screen,
    },
    {
      icon: <AiOutlineFullscreen fontSize="1rem" />,
      color: "blue.500",
      type: "full-screen",
      screen,
    },
  ];

  return (
    <HStack
      mt={query ? 8 : 2}
      mr={
        screen === "PLUGIN" ||
        (dashboard.type !== "vertical-split" && screen === "DEVICE")
          ? "auto"
          : ""
      }
      ml={
        dashboard.type === "vertical-split" && screen === "DEVICE" ? "auto" : ""
      }
    >
      {options.map((item, index) => (
        <OptionButton {...item} key={index} />
      ))}
    </HStack>
  );
}
