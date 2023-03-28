import React from "react";
import { TouchableHighlightProps } from "react-native";

import { Container, Title } from "./styles";

interface props extends TouchableHighlightProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>{title}</Title>
    </Container>
  );
}
