/*
GLOBALS
  Globals are often used components that are highly customizable through props using styled system.
  The components within the files exported here should be developed without a specific context in mind.
  They must consist of element with styled-system capacity and maybe a few default styles that are consistent throughout the app.
  The intended purpose is to allow the developer to fully customize according to use case using props in other areas of the app.
*/
export { default as Box } from "./components/Box";
export { default as Button } from "./components/Button";
export { Card, CardRow, CardTable, CardTableCell } from "./components/Card/";

export {
  FormDefault as Form,
  FieldDefault as Field,
  LabelDefault as Label,
  InputDefault as Input,
  TextAreaDefault as TextArea,
} from "./components/Form";
export { default as Icon } from "./components/Icon";
export { default as Link } from "./components/Link";
export { default as Text } from "./components/Text";
export {
  TableDefault as Table,
  HeadDefault as THead,
  BodyDefault as TBody,
  RowDefault as TRow,
  CellDefault as TCell,
} from "./components/Table";
