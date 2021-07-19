import gql from "graphql-tag";

export const GET_TOOL_PARAMETERS = gql`
  query getToolParams($toolId: ID!) {
    getParamsByToolId(id: $toolId) {
      params
    }
  }
`;
