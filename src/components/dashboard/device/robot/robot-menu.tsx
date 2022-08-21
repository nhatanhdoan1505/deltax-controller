import { GridLayout } from "components";
import { IMenuButton } from "type";
import { RobotMenuButton } from "ui";

export function RobotMenu() {
  const initialValues: IMenuButton[] = [
    { index: 1, name: "Jogging", color: "green" },
    { index: 2, name: "I/O", color: "green" },
    { index: 3, name: "Parameter", color: "green" },
    { index: 4, name: "Remote", color: "green" },
    { index: 5, name: "Setting", color: "green" },
  ];

  return (
    <GridLayout columns={5}>
      {initialValues.map((item, index) => (
        <RobotMenuButton {...item} key={index} />
      ))}
    </GridLayout>
  );
}
