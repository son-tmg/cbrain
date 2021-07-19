/*
  This file exports all the graphql queries for each section.
  Note that any of thes gql strings can be tried out in graphQL playground (assuming the proper credentials).
*/

export {
  GET_BOURREAUX,
  GET_BOURREAU_BY_ID,
  GET_BOURREAU_HEADERS,
} from "./bourreaux";

export {
  GET_DATA_PROVIDERS,
  GET_DATA_PROVIDER_BY_ID,
  GET_DATA_PROVIDER_HEADERS,
  DATA_PROVIDER_IS_ALIVE,
} from "./data_providers";

export {
  CREATE_GROUP,
  DELETE_GROUPS,
  EDIT_GROUP,
  GET_GROUPS,
  GET_GROUP_BY_ID,
  GET_GROUP_HEADERS,
} from "./groups";

export { GET_SESSION, LOGIN, LOGOUT } from "./sessions";

export {
  GET_TASKS,
  CREATE_TASK,
  GET_TASK_HEADERS,
  GET_TASK_BY_ID,
} from "./tasks";

export { GET_TOOLS, GET_TOOL_HEADERS } from "./tools";

export { GET_TOOL_CONFIG_BY_ID, GET_TOOL_CONFIGS } from "./tool_configs";

export { GET_TOOL_PARAMETERS } from "./tool_parameters";

export {
  GET_USER_BY_ID,
  GET_USERS,
  GET_USER_HEADERS,
  UPDATE_USER,
  CREATE_USER,
  DELETE_USER,
} from "./users";

export {
  GET_USERFILES,
  UPLOAD_USERFILE,
  GET_USERFILES_HEADERS,
  DELETE_USERFILES,
  EDIT_USERFILE,
  GET_USERFILE_BY_ID,
  GET_USERFILE_CONTENT,
} from "./userfiles";
