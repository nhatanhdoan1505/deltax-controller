import { Select } from "@chakra-ui/react";

export function SelectButton({
  type,
  name,
}: {
  type: string | number;
  name: string;
}) {
  return (
    <Select placeholder="Select option">
      <option value={type}>{name}</option>
    </Select>
  );
}
