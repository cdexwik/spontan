//import liraries
import React, { Component } from "react";
import { StyleSheet, Pressable, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// create a component
export default function NewActivityButton({ onPress }) {
  return (
    <Pressable onPress={onPress} style={styles.floatingButton}>
      <Ionicons name="add-circle" size={80} color={"#afe8c4"} />
    </Pressable>
  );
}

// define your styles
const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    left: "50%",
    marginLeft: -40,
    bottom: 5,
    borderRadius: "50%",
    justifyContent: "center",
    elevation: 4,
  },
});
