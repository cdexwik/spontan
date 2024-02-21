import React from "react";
import { View, Text, StyleSheet, ScrollView, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { NavigationContainer } from "@react-navigation/native";

const Tab = createMaterialTopTabNavigator();

function Friends() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.menuButton}>
              <Pressable style={styles.menuIcon}>
                <Feather name="menu" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
            <Text style={styles.spontan}>Spontan</Text>
            <View style={styles.rightSpace}></View>
          </View>
          <View style={styles.menuBar}>
            <Text>friends</Text>
            <Text>|</Text>
            <Text>main</Text>
            <Text>|</Text>
            <Text>activities</Text>
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
    width: 380,
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
});

export default Friends;
