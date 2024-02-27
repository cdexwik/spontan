import React from "react";
import { Pressable } from "react-native";
import { Octicons } from "@expo/vector-icons";

export default function CrossButton({ onPress, size }) {
  return (
    <Pressable onPress={onPress}>
      <Octicons name="x-circle-fill" size={size} color="#A0A0A0" />
    </Pressable>
  );
}
