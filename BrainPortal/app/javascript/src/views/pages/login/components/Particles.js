import React from "react";
import Particles from "react-particles-js";
import { Box } from "src/components/globals";

const Component = () => {
  return (
    <Box position={"absolute"} top={0} left={0} width={"100%"} height={"100%"}>
      <Particles
        style={{
          position: "absolute",
          width: "100%",
          height: "100%",
          backgroundImage: "url('')",
          backgroundSize: "cover",
          backgroundPosition: "50% 50%",
          backgroundRepeat: "no-repeat",
          top: 0,
        }}
        params={{
          particles: {
            number: {
              value: 100,
              density: {
                enable: true,
                value_area: 800,
              },
            },
            color: {
              value: "#ffffff",
            },
            shape: {
              type: "square",
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0,
                sync: false,
              },
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: false,
                speed: 4,
                size_min: 0.3,
                sync: false,
              },
            },
            line_linked: {
              enable: false,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 1,
              direction: "top",
              random: true,
              straight: true,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 600,
              },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab",
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              grab: {
                distance: 80,
                line_linked: {
                  opacity: 0.5,
                },
              },
              repulse: {
                distance: 80,
                duration: 0.4,
              },
            },
          },
          retina_detect: true,
        }}
      />
    </Box>
  );
};

export default Component;
