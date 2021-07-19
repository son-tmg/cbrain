import gql from "graphql-tag";

export const CREATE_GROUP = gql`
  mutation createGroup($input: GroupInput) {
    createGroup(input: $input) {
      id
      name
      description
      type
      siteId
      creatorId
      invisible
    }
  }
`;

export const DELETE_GROUPS = gql`
  mutation deleteGroups($ids: [ID!]!) {
    deleteGroups(ids: $ids) {
      status
      success
    }
  }
`;

export const EDIT_GROUP = gql`
  mutation editGroup($id: ID!, $input: GroupInput) {
    updateGroup(id: $id, input: $input) {
      status
      success
    }
  }
`;

export const GET_GROUPS = gql`
  query getGroups($sortBy: GroupSort, $orderBy: Order, $limit: Int) {
    groups(sortBy: $sortBy, orderBy: $orderBy, limit: $limit) {
      feed {
        id
        name
        description
        type
        siteId
        creatorId
        invisible
        tasks {
          id
        }
        userfiles {
          id
        }
        users {
          id
        }
      }
    }
  }
`;

export const GET_GROUP_BY_ID = gql`
  query getGroupById($id: ID!) {
    group(id: $id) {
      id
      name
      description
      type
      siteId
      creatorId
      invisible
      users {
        id
      }
      userfiles {
        id
      }
      tasks {
        id
        status
      }
    }
  }
`;

export const GET_GROUP_HEADERS = gql`
  query getGroupHeaders {
    groupTableHeaders {
      header
      accessor
    }
  }
`;
