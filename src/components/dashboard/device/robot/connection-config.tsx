import {
  FormLabel,
  HStack,
  Input,
  Select,
  Switch,
  Text,
} from "@chakra-ui/react";
import { useState } from "react";

export function ConnectionConfig() {
  const [isAutoConnection, setIsAutoConnection] = useState<boolean>(false);
  const [connectionType, setConnectionType] = useState<"com" | "ip">(null!);
  return (
    <HStack w="100%">
      <HStack>
        <FormLabel htmlFor="auto-connection" mb="0">
          Auto Connect
        </FormLabel>
        <Switch
          id="auto-connection"
          onChange={(e) => setIsAutoConnection(e.target.checked)}
        />
      </HStack>
      {!isAutoConnection && (
        <HStack>
          <Select
            placeholder="Connection"
            onChange={(e) => setConnectionType(e.target.value as "com" | "ip")}
            value={!connectionType ? "No Connection" : connectionType}
          >
            <option value="com">COM</option>
            <option value="ip">IP ADDRESS</option>
          </Select>
        </HStack>
      )}
      {connectionType === "com" && !isAutoConnection && (
        <HStack>
          <Text whiteSpace="nowrap">Bound rate</Text>
          <Input type="number" placeholder="Input Bound rate" />
        </HStack>
      )}
      {connectionType === "ip" && !isAutoConnection && (
        <HStack>
          <HStack>
            <Text whiteSpace="nowrap">Ip address</Text>
            <Input type="text" placeholder="Input Ip address" />
          </HStack>
          <HStack>
            <Text>Port</Text>
            <Input type="number" placeholder="Input Port Number" />
          </HStack>
        </HStack>
      )}
    </HStack>
  );
}
