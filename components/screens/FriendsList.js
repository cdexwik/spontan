import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Friend from "./Friend";

const FriendsList = ({ friends }) => {
  console.log("From FL");
  console.log(friends);

  if (!friends.length || friends.length === 0) {
    return (
      <View style={styles.container}>
        {console.log("No friends")}
        <Text>No friends!</Text>
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        {friends.map((friend) => {
          return <Friend key={friend[0]} friend={friend} />;
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#2B2B2B",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default FriendsList;
