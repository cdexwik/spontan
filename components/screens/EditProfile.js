import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

function EditProfile() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <View style={styles.crossButton}>
              <Feather name="x" size={24} color="#8F8F8F" />
            </View>
            <Text style={styles.profile}>Edit profile</Text>
            <View style={styles.checkButton}>
              <Pressable>
                <Feather name="check" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
          </View>
          <View style={styles.inputContainer} />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 3,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 18,
    width: "92%",
    maxWidth: 480,
  },
  crossButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  profile: {
    color: "#F8F8F8",
    fontSize: 18,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
  },
  checkButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  inputContainer: {
    flex: 1,
    backgroundColor: "#3B3B3B",
    width: "92%",
    maxWidth: 480,
    minHeight: 310,
    marginTop: 32,
    marginBottom: 24,
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 4,
    overflow: "hidden",
  },
});

export default EditProfile;
