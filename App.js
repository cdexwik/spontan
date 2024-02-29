import "react-native-gesture-handler";
import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import MainStack from "./src/stacks/MainStack";
import LoginStack from "./src/stacks/LoginStack";
import { Provider } from "react-redux";
import { store } from "./redux/store";
import { PaperProvider } from "react-native-paper";

export default function App() {
  return (
    <Provider store={store}>
      <PaperProvider>
        <View style={styles.container}>
          <StatusBar backgroundColor="#2B2B2B" barStyle="default" />
          <LoginStack />
        </View>
      </PaperProvider>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
  },
});
