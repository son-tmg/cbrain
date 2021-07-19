import gql from "graphql-tag";

export const GET_DATA_PROVIDERS = gql`
  query getDataProviders(
    $sortBy: DataProviderSort
    $orderBy: Order
    $cursor: Int
    $limit: Int
  ) {
    dataProviders(
      sortBy: $sortBy
      orderBy: $orderBy
      cursor: $cursor
      limit: $limit
    ) {
      feed {
        id
        name
        type
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
        isBrowsable
        isFastSyncing
        allowFileOwnerChange
        contentStorageShared
      }
    }
  }
`;

export const GET_DATA_PROVIDER_BY_ID = gql`
  query getDataProviderById($id: ID!) {
    dataProvider(id: $id) {
      id
      name
      type
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
      isBrowsable
      isFastSyncing
      allowFileOwnerChange
      contentStorageShared
    }
  }
`;

export const GET_DATA_PROVIDER_HEADERS = gql`
  query getDataProviderHeaders {
    dataProviderTableHeaders {
      header
      accessor
    }
  }
`;

export const DATA_PROVIDER_IS_ALIVE = gql`
  query isAliveDataProvider($id: ID!) {
    isAliveDataProvider(id: $id) {
      isAlive
    }
  }
`;
