import React, { useState } from "react";
import PropTypes from "prop-types";
import { theme } from "src/theme";
import {
  Box,
  Card,
  CardRow,
  CardTable,
  CardTableCell,
  Icon,
  Text,
} from "src/components/globals";
import * as R from "ramda";

import { ButtonSection, Button, TaskbarButton } from "src/components/Buttons";
import Modal from "src/components/Modal";
import Navigation from "src/views/Navigation";
import Select from "src/components/Select";
import Taskbar from "src/components/Taskbar";
import Titlebar from "src/components/Titlebar";
import Tooltip from "src/components/Tooltip";
import Banner from "src/components/Banner";
import Loading from "src/components/Loading";
import Error from "src/components/Error";
import Empty from "src/components/Empty";
import DrawerCard from "src/components/DrawerCard";
import Drawer from "src/components/Drawer";
import { Table, Cell } from "src/components/Table";
import { Stats, Stat } from "src/components/Stats";

import {
  StyledHeader,
  StyledOverride,
  StyledRow,
  StyledSection,
  StyledSectionContent,
  StyledSwatch,
} from "./styles";

import {
  Checkbox,
  Field,
  Form,
  Input,
  UnderlineInput,
  TextArea,
} from "src/components/Form";

const flattenObj = (obj) => {
  const go = (obj_) =>
    R.chain(([k, v]) => {
      if (R.type(v) === "Object" || R.type(v) === "Array") {
        return R.map(([k_, v_]) => [`${k}.${k_}`, v_], go(v));
      } else {
        return [[k, v]];
      }
    }, R.toPairs(obj_));

  return R.fromPairs(go(obj));
};

const Swatch = ({ name, properties, children, ...rest }) => {
  return (
    <StyledSwatch {...rest}>
      {children}
      <Box pl={4} flexDirection={"column"}>
        <Text variant="xs" fontWeight={700}>
          {name}
        </Text>
        {properties &&
          properties.map(([property, value], i) => (
            <Text key={i} variant="xs">
              {property} : {value}
            </Text>
          ))}
      </Box>
    </StyledSwatch>
  );
};

Swatch.propTypes = {
  name: PropTypes.string,
  properties: PropTypes.array,
  children: PropTypes.node,
};

