import { Select } from "@chakra-ui/react";

interface IProps {
  type: string | number;
  name: string;
}
export function SelectButton({ options }: { options: IProps[] }) {
  return (
    <Select placeholder="Select option">
      {options.map(({ type, name }) => (
        <option value={type} key={name}>
          {name}
        </option>
      ))}
    </Select>
  );
}
