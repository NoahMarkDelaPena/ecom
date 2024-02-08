import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { data } from "../../../constants/data";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Checkout from "../../../components/productComponents/checkout";
import { useColorScheme } from "@/components/useColorScheme";
import {
  ThemeProvider,
  DarkTheme,
  DefaultTheme,
} from "@react-navigation/native";
import Colors from "@/constants/Colors";

export default function Products(): React.JSX.Element {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  const selectedData = data.find((datas) => datas.products?.productId === id);
  const colorScheme = useColorScheme();

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView style={{ flex: 1 }}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingVertical: 24,
            paddingHorizontal: 24,
          }}
        >
          <Ionicons
            name="chevron-back"
            size={24}
            color={
              colorScheme === "dark" ? Colors.dark.text : Colors.light.text
            }
            onPress={() => router.back()}
          />
          <Text style={{ fontFamily: "Inter-Bold" }}>Checkout</Text>
        </View>
        <ScrollView
          style={{ paddingHorizontal: 24, paddingBottom: 48, gap: 32 }}
        >
          <Text
            style={{
              fontSize: 20,
              marginBottom: 4,
              fontFamily: "Inter-Bold",
            }}
          >
            Order List
          </Text>
          <View
            style={{
              flexDirection: "row",
              gap: 24,
              borderRadius: 12,
              borderWidth: 1,
              borderColor: "#e7e9ec",
              padding: 16,
            }}
          >
            <Image
              source={{ uri: selectedData?.products.productImage }}
              style={{ width: 150, height: 200 }}
            />
            <View style={{ justifyContent: "space-between" }}>
              <View>
                <Text
                  style={{
                    fontFamily: "Inter-Bold",
                    fontSize: 16,
                    maxWidth: 170,
                  }}
                >
                  {selectedData?.products.productName}
                </Text>
                <Text
                  style={{
                    fontFamily: "Inter-SemiBold",
                    fontSize: 12,
                  }}
                >
                  {selectedData?.store}
                </Text>
              </View>
              <Text
                style={{
                  fontFamily: "Inter-SemiBold",
                  fontSize: 16,
                }}
              >
                {selectedData?.products.productPrice}
              </Text>
            </View>
          </View>
        </ScrollView>
        <Checkout price={selectedData?.products.productPrice} />
      </SafeAreaView>
    </ThemeProvider>
  );
}