const Component = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <div style={{ overflow: "scroll", padding: "1rem" }}>
      <StyledHeader>
        <Text variant={"xl"}>STYLEGUIDE</Text>
      </StyledHeader>
      <StyledSection>
        <StyledHeader>
          <Text>Palette</Text>
        </StyledHeader>
        <StyledSectionContent>
          {Object.entries(flattenObj(theme.colors)).map(([k, v]) => {
            return (
              <Swatch
                key={k}
                name={k}
                properties={[["hex", v]]}
                width="200px"
                flex={"1 1 200px"}
              >
                <Box width="2rem" height="2rem" borderRadius="50%" bg={v} />
              </Swatch>
            );
          })}
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>
          <Text>Fonts</Text>
        </StyledHeader>
        <StyledSectionContent>
          {Object.entries(theme.text).map(([variant, value]) => {
            return (
              <Swatch
                key={variant}
                name={`theme.text.${variant}`}
                properties={Object.entries(value)}
                width="250px"
                flex={"1 1 250px"}
              >
                <Text variant={`${variant}`}>Abc</Text>
              </Swatch>
            );
          })}
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>
          <Text>Icons</Text>
        </StyledHeader>
        <StyledSectionContent>
          <Swatch name={"add"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"add"} />
          </Swatch>
          <Swatch name={"caret-down"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"caret-down"} />
          </Swatch>
          <Swatch name={"caret-left"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"caret-left"} />
          </Swatch>
          <Swatch name={"caret-right"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"caret-right"} />
          </Swatch>
          <Swatch name={"caret-up"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"caret-up"} />
          </Swatch>
          <Swatch name={"cbrain"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"cbrain"} />
          </Swatch>
          <Swatch name={"checkmark"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"checkmark"} />
          </Swatch>
          <Swatch name={"circle"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"circle"} />
          </Swatch>
          <Swatch name={"close"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"close"} />
          </Swatch>
          <Swatch name={"delete"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"delete"} />
          </Swatch>
          <Swatch name={"download"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"download"} />
          </Swatch>
          <Swatch name={"edit"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"edit"} />
          </Swatch>
          <Swatch name={"file"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"file"} />
          </Swatch>
          <Swatch name={"files"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"files"} />
          </Swatch>
          <Swatch name={"grid"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"grid"} />
          </Swatch>
          <Swatch name={"groups"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"groups"} />
          </Swatch>
          <Swatch name={"info"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"info"} />
          </Swatch>
          <Swatch name={"list"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"list"} />
          </Swatch>
          <Swatch name={"member-add"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"member-add"} />
          </Swatch>
          <Swatch name={"members"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"members"} />
          </Swatch>
          <Swatch
            name={"menu-ellipsis-horizontal"}
            width="250px"
            flex={"1 1 250px"}
          >
            <Icon glyph={"menu-ellipsis-horizontal"} />
          </Swatch>
          <Swatch
            name={"menu-ellipsis-vertical"}
            width="250px"
            flex={"1 1 250px"}
          >
            <Icon glyph={"menu-ellipsis-vertical"} />
          </Swatch>
          <Swatch name={"member"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"member"} />
          </Swatch>
          <Swatch name={"search"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"search"} />
          </Swatch>
          <Swatch name={"settings"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"settings"} />
          </Swatch>
          <Swatch name={"site"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"site"} />
          </Swatch>
          <Swatch name={"styleguide"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"styleguide"} />
          </Swatch>
          <Swatch name={"task"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"task"} />
          </Swatch>
          <Swatch name={"tasks"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"tasks"} />
          </Swatch>
          <Swatch name={"toggle-right"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"toggle-right"} />
          </Swatch>
          <Swatch name={"toggle-left"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"toggle-left"} />
          </Swatch>
          <Swatch name={"tools"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"tools"} />
          </Swatch>
          <Swatch name={"upload"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"upload"} />
          </Swatch>
          <Swatch name={"wireframe"} width="250px" flex={"1 1 250px"}>
            <Icon glyph={"wireframe"} />
          </Swatch>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>
          <Text>COMPONENTS: Buttons</Text>
        </StyledHeader>
        <StyledSectionContent>
          <StyledHeader subheading={true}>
            <Text variant={"sm"}>Button Base</Text>
          </StyledHeader>
          <StyledRow>
            <ButtonSection width={"100%"}>
              <Button mx={0}>Base Button</Button>
              <Button variant={"outline"}>Outline Button</Button>
              <Button variant={"link"}>Link Button</Button>
            </ButtonSection>
          </StyledRow>
          <StyledRow>
            <StyledRow>
              <Text variant="sm">Disabled State</Text>
            </StyledRow>
            <Button disabled={true}>Base Button</Button>
            <Button variant={"outline"} disabled={true}>
              Outline Button
            </Button>
            <Button variant={"link"} disabled={true}>
              Link Button
            </Button>
          </StyledRow>

          <StyledRow>
            <StyledRow>
              <Text variant="sm">Error + Warning State</Text>
            </StyledRow>
            <Button error={true}>Base Button</Button>
            <Button variant={"outline"} error={true}>
              Outline Button
            </Button>
            <Button variant={"link"} error={true}>
              Link Button
            </Button>
          </StyledRow>
          <StyledHeader subheading={true}>
            <Text variant={"sm"}> TaskBar Button</Text>
          </StyledHeader>
          <StyledRow>
            <Box width={"100%"} justifyContent="center">
              <TaskbarButton icon={"wireframe-light"}>
                Solid Button
              </TaskbarButton>
              <TaskbarButton variant={"outline"} icon={"wireframe-dark"}>
                Outline Button
              </TaskbarButton>
            </Box>
          </StyledRow>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>
          <Text>COMPONENTS: ToolTip</Text>
        </StyledHeader>
        <StyledSectionContent alignItems="center">
          <Text variant={"sm"}>Hover on the icon:</Text>
          <Tooltip content={"Tooltip here!"}>
            <Icon glyph="info" mx={1} />
          </Tooltip>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Titlebar</StyledHeader>
        <StyledSectionContent>
          <Titlebar icon="groups">Title</Titlebar>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: TaskBar</StyledHeader>
        <StyledSectionContent>
          <Taskbar
            enableTaskCreation={true}
            setLimitValue={() => {}}
            totalItems={30}
          >
            <TaskbarButton icon={"wireframe-light"}>Solid Button</TaskbarButton>
            <TaskbarButton variant={"outline"} icon={"wireframe-dark"}>
              Outline Button
            </TaskbarButton>
          </Taskbar>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Cards</StyledHeader>
        <StyledSectionContent>
          <StyledHeader subheading={true}>
            <Text variant={"sm"}>Default Card</Text>
          </StyledHeader>
          <StyledRow>
            <Card>
              <CardRow label={"label"} value={"value"}></CardRow>
              <CardRow
                label={"label"}
                value={"value"}
                bg={"bg.grey_100"}
              ></CardRow>
              <CardRow>
                <CardTable>
                  <thead>
                    <tr>
                      <CardTableCell variant="head">header_01</CardTableCell>
                      <CardTableCell variant="head">header_02</CardTableCell>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <CardTableCell>value_01</CardTableCell>
                      <CardTableCell>value_02</CardTableCell>
                    </tr>
                  </tbody>
                </CardTable>
              </CardRow>
            </Card>
          </StyledRow>

          <StyledHeader subheading={true}>
            <Text variant={"sm"}>Drawer Card</Text>
          </StyledHeader>
          <StyledRow>
            <DrawerCard
              m={1}
              mt={0}
              flex={1}
              title={"title"}
              leftIcon={"wireframe"}
              type={"close"}
              handleClick={() => {}}
            />
          </StyledRow>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Modal</StyledHeader>
        <StyledSectionContent>
          <Button onClick={() => setModalOpen(true)}>Open Modal</Button>
          {isModalOpen && (
            <Modal handleClose={() => setModalOpen(false)}>
              <Titlebar flex={1} justifyContent={"center"}>
                Modal
              </Titlebar>
            </Modal>
          )}
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Form</StyledHeader>
        <StyledSectionContent justifyContent="center">
          <StyledHeader subheading={true}>
            <Text variant={"sm"}>Base Form</Text>
          </StyledHeader>
          <Form m={7}>
            <Checkbox onChange={() => {}} onBlur={() => {}}>
              Checkbox
            </Checkbox>
            <Field>
              <Input
                name="name"
                placeholder="i'm a placeholder"
                onChange={() => {}}
                onBlur={() => {}}
              >
                Input
              </Input>
            </Field>
            <UnderlineInput
              onChange={() => {}}
              onBlur={() => {}}
              placeholder="i'm a placeholder"
            >
              Undeline Input
            </UnderlineInput>
            <TextArea
              name="name"
              onChange={() => {}}
              onBlur={() => {}}
              placeholder="i'm also a placeholder"
            />
          </Form>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Select/Option</StyledHeader>
        <StyledSectionContent>
          <Select>
            <option>OPTION A</option>
            <option>OPTION B</option>
            <option>OPTION C</option>
          </Select>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>COMPONENTS: Banner</StyledHeader>
        <StyledSectionContent justifyContent="center">
          <Banner> You did something.</Banner>
          <Banner variant={"warn"} mt={2}>
            Im warning you.
          </Banner>
          <Banner variant={"error"} mt={2}>
            You did not do something well.
          </Banner>
          <Banner variant={"success"} mt={2}>
            You did something beautiful.
          </Banner>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>Components: Loading</StyledHeader>
        <StyledSectionContent height={"200px"}>
          <Box flex={1} position={"relative"}>
            <Loading />
          </Box>
          <Box
            flex={1}
            position={"relative"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Box width={"2rem"} height={"2rem"}>
              <Loading isCircle bg={"bg.secondary"} />
            </Box>
          </Box>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>Components: Error</StyledHeader>
        <StyledSectionContent height={"200px"}>
          <Box flex={1} position={"relative"}>
            <Error />
          </Box>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>Components: Empty</StyledHeader>
        <StyledSectionContent height={"200px"}>
          <Box flex={1} position={"relative"}>
            <Empty icon={"icon"} size={10}>
              This is an empty state.
            </Empty>
          </Box>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>Components: Table</StyledHeader>
        <StyledSectionContent>
          <Box flex={1} position={"relative"} justifyContent={"center"} m={4}>
            <Table
              empty={{ icon: "tools", message: "There are no tools." }}
              columns={["name", "user", "online?", "read-only?"]}
              renderColumns={({
                data,
                rows,
                sortBy = "name",
                setSortBy,
                orderBy = "ASC",
                setOrderBy,
              }) => {
                return (
                  <Cell
                    key={data}
                    variant={"head"}
                    sortBy={sortBy === data}
                    orderBy={orderBy}
                    handleClick={() => {
                      if (rows.length === 0) {
                        return;
                      }
                      setSortBy(data);
                      setOrderBy(orderBy === "ASC" ? "DESC" : "ASC");
                    }}
                  >
                    {data}
                  </Cell>
                );
              }}
              rows={[
                {
                  name: "project_1",
                  user: "Lorem",
                  "online?": "yes",
                  "read-only?": "yes",
                },
                {
                  name: "project_2",
                  user: "Ipsum",
                  "online?": "no",
                  "read-only?": "no",
                },
              ]}
              renderRows={({ columns, data }) => {
                return columns.map((c, i) => {
                  return <Cell key={i}>{data[c] || "-"}</Cell>;
                });
              }}
            />
          </Box>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>Components: Stats</StyledHeader>
        <StyledSectionContent>
          <Box flex={1} position={"relative"} justifyContent={"center"}>
            <StyledOverride>
              <Stats title="Stat">
                <Stat title={"stat 1"} count={10} />
                <Stat title={"stat 2"} count={110} />
                <Stat title={"stat 3"} count={42} />
              </Stats>
            </StyledOverride>
          </Box>
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>VIEWS: Navigation</StyledHeader>
        <StyledSectionContent>
          <Navigation position="relative" />
        </StyledSectionContent>
      </StyledSection>

      <StyledSection>
        <StyledHeader>VIEWS: Drawer</StyledHeader>
        <StyledSectionContent>
          <Drawer icon={"wireframe"} title={"Drawer"}>
            <Box p={4}>This is the content of my drawer.</Box>
          </Drawer>
        </StyledSectionContent>
      </StyledSection>
    </div>
  );
};

Component.displayName = "StyleGuide";

export default Component;
