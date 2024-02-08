import React from "react";
import { Image, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { data } from "../../../constants/data";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Checkout from "../../../components/productComponents/checkout";
import Counter from "../../../components/productComponents/quantityCounter";
import Ratings from "../../../components/productComponents/ratings";
import { View, Text } from "../../../components/Themed";
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
  const [heart, setHeart] = React.useState(false);
  const colorScheme = useColorScheme();

  const heartHandler = () => {
    setHeart(!heart);
  };

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <SafeAreaView>
        <View
          lightColor={Colors.light.background}
          darkColor={Colors.dark.background}
        >
          <View
            style={{
              paddingHorizontal: 24,
              paddingTop: 16,
              marginBottom: -16,
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
          </View>
          <SafeAreaView
            style={{ paddingHorizontal: 24, paddingBottom: 48, gap: 32 }}
          >
            <ScrollView style={{ marginBottom: 64 }}>
              <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
                <Image
                  source={{ uri: selectedData?.products.productImage }}
                  style={{
                    width: "100%",
                    height: 400,
                    borderRadius: 12,
                    objectFit: "contain",

                    borderWidth: 0.2,
                  }}
                />
                <View style={{ marginTop: 24, width: "100%" }}>
                  <View
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        flex: 1,
                        fontSize: 20,
                        marginBottom: 4,
                        fontFamily: "Inter-Bold",
                      }}
                    >
                      {selectedData?.products.productName}
                    </Text>
                    <AntDesign
                      name={heart ? "heart" : "hearto"}
                      size={20}
                      color="#ba0000"
                      onPress={heartHandler}
                    />
                  </View>
                  <View
                    style={{
                      flex: 1,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "flex-start",
                      gap: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 12,
                        fontFamily: "Inter-Bold",
                      }}
                    >
                      {selectedData?.store}
                    </Text>
                    <View
                      style={{ flexDirection: "row", alignItems: "center" }}
                    >
                      {[1, 2, 3, 4, 5].map((_, i) => (
                        <AntDesign
                          key={i}
                          name={i < 4 ? "star" : "staro"}
                          size={16}
                          color="#ffba00"
                        />
                      ))}
                      <Text
                        style={{
                          fontSize: 8,
                          fontFamily: "Inter-SemiBold",
                          marginLeft: 8,
                        }}
                      >
                        ({selectedData?.products.ratingNumber})
                      </Text>
                    </View>
                  </View>
                  <View>
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Inter-Bold",
                        marginTop: 24,
                      }}
                    >
                      Product Description:
                    </Text>
                    <Text
                      style={{
                        fontSize: 10,
                        fontFamily: "Inter-SemiBold",
                      }}
                      // numberOfLines={2}
                    >
                      {selectedData?.products.productDescription}
                    </Text>
                  </View>
                </View>
                <Counter />

                <View style={{ marginBottom: 48, marginTop: 24 }}>
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginBottom: 16,
                    }}
                  >
                    <Text
                      style={{
                        fontSize: 16,
                        fontFamily: "Inter-SemiBold",
                      }}
                    >
                      Reviews and Ratings
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Inter-SemiBold",
                        fontSize: 12,
                        textDecorationLine: "underline",
                      }}
                      onPress={() => router.push("../home/stores")}
                    >
                      See All
                    </Text>
                  </View>
                  {selectedData?.products.reviews
                    ?.slice(0, 3)
                    .map((item, index) => {
                      {
                        return (
                          <Ratings
                            comment={item.comment}
                            username={item.username}
                            rating={item.rating}
                            key={index}
                          />
                        );
                      }
                    })}
                </View>
              </View>
            </ScrollView>
          </SafeAreaView>
          <Checkout
            price={selectedData?.products.productPrice}
            url={selectedData?.id}
          />
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
