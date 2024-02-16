import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";
import ForgotPass from "./components/ForgotPass";
import Register from "./components/Register";
import Main from "./components/Main";

export default function App() {
  return (
    <View style={styles.container}>
      <Main />
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
