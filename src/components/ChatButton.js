import React from "react";
import { View, Text, Pressable, StyleSheet, Linking, Share} from "react-native";
import { Feather } from "@expo/vector-icons";


export default function ChatButton({}) {
  const handlePress = async () => {
    try {
      const result = await Share.share({
        message: 'Lets do something spontaneous',
      });
      if (result.action === Share.sharedAction) {
        if (result.activityType) {
          // shared with activity type of result.activityType
        } else {
          // shared
          console.log("Shared successfully");
        }
      } else if (result.action === Share.dismissedAction) {
        // dismissed
        console.log("Share dismissed");
      }
    } catch (error) {
      console.error("Error sharing message:", error.message);
    }
  };


  return (
    <Pressable onPress={handlePress} style={styles.acceptButton}>
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
