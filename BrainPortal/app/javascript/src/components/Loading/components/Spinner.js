import React from "react";
import PropTypes from "prop-types";
import { Keyframes, animated } from "react-spring/renderprops";
import { theme } from "src/theme";
import * as R from "ramda";

const Container = Keyframes.Spring(async (next) => {
  while (true) {
    await next({
      from: { radians: 0, color: theme.colors.bg.primary },
      to: { radians: 2 * Math.PI },
    });
  }
});

const Component = (props) => {
  const items = ["item1", "item2", "item3", "item4"];

  const Content = ({ radians, color }) => {
    let fill = color;
    if (props.fill) {
      fill = R.path(props.fill.split("."), theme.colors);
    }

    return items.map((_, i) => (
      <animated.svg
        key={i}
        style={{
          width: 15,
          height: 50,
          willChange: "transform",
          transform: radians.interpolate(
            (r) =>
              `translate3d(0, ${10 * Math.sin(r + (i * 2 * Math.PI) / 5)}px, 0)`
          ),
        }}
        viewBox="0 0 400 400"
      >
        <animated.g fill={fill}>
          <rect id="path-1" width={"5rem"} height={"100%"} />
        </animated.g>
      </animated.svg>
    ));
  };

  return (
    <Container reset native keys={items} config={{ duration: 700 }}>
      {Content}
    </Container>
  );
};

Component.propTypes = {
  fill: PropTypes.string,
};
Component.displayName = "Spinner";

export default Component;
