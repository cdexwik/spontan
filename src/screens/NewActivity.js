import React from "react";
import { View, StyleSheet, Text, TextInput, Pressable } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import CrossButton from "../components/CrossButton";

function NewActivity({ onPress }) {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={styles.container}>
          <View style={styles.headerContainer}>
            <Text style={styles.spontan}>Spontan</Text>
            <Text style={styles.subTitle}>I'm feeling{"\n"}spontaneous...</Text>
          </View>
          <View style={styles.inputContainer}>
            <View style={styles.crossButton}>
              <CrossButton size={14} onPress={onPress} />
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
    marginTop: 20,
    maxWidth: 380,
  },
  spontan: {
    color: "#F8F8F8",
    fontSize: 42,
    textAlign: "center",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
  subTitle: {
    color: "#F8F8F8",
    textAlign: "center",
    marginTop: 30,
    fontFamily: "HelveticaNeue-MediumItalic",
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
