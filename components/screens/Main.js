import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import ReceivedActivity from "../ReceivedActivity";

function Main() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView style={{ flex: 1, backgroundColor: "#2B2B2B" }}>
          <View style={styles.container}>
            <ReceivedActivity />
            <ReceivedActivity />
            <ReceivedActivity />
            <ReceivedActivity />
          </View>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
});

export default Main;
