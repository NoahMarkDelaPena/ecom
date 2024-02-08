import React from "react";
import { Pressable } from "react-native";
import { useRouter } from "expo-router";
import { View, Text } from "../Themed";
import { useColorScheme } from "@/components/useColorScheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Colors from "@/constants/Colors";

export default function Checkout({ price, url }: any) {
  const router = useRouter();
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View
        style={{
          position: "absolute",
          bottom: 45,
          width: "100%",
          paddingHorizontal: 20,
          paddingVertical: 10,
          borderTopWidth: 1,
          borderTopColor: "#ccc",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <View>
            <Text style={{ fontFamily: "Inter-Bold" }}>Total Price</Text>
            <Text style={{ fontFamily: "Inter-Bold" }}>{price}</Text>
          </View>
          <Text
            style={{
              paddingVertical: 8,
              paddingHorizontal: 20,
              borderRadius: 5,
              backgroundColor: colorScheme === "dark" ? "#4a5c64" : "#e7e9ec",
            }}
            onPress={() =>
              router.push(`/(details)/productCheckoutDetails/${url}`)
            }
          >
            <Text style={{ fontFamily: "Inter-Bold" }}>Checkout</Text>
          </Text>
        </View>
      </View>
    </ThemeProvider>
  );
}
