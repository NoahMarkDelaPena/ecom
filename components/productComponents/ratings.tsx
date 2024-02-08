import { View, Text } from "../Themed";
import { useColorScheme } from "@/components/useColorScheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import React from "react";
import { Avatar } from "react-native-paper";
import { AntDesign } from "@expo/vector-icons";

export default function Ratings({ comment, username, rating }: any) {
  const colorScheme = useColorScheme();
  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <View
        style={{
          flex: 1,
          width: 360,
          padding: 10,
          marginBottom: 10,
          borderRadius: 5,
          borderWidth: 1,
        }}
      >
        <View style={{ justifyContent: "space-between", flexDirection: "row" }}>
          <View style={{ flexDirection: "row", alignItems: "center", gap: 16 }}>
            <Avatar.Image
              source={require("../../assets/images/icon.png")}
              size={30}
            />
            <Text style={{ fontFamily: "Inter-Bold" }}>{username}</Text>
          </View>
          <View style={{ gap: 8, flexDirection: "row", alignItems: "center" }}>
            <Text>{rating}</Text>
            <AntDesign name={"star"} size={16} />
          </View>
        </View>
        <Text style={{ fontFamily: "Inter-Medium", marginTop: 16 }}>
          {comment}
        </Text>
      </View>
    </ThemeProvider>
  );
}
