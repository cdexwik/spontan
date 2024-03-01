import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function NoButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.acceptButton}>
      <Text style={styles.buttonText}>No</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: "#FDD3D5",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 16,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
