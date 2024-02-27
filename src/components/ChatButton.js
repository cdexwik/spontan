import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function ChatButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.acceptButton}>
      <Feather name="message-square" size={16} color="black" />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  acceptButton: {
    backgroundColor: "#D4F0FC",
    alignItems: "center",
    paddingVertical: 2,
    paddingHorizontal: 14,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 21,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
  },
});
