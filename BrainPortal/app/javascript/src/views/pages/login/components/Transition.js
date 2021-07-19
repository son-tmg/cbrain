import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useSpring, animated } from "react-spring";

// Banner Animation that moves either to the left of right depending on the toggle mechanism
const Component = ({ children, runAnimation, from, to, config }) => {
  const [props, set] = useSpring(() => ({
    from,
    config: {
      mass: 1,
      tension: 250,
      friction: 20,
      clamp: true,
      duration: 250,
      ...config,
    },
  }));

  useEffect(() => {
    runAnimation && set(to);
  }, [set, runAnimation, to]);

  return (
    <animated.div
      style={{
        ...props,
        height: "100%",
        position: "absolute",
        zIndex: 2,
        minWidth: "315px",
      }}
    >
      {children}
    </animated.div>
  );
};

Component.propTypes = {
  children: PropTypes.oneOfType([PropTypes.node, PropTypes.array]),
  runAnimation: PropTypes.bool,
  from: PropTypes.object,
  to: PropTypes.object,
  config: PropTypes.object,
};

Component.displayName = "LoginTransition";

export default Component;
