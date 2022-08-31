import { ObjectDetectingMenu } from "components";
import { IMenuButton } from "type";

export function ObjectDetectingMenuTemplate() {
  const menu: IMenuButton[] = [
    { index: 1, name: "Viewer", color: "green" },
    { index: 2, name: "Source", color: "green" },
    { index: 3, name: "Calibration", color: "green" },
    { index: 4, name: "Object", color: "green" },
  ];
  return <ObjectDetectingMenu menu={menu} />;
}
