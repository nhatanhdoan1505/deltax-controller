import { GridLayout } from "components";
import { XYZControllerInput } from "ui";

export function XYZController() {
  const initialValues = [
    { value: 30, name: "X" },
    { value: 30, name: "Y" },
    { value: 30, name: "Z" },
  ];
  return (
    <GridLayout columns={3}>
      {initialValues.map((item, index) => (
        <XYZControllerInput {...item} key={index} />
      ))}
    </GridLayout>
  );
}
