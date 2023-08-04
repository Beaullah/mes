import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Step1 from "./Pages/Step1";
export default function App() {
  return (
    <View style={styles.container}>
      <Step1 />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
