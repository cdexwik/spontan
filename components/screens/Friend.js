import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Friend = ({ friend }) => {
  return (
    <View style={styles.container}>
      {console.log("From FriendCard")}
      {console.log(friend)}
      <Text>{friend[3]}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
});

export default Friend;
