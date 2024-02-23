import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import MainStack from "./components/stacks/MainStack";
import LoginStack from "./components/stacks/LoginStack";

export default function App() {
  return (
    <View style={styles.container}>
      <LoginStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
