import gql from "graphql-tag";

export const GET_TASKS = gql`
  query getTasks(
    $groupId: ID!
    $sortBy: TaskSort
    $orderBy: Order
    $cursor: Int
    $limit: Int
  ) {
    tasks(
      groupId: $groupId
      sortBy: $sortBy
      orderBy: $orderBy
      cursor: $cursor
      limit: $limit
    ) {
      feed {
        id
        type
        userId
        groupId
        bourreauId
        toolConfigId
        batchId
        params
        status
        createdAt
        updatedAt
        runNumber
        resultsDataProviderId
        clusterWordirSize
        workdirArchived
        workdirArchiveUserfileId
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
        bourreau {
          id
          name
          userId
          groupId
          online
          readOnly
          description
        }
      }
    }
  }
`;

export const CREATE_TASK = gql`
  mutation createTask($taskInput: TaskInput) {
    createTask(input: $taskInput) {
      id
      type
      userId
      groupId
      bourreauId
      toolConfigId
      batchId
      params
      status
      createdAt
      updatedAt
      runNumber
      resultsDataProviderId
      clusterWordirSize
      workdirArchived
      workdirArchiveUserfileId
      description
    }
  }
`;

export const GET_TASK_HEADERS = gql`
  query getTaskHeaders {
    taskTableHeaders {
      header
      accessor
    }
  }
`;

export const GET_TASK_BY_ID = gql`
  query getTaskById($id: ID!) {
    task(id: $id) {
      id
      type
      userId
      groupId
      bourreauId
      toolConfigId
      batchId
      params
      status
      createdAt
      updatedAt
      runNumber
      resultsDataProviderId
      clusterWordirSize
      workdirArchived
      workdirArchiveUserfileId
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
      bourreau {
        id
        name
        userId
        groupId
        online
        readOnly
        description
      }
    }
  }
`;
