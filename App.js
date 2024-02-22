import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View } from "react-native";
import Login from "./components/Login";
import ForgotPass from "./components/ForgotPass";
import Register from "./components/Register";
import NewActivityScreen from "./components/NewActivityScreen";
import Wrapper from "./components/Wrapper";

export default function App() {
  return (
    <View style={styles.container}>
      <Wrapper />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
