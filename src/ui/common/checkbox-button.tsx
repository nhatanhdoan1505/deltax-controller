import { Checkbox, SystemProps } from "@chakra-ui/react";

interface IProps extends SystemProps {
  title?: string;
}
export function CheckboxButton({ title, ...props }: IProps) {
  return <Checkbox {...props}>{title ? title : null}</Checkbox>;
}
