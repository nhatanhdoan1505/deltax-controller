import { GridLayout } from "components";
import { XYZButton } from "type";
import { XYZControllerInput } from "ui";

export function XYZController({ xyz }: { xyz: XYZButton[] }) {
  return (
    <GridLayout gridColumn={3} gap={2}>
      {xyz.map((item, index) => (
        <XYZControllerInput {...item} key={index} />
      ))}
    </GridLayout>
  );
}
