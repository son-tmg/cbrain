import gql from "graphql-tag";

export const GET_SESSION = gql`
  query getSession {
    session {
      userId
    }
  }
`;

export const LOGIN = gql`
  mutation loginUser($login: String!, $password: String!) {
    login(login: $login, password: $password) {
      userId
    }
  }
`;

export const LOGOUT = gql`
  mutation logoutUser {
    logout {
      status
      success
    }
  }
`;
