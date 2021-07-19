import styled, { css } from "styled-components";
import {
  Form,
  Field,
  Input,
  Label,
  Text,
  TextArea,
} from "../src/components/globals";

export const StyledForm = styled(Form).attrs((props) => ({
  flex: props.flex || 1,
}))``;

export const StyledField = styled(Field).attrs((props) => ({
  border: 0,
  mt: 4,
  width: "100%",
  alignItems: "center",
  justifyContent: "space-between",
  flexWrap: "wrap",
  display: "flex",
  ...props,
}))``;

const StyledInputMixin = css`
  border: 1px solid;
  border-radius: 2px;
  border-color: ${(props) => props.borderColor || props.theme.colors.bg.border};
  cursor: pointer;
  padding: 0.1rem;
  &:hover {
    border-color: ${(props) => props.theme.colors.bg.secondary};
    outline-color: ${(props) => props.theme.colors.bg.secondary};
  }

  &:focus {
    outline-color: ${(props) => props.theme.colors.bg.secondary};
  }

  ${(props) =>
    props.error &&
    css`
      border-color: ${(props) => props.theme.colors.error.border} !important;
      &:hover {
        border-color: ${(props) => props.theme.colors.error.border};
        outline-color: ${(props) => props.theme.colors.error.border} !important;
      }

      &:focus {
        outline-color: ${(props) => props.theme.colors.error.border} !important;
      }
    `}

  ${(props) =>
    props.disabled &&
    css`
      border-color: ${(props) => props.theme.colors.bg.border} !important;
      cursor: not-allowed;
      opacity: 0.75;
      outline: ${(props) => props.theme.colors.bg.border} !important;

      &:hover {
        outline: none !important;
        border-color: ${(props) => props.theme.colors.bg.border} !important;
      }
    `}
`;

const StyledTextMixin = css`
  ${Text} {
    margin-right: ${(props) => props.theme.space[2]}
      ${(props) =>
        props.disabled &&
        css`
          color: ${(props) => props.theme.colors.bg.disabled};
        `}
      ${(props) =>
        props.error &&
        css`
          color: ${(props) => props.theme.colors.error.default};
        `};
  }
`;

export const StyledLabel = styled(Label).attrs((props) => ({
  width: props.width || "100%",
  display: props.display || "flex",
  alignItems: "center",
  flexWrap: "wrap",
}))`
  transition: ${(props) => props.theme.transitions.hover.off};
  ${StyledTextMixin}
`;

export const StyledInput = styled(Input).attrs((props) => ({ ...props }))`
  ${StyledInputMixin};
  ${(props) => props.variant && props.theme.text[props.variant]};

  outline: auto 0px inherit;

  &[type="file"] {
    ${(props) => props.theme.text.xs};
    border: ${(props) => (props.error ? "1px solid" : "none")};
  }
  &:hover {
    transition: ${(props) => props.theme.transitions.hover.on};
    outline: inherit auto 5px;
  }

  &:focus {
    outline: inherit auto 5px;
  }

  &::placeholder {
    color: ${(props) => props.theme.colors.text.default};
    opacity: 0.5;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const StyledUnderlineInput = styled(StyledInput)`
  background: inherit;
  outline: 0px;
  border: 0px;
  border-bottom: 1px solid;
  border-radius: 0;
  border-color: inherit;
  caret-color: ${(props) => props.theme.colors.bg.secondary};

  &:hover {
    outline: 0px;
  }

  &:focus {
    outline: 0px;
    color: ${(props) => props.theme.colors.text.secondary};
    border-bottom: 2px solid;
    &::placeholder {
      color: ${(props) => props.theme.colors.text.secondary};
    }
  }
`;

export const StyledTextArea = styled(TextArea)`
  ${StyledInputMixin}
  ${(props) => props.variant && props.theme.text[props.variant]};

  flex: 1 0 auto;
  width: 100%;
  background: ${(props) => props.theme.colors.bg.default};
`;
