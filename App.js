import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import LoginStack from "./components/stacks/LoginStack";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2B2B2B" barStyle="default" />
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
