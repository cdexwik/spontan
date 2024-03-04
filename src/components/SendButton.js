import React from "react";
import { View, Text, Pressable, StyleSheet } from "react-native";

const SendButton = ({ onPress }) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress} style={styles.sendButton}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </View>
  );
};

export default SendButton;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  sendButton: {
    backgroundColor: "#AFE8C4",
    alignItems: "center",
    paddingVertical: 0,
    paddingHorizontal: 15,
    alignSelf: "center",
    borderRadius: 16,
    elevation: 3,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 11,
    lineHeight: 21,
    letterSpacing: 0.25,
    color: "black",
    fontFamily: "HelveticaNeue-BoldItalic",
  },
});
