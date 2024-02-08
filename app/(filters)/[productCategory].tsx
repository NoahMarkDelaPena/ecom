import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { data } from "../../constants/data";
import { useLocalSearchParams, useRouter } from "expo-router";
import { flat, primary } from "../../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Categories() {
  const router = useRouter();
  const { productCategory } = useLocalSearchParams();
  const filteredData = data.filter(
    (item) => item.products.productCategory === productCategory
  );

  return (
    <SafeAreaProvider style={{ backgroundColor: "white", padding: 24 }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          width: "100%",
          paddingBottom: 24,
          paddingHorizontal: 12,
        }}
      >
        <Ionicons
          name="chevron-back"
          size={24}
          color={primary}
          onPress={() => router.back()}
        />
        <Text style={{ fontFamily: "Inter-Bold" }}>{productCategory}</Text>
      </View>
      <ScrollView>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
          }}
        >
          {filteredData.map((item, index) => {
            return (
              <Pressable
                onPress={() => router.push(`../home/${item.id}`)}
                key={index}
                style={{
                  width: "47.5%",
                  height: 200,
                  borderColor: flat,
                  borderWidth: 1,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 20,
                }}
              >
                <Image
                  source={{ uri: item.products.productImage }}
                  style={{ width: 110, height: 110 }}
                />
                <View style={{ padding: 16 }}>
                  <Text style={{ fontFamily: "Inter-Bold" }}>
                    {item.products.productName}
                  </Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
