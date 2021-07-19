import React, { useState } from "react";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";

import { ToolsFeed, ToolsTable } from "src/views/Tools/";

const Component = () => {
  const [selectedTools, setSelectedToolIds] = useState([]);
  const [totalTools, setTotalTools] = useState(null);
  const [limit, setLimit] = useState(null);

  return (
    <React.Fragment>
      <Stats title="Tools" stats={{ tools: totalTools }}></Stats>
      <Taskbar
        showCreateTask={false}
        setLimitValue={(num) => setLimit(num)}
        totalItems={totalTools}
      ></Taskbar>

      <ToolsFeed limit={limit} setTotal={(v) => setTotalTools(v)}>
        {(props) => {
          return <ToolsTable {...props} />;
        }}
      </ToolsFeed>
    </React.Fragment>
  );
};

Component.displayName = "Tools";

Component.propTypes = {};

export default Component;
