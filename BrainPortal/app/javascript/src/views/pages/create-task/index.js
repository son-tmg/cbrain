/* eslint-disable react/display-name */
import React, { useState, useEffect } from "react";
import { ProgressBar, Sections, Panel } from "src/views/TaskCreation";
import {
  Tools,
  Parameters,
  Inputs,
  Outputs,
  Summary,
} from "src/views/TaskCreation";
import { StyledLayout } from "./styles";

const Component = () => {
  /*
  List of sections, their associated name + component. ProgressBar, Panels and Sections Components are managed using this list as a source of truth. Changing anything in this array will have impactful consequences. Make sure you know what you're doing.
  */
  const sections = [
    { name: "tools", component: (props) => <Tools {...props} /> },
    { name: "parameters", component: (props) => <Parameters {...props} /> },
    { name: "inputs", component: (props) => <Inputs {...props} /> },
    { name: "outputs", component: (props) => <Outputs {...props} /> },
    { name: "summary", component: (props) => <Summary {...props} /> },
  ];

  /*
  Each section's state consists of data and/or errors.
  The progress bar will keep track to give feedback to the user of which sections are completed and which are in an error state.
  We can have a series of possible state combinations from having data AND errors, data and NO errors, and NO data AND NO errors in which case the page has not been filled.
  */
  const [sectionStates, setSectionStates] = useState(
    Array(sections.length).fill({})
  );

  // Corresponds to the current index for the sections array.
  const [sectionIndex, setSectionIndex] = useState(0);

  useEffect(() => {
    setSectionStates((prev) => {
      const states = [...prev];
      return states.map((state, i) => {
        // use the name of the sections as key for our section state.
        const sectionName = sections[i]["name"];
        return { [sectionName]: { data: null, errors: null } };
      });
    });
  }, []);

  return (
    <React.Fragment>
      <ProgressBar
        sections={sections}
        sectionStates={sectionStates}
        sectionIndex={sectionIndex}
        setSectionIndex={(num) => setSectionIndex(num)}
      />
      <StyledLayout>
        <Sections
          sectionIndex={sectionIndex}
          setSectionIndex={(num) => setSectionIndex(num)}
          sections={sections}
          sectionStates={sectionStates}
          setSectionStates={setSectionStates}
        />
        <Panel
          sectionIndex={sectionIndex}
          setSectionIndex={(num) => setSectionIndex(num)}
          sectionStates={sectionStates}
          setSectionStates={setSectionStates}
        />
      </StyledLayout>
    </React.Fragment>
  );
};

Component.displayName = "TaskCreation";

export default Component;
