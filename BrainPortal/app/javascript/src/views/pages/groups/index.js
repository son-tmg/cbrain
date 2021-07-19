import React, { useContext, useState } from "react";
import { GroupContext } from "src/context";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";
import {
  GroupsFeed,
  GroupsTable,
  CardList,
  TaskbarActions,
} from "src/views/Groups";

const Component = () => {
  const [stats, setStats] = useState(null);
  const [selectedGroupIds, setSelectedGroupIds] = useState([]);
  const [totalGroups, setTotalGroups] = useState(null);
  const [isRowView, setRowView] = useState(true);
  const [limit, setLimit] = useState(null);

  const { selectGroup } = useContext(GroupContext);
  return (
    <React.Fragment>
      <Stats title="Groups" stats={{ ...stats }}></Stats>
      <Taskbar
        isGridView={!isRowView}
        setGridView={(bool) => setRowView(!bool)}
        showCreateTask={false}
        setLimitValue={(num) => setLimit(num)}
        totalItems={totalGroups}
      >
        <TaskbarActions
          selectedGroupIds={selectedGroupIds}
          setSelectedGroupIds={setSelectedGroupIds}
        />
      </Taskbar>
      <GroupsFeed limit={limit} setStats={(v) => setStats({ ...stats, ...v })}>
        {(props) => {
          return isRowView ? (
            <GroupsTable
              selectedGroupIds={selectedGroupIds}
              setSelectedGroupIds={setSelectedGroupIds}
              setTotal={(v) => setTotalGroups(v)}
              setGroupContext={(id) => selectGroup(id)}
              {...props}
            />
          ) : (
            <CardList
              data={props.data}
              selectedGroupIds={selectedGroupIds}
              setSelectedGroupIds={setSelectedGroupIds}
              setGroupContext={(id) => selectGroup(id)}
              {...props}
            />
          );
        }}
      </GroupsFeed>
    </React.Fragment>
  );
};

Component.propTypes = {};

Component.displayName = "Groups";

export default Component;
