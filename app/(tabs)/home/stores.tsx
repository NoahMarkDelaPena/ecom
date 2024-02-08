import { View, Text, Image, Pressable, ScrollView } from "react-native";
import { data } from "../../../constants/data";
import { useRouter } from "expo-router";
import { flat } from "../../../constants/Colors";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Stores() {
  const router = useRouter();
  return (
    <SafeAreaProvider style={{ backgroundColor: "white", padding: 24 }}>
      <ScrollView>
        <View
          style={{
            flexWrap: "wrap",
            flexDirection: "row",
            gap: 8,
            justifyContent: "center",
          }}
        >
          {data.map((data, index) => {
            return (
              <Pressable
                onPress={() => router.push(`../home/${data.id}`)}
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
                  source={{ uri: data.storeImage }}
                  style={{ width: 110, height: 110 }}
                />
                <View style={{ padding: 16 }}>
                  <Text style={{ fontFamily: "Inter-Bold" }}>{data.store}</Text>
                </View>
              </Pressable>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
}
