import gql from "graphql-tag";

export const GET_BOURREAUX = gql`
  query getBourreaux {
    bourreaux {
      feed {
        id
        name
        userId
        groupId
        user {
          id
          fullName
        }
        group {
          id
          name
        }
        online
        readOnly
        description
      }
    }
  }
`;

export const GET_BOURREAU_BY_ID = gql`
  query getBourreauxById($id: ID!) {
    bourreau(id: $id) {
      id
      name
      userId
      groupId
      online
      readOnly
      description
      user {
        id
        fullName
      }
      group {
        id
        name
      }
    }
  }
`;

export const GET_BOURREAU_HEADERS = gql`
  query getBourreauHeaders {
    bourreauTableHeaders {
      header
      accessor
    }
  }
`;
