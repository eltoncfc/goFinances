import React from "react";
import { TouchableHighlightProps } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends TouchableHighlightProps {
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <GestureHandlerRootView>
      <Container {...rest}>
        <Title>{title}</Title>
      </Container>
    </GestureHandlerRootView>
  );
}
