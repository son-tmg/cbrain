import gql from "graphql-tag";

export const GET_TOOLS = gql`
  query getTools($sortBy: ToolSort, $orderBy: Order) {
    tools(sortBy: $sortBy, orderBy: $orderBy) {
      feed {
        id
        name
        userId
        groupId
        category
        description
        cbrainTaskName
        menu
        url
      }
    }
  }
`;

export const GET_TOOL_HEADERS = gql`
  query getToolHeaders {
    toolTableHeaders {
      header
      accessor
    }
  }
`;
