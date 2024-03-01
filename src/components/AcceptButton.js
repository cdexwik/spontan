import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

export default function AcceptButton({ onPress }) {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.acceptButton}>
        <Text style={styles.buttonText}>Accept</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
  acceptButton: {
    backgroundColor: "#EEDFF6",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 10,
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
