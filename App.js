import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";
import ForgotPass from "./components/ForgotPass";

export default function App() {
  return (
    <View style={styles.container}>
      <ForgotPass />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
});
