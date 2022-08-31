import { ViewerWorkingArea } from "components";
import { IMenuButton } from "type";

export function ViewerTemplate() {
  const imageUrl =
    "https://images.unsplash.com/photo-1469334031218-e382a71b716b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z2lybHxlbnwwfDB8MHx8&auto=format&fit=crop&w=800&q=60";
  const configurationMenu: IMenuButton[] = [
    { index: 1, name: "Calib Image", color: "green" },
    { index: 2, name: "Color Filter", color: "green" },
    { index: 3, name: "Origin", color: "green" },
  ];
  const toolMenu: IMenuButton[] = [
    { index: 1, name: "Find Chessboard", color: "green" },
    { index: 2, name: "Warp Perspective", color: "green" },
    { index: 3, name: "Calibrating Point Tool", color: "green" },
    { index: 4, name: "Crop Image", color: "green" },
    { index: 5, name: "Mapping Point Tool", color: "green" },
  ];

  return (
    <ViewerWorkingArea
      imageUrl={imageUrl}
      configurationMenu={configurationMenu}
      toolMenu={toolMenu}
    />
  );
}
