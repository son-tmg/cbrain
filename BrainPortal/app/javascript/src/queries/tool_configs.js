import gql from "graphql-tag";

export const GET_TOOL_CONFIGS = gql`
  query getToolConfigs(
    $toolId: ID
    $sortBy: ToolConfigSort
    $orderBy: Order
    $cursor: Int
    $limit: Int
  ) {
    toolConfigs(
      toolId: $toolId
      sortBy: $sortBy
      orderBy: $orderBy
      cursor: $cursor
      limit: $limit
    ) {
      feed {
        id
        versionName
        description
        toolId
        bourreauId
        groupId
        ncpus
      }
    }
  }
`;

export const GET_TOOL_CONFIG_BY_ID = gql`
  query configById($id: ID!) {
    toolConfig(id: $id) {
      id
      version
      description
      toolId
      bourreauId
      groupId
      ncpus
    }
  }
`;
