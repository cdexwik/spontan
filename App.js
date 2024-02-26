import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MainStack from "./src/stacks/MainStack";
import LoginStack from "./src/stacks/LoginStack";
import Friends from "./src/screens/Friends";
import Main from "./src/screens/Main";

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
