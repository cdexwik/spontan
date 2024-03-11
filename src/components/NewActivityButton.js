import React from "react";
import { StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function NewActivityButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.floatingButton}>
      <Ionicons name="add-circle" size={80} color={"#afe8c4"} />
    </Pressable>
  );
}

const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    left: "50%",
    marginLeft: -40,
    bottom: 5,
    borderRadius: 40,
    justifyContent: "center",
    elevation: 4,
  },
});
