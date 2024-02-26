import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import MainStack from "./src/stacks/MainStack";
import Friends from "./src/screens/Friends";
import Main from "./src/screens/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <MainStack />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
