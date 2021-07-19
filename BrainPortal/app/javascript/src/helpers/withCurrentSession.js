import React from "react";
import { useQuery } from "@apollo/client";
import Loading from "src/components/Loading";
import { GET_SESSION } from "src/queries";

// HOC returning the current sessions's data
const CurrentSession = ({ children }) => {
  // Fetch current session
  const { data, error, loading } = useQuery(GET_SESSION);
  // If loading return loading component
  if (loading) return <Loading />;
  // return children with data
  return children({ data, error });
};

const Component = (Component) => {
  const wrappedComponent = (props) => {
    return (
      <CurrentSession>
        {({ data }) => {
          return (
            <Component
              {...props}
              session={data && data.session ? data.session : null}
            />
          );
        }}
      </CurrentSession>
    );
  };

  return wrappedComponent;
};

Component.displayName = "withCurrentSession";

export default Component;
