import { Platform, Text, View } from "react-native";

export default function Index() {
  console.log(Platform.OS);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Hello Expo App...</Text>
      <Text>
        {Platform.OS === "web" ? "Hello From Web" : "Hello From Android"}
      </Text>
    </View>
  );
}
