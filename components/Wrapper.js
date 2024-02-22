import React from "react";
import { View, Text, StyleSheet, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import Navigation from "./Navigation";

function Wrapper() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.menuButton}>
              <Pressable>
                <Feather name="menu" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
            <Text style={styles.spontan}>Spontan</Text>
            <View style={styles.rightSpace}></View>
          </View>
          <View style={styles.tabs}>
            <Navigation />
          </View>
        </View>
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
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 10,
    width: "92%",
    maxWidth: 480,
  },
  menuButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  menuIcon: {
    justifyContent: "center",
    marginLeft: "3%",
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 36,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
  },
  rightSpace: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  tabs: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 310,
    marginTop: 18,
    marginBottom: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    //elevation: 4,
    overflow: "hidden",
  },
});

export default Wrapper;
