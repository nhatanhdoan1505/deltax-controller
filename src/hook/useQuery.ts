import { useMediaQuery, UseMediaQueryOptions } from "@chakra-ui/react";

export function useHeightQuery({ value }: { value: number }) {
  const [queryValue] = useMediaQuery(`(max-height: ${value}px)`);
  return queryValue;
}

export function useWidthQuery({ value }: { value: number }) {
  const [queryValue] = useMediaQuery(`max-width: ${value}px`);
  return queryValue;
}
