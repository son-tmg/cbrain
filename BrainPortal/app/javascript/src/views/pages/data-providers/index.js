import React, { useState } from "react";
import Taskbar from "src/components/Taskbar";
import { Stats } from "src/components/Stats";
import {
  DataProvidersFeed,
  DataProvidersTable,
} from "src/views/DataProviders/";

const Component = () => {
  const [selectedDataProviders, setSelectedDataProviderIds] = useState([]);
  const [totalProviders, setTotalProviders] = useState(null);
  const [limit, setLimit] = useState(null);

  return (
    <React.Fragment>
      <Stats
        title="Data Providers"
        stats={{ "data providers": totalProviders }}
      ></Stats>
      <Taskbar
        showCreateTask={false}
        setLimitValue={(num) => setLimit(num)}
        totalItems={totalProviders}
      ></Taskbar>

      <DataProvidersFeed limit={limit} setTotal={(v) => setTotalProviders(v)}>
        {(props) => {
          return (
            <DataProvidersTable
              {...props}
              selectedDataProviders={selectedDataProviders}
              setSelectedDataProviderIds={setSelectedDataProviderIds}
            />
          );
        }}
      </DataProvidersFeed>
    </React.Fragment>
  );
};

Component.displayName = "UserFiles";

Component.propTypes = {};

export default Component;
