import { Image, Pressable, ScrollView } from "react-native";
import { Button, Searchbar } from "react-native-paper";
import { Stack, useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";
import { data } from "../../../constants/data";
import { filters } from "../../../constants/filters";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../../../constants/Colors";
import React from "react";
import { MaterialIcons } from "@expo/vector-icons";
import { useColorScheme } from "@/components/useColorScheme";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { Text, View } from "@/components/Themed";

export default function Home() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = React.useState("");
  const [heart, setHeart] = React.useState(false);
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? DarkTheme : DefaultTheme;

  const heartHandler = () => {
    setHeart(!heart);
  };

  return (
    <ThemeProvider value={theme}>
      <SafeAreaView>
        <View
          lightColor={Colors.light.background}
          darkColor={Colors.dark.background}
        >
          <ScrollView>
            <SafeAreaView style={{ paddingHorizontal: 24, gap: 32 }}>
              <Stack.Screen options={{ headerShown: false }} />

              <Searchbar
                placeholder="Search"
                onChangeText={setSearchQuery}
                value={searchQuery}
                style={{
                  paddingRight: 16,
                  alignItems: "center",
                  justifyContent: "center",
                  backgroundColor: theme.colors.card,
                  borderColor: theme.colors.border,
                  borderWidth: 1,
                }}
                inputStyle={{ color: theme.colors.text }}
                iconColor={theme.colors.text}
                placeholderTextColor={theme.colors.border}
                selectionColor={theme.colors.primary}
                right={() => (
                  <MaterialIcons
                    name="tune"
                    size={24}
                    color={theme.colors.text}
                  />
                )}
              />

              <View style={{ gap: 16 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "Inter-Bold" }}>
                    Partnered Stores
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
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    gap: 8,
                    justifyContent: "center",
                  }}
                >
                  {data.slice(0, 6).map((data, index) => {
                    return (
                      <Pressable
                        onPress={() => router.push(`../home/${data.id}`)}
                        key={index}
                        style={{
                          width: 110,
                          height: 110,
                          borderColor: "#e7e9ec",
                          borderWidth: 1,
                          justifyContent: "center",
                          alignItems: "center",
                          borderRadius: 20,
                        }}
                      >
                        <Image
                          source={{ uri: data.storeImage }}
                          style={{ width: 80, height: 80 }}
                        />
                      </Pressable>
                    );
                  })}
                </View>
              </View>
              <View
                style={{ gap: 16 }}
                lightColor={Colors.light.background}
                darkColor={Colors.dark.background}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                  }}
                >
                  <Text style={{ fontFamily: "Inter-Bold" }}>Most Popular</Text>
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
                <ScrollView horizontal>
                  {filters.map((data, index) => {
                    // console.log(data.category);
                    return (
                      <Button
                        key={index}
                        mode={data.id[2] ? "contained" : "outlined"}
                        style={{
                          marginRight: 8,
                          borderColor: theme.colors.border,
                        }}
                        onPress={() =>
                          router.push(`../../(filters)/${data.category}`)
                        }
                      >
                        <Text style={{ fontFamily: "Inter-Medium" }}>
                          {data.category}
                        </Text>
                      </Button>
                    );
                  })}
                </ScrollView>
                <View
                  style={{
                    flexWrap: "wrap",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: 16,
                  }}
                >
                  {data.map((product, index) => (
                    <Pressable
                      key={index}
                      onPress={() =>
                        router.push(
                          `../../(details)/productDetails/${product.products?.productId}`
                        )
                      }
                      style={{
                        width: "47.5%",
                        borderRadius: 12,
                        borderWidth: 1,
                        borderColor: "#e7e9ec",
                        overflow: "hidden",
                        marginBottom: 16,
                      }}
                    >
                      <Image
                        source={{
                          uri: product.products?.productImage,
                        }}
                        style={{
                          width: "100%",
                          height: 220,
                          borderTopLeftRadius: 12,
                          borderTopRightRadius: 12,
                        }}
                      />
                      <View style={{ padding: 12 }}>
                        <Text
                          style={{
                            fontSize: 8,
                            fontFamily: "Inter-Bold",
                          }}
                        >
                          {product.store}
                        </Text>
                        <Text
                          style={{
                            fontSize: 16,
                            marginBottom: 8,
                            fontFamily: "Inter-SemiBold",
                          }}
                        >
                          {product.products?.productName}
                        </Text>
                        <View
                          style={{
                            flexDirection: "row",
                            alignItems: "center",
                          }}
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
                            ({product.products.ratingNumber})
                          </Text>
                        </View>
                        <Text
                          style={{
                            fontSize: 12,
                            marginBottom: 8,
                            fontFamily: "Inter-Medium",
                          }}
                        >
                          {product.products?.productPrice}
                        </Text>

                        <AntDesign
                          name={heart ? "heart" : "hearto"}
                          size={20}
                          color="#ba0000"
                          style={{ position: "absolute", top: -205, right: 15 }}
                          onPress={heartHandler}
                        />
                      </View>
                    </Pressable>
                  ))}
                </View>
              </View>
            </SafeAreaView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </ThemeProvider>
  );
}
