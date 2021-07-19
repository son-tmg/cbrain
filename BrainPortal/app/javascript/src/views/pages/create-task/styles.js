import styled from "styled-components";
import { Box } from "src/components/globals";

export const StyledLayout = styled(Box).attrs(() => ({
  bg: "bg.grey_300",
  width: "100%",
  flex: 1,
}))`
  overflow: scroll;
`;
