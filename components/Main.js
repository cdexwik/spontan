import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

function Main() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.headerText}>Spontan</Text>
          </View>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#2B2B2B",
    display: "flex",
    maxWidth: 400,
    alignItems: "center",
    padding: 50,
  },
  headerContainer: {
    textAlign: "center",
    maxWidth: 380,
  },
  headerText: {
    color: "#F8F8F8",
    marginTop: 6,
    fontSize: 32,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
  },
});

export default Main;
