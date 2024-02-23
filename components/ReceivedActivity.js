import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ReceivedActivity = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Received Activity</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "98%",
    minHeight: 200,
    height: 200,
    backgroundColor: "#3B3B3B",
    flexDirection: "column",
    borderRadius: 8,
    alignItems: "stretch",
    padding: 20,
    elevation: 6,
    overflow: "hidden",
    marginBottom: 16,
  },
  text: {
    color: "#F8F8F8",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "500",
  },
});

export default ReceivedActivity;
