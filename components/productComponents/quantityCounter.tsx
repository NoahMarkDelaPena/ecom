import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { View, Text } from "../Themed";
import { useColorScheme } from "@/components/useColorScheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";

export default function Counter() {
  const [count, setCount] = useState(1);
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
  };

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <ThemeProvider value={theme}>
      <View
        style={{ flexDirection: "row", alignItems: "center", marginTop: 24 }}
      >
        <Text style={{ marginRight: 10, fontFamily: "Inter-Bold" }}>
          Quantity:
        </Text>
        <TouchableOpacity
          onPress={decrement}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            width: 35,
            height: 35,
            backgroundColor: theme.colors.background,
          }}
        >
          <Text style={{ fontSize: 20 }}> - </Text>
        </TouchableOpacity>
        <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{count}</Text>
        <TouchableOpacity
          onPress={increment}
          style={{
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 5,
            width: 35,
            height: 35,
            backgroundColor: theme.colors.card,
          }}
        >
          <Text style={{ fontSize: 20 }}> + </Text>
        </TouchableOpacity>
      </View>
    </ThemeProvider>
  );
}
