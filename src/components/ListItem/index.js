import React from "react";

import { Container } from "./styles";

function ListItem({ children, color }) {
  return <Container color={color}>{children}</Container>;
}

export default ListItem;
