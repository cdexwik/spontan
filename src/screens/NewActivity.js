import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";

function NewActivity({ onPress }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer1}>
            <Text style={styles.spontan}>Spontan</Text>
            <Text style={styles.subTitle}>I'm feeling{"\n"}spontaneous...</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.crossButton}>
              <Pressable onPress={onPress}>
                <Feather name="x" size={24} color="#8F8F8F" />
              </Pressable>
            </View>
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
    alignItems: "center",
    marginTop: 30,
    maxWidth: 380,
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "700",
  },
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 40,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "400",
    fontSize: 28,
    lineHeight: 28,
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
  crossButton: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
});

export default NewActivity;
