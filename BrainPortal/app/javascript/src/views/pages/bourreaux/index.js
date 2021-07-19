import React, { useState } from "react";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";

import { BourreauxFeed, BourreauxTable } from "src/views/Bourreaux/";

const Component = () => {
  const [totalBourreaux, setTotalBourreaux] = useState(null);
  const [limit, setLimit] = useState(null);
  return (
    <React.Fragment>
      <Stats title="Servers" stats={{ Servers: totalBourreaux }}></Stats>
      <Taskbar
        showCreateTask={false}
        setLimitValue={(num) => setLimit(num)}
        totalItems={totalBourreaux}
      ></Taskbar>

      <BourreauxFeed limit={limit} setTotal={(v) => setTotalBourreaux(v)}>
        {(props) => {
          return <BourreauxTable {...props} />;
        }}
      </BourreauxFeed>
    </React.Fragment>
  );
};

Component.displayName = "Bourreaux";

Component.propTypes = {};

export default Component;
