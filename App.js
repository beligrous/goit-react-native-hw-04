import { StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import router from "./assets/router";
export default function App() {
  const route = router({});
  return (
    <NavigationContainer>
      <View style={styles.container}>{route}</View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
