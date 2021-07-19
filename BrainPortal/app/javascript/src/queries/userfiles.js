import gql from "graphql-tag";

export const GET_USERFILES = gql`
  query getUserfiles(
    $groupId: ID
    $sortBy: UserfileSort
    $orderBy: Order
    $cursor: Int
    $limit: Int
  ) {
    userfiles(
      groupId: $groupId
      sortBy: $sortBy
      orderBy: $orderBy
      cursor: $cursor
      limit: $limit
    ) {
      feed {
        id
        name
        size
        userId
        parentId
        type
        groupId
        dataProviderId
        groupWritable
        numFiles
        hidden
        immutable
        archived
        description
        user {
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
        group {
          id
          name
          description
          type
          siteId
          creatorId
          invisible
        }
        dataProvider {
          id
          name
          type
          online
          readOnly
          description
          isBrowsable
          isFastSyncing
          allowFileOwnerChange
          contentStorageShared
        }
      }
    }
  }
`;

export const GET_USERFILE_BY_ID = gql`
  query getUserfile($id: ID!) {
    userfile(id: $id) {
      id
      name
      type
      size
      description
      numFiles
      userId
      groupId
      dataProviderId
      archived
      parentId
      groupWritable
      hidden
      immutable
      user {
        id
        fullName
      }
      group {
        id
        name
      }
      dataProvider {
        id
        name
      }
    }
  }
`;

export const GET_USERFILES_HEADERS = gql`
  query getUserfileHeaders {
    userfileTableHeaders {
      header
      accessor
    }
  }
`;

export const GET_USERFILE_CONTENT = gql`
  query getUserfileContent($id: ID!) {
    userfileContent(id: $id) {
      success
      status
    }
  }
`;

export const UPLOAD_USERFILE = gql`
  mutation uploadUserfile($input: UserfileInput) {
    singleUpload(input: $input) {
      success
      status
    }
  }
`;

export const DELETE_USERFILES = gql`
  mutation deleteUserfiles($ids: [ID!]!) {
    deleteUserfiles(ids: $ids) {
      success
      status
      message
      id
    }
  }
`;

export const EDIT_USERFILE = gql`
  mutation editUserfile($id: ID!, $input: UpdateUserfileInput) {
    updateUserfile(id: $id, input: $input) {
      success
      status
    }
  }
`;
