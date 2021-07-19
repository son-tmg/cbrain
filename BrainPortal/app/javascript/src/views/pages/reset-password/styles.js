import styled from "styled-components";
import { Form } from "src/components/Form";

export const StyledForm = styled(Form).attrs({
  bg: "bg.default",
  m: 1,
  boxShadow: "low",
  flex: "unset"
})`
  min-width: 15rem;
`;
