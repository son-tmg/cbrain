import gql from "graphql-tag";

export const GET_USER_BY_ID = gql`
  query getUserById($userId: ID!) {
    user(id: $userId) {
      id
      login
      fullName
      email
      city
      country
      timeZone
      type
      siteId
      lastConnectedAt
      accountLocked
    }
  }
`;

export const GET_USERS = gql`
  query getUsers(
    $sortBy: UserSort
    $orderBy: Order
    $cursor: Int
    $limit: Int
  ) {
    users(sortBy: $sortBy, orderBy: $orderBy, cursor: $cursor, limit: $limit) {
      feed {
        id
        login
        fullName
        email
        city
        timeZone
        country
        type
        siteId
        accountLocked
      }
    }
  }
`;

export const UPDATE_USER = gql`
  mutation updateUser($userId: ID!, $input: UpdateUserInput) {
    updateUser(id: $userId, input: $input) {
      id
      login
      fullName
      email
      city
      country
      timeZone
      type
      siteId
      lastConnectedAt
      accountLocked
    }
  }
`;

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
    createUser(input: $input) {
      login
      email
    }
  }
`;

export const GET_USER_HEADERS = gql`
  query getUserHeaders {
    userTableHeaders {
      header
      accessor
    }
  }
`;

export const DELETE_USER = gql`
  mutation deleteUser($id: ID!) {
    deleteUser(id: $id) {
      success
    }
  }
`;
