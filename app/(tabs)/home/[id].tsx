import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { Stack, useLocalSearchParams } from "expo-router";
import { data } from "../../../constants/data";

export default function Products(): React.JSX.Element {
  const { id } = useLocalSearchParams();
  const selectedData = data.find((datas) => datas.id === id);

  return (
    <View>
      <Stack.Screen options={{ title: selectedData?.store }} />
      <ScrollView>
        <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
          <Image source={{ uri: selectedData?.storeImage }} />
        </View>
      </ScrollView>
    </View>
  );
}
