import { Checkbox, SystemProps } from "@chakra-ui/react";

interface IProps extends SystemProps {
  name?: string;
  type?: string | number;
}
export function CheckboxButton({ name, type, ...props }: IProps) {
  return <Checkbox {...props}>{name ? name : null}</Checkbox>;
}
