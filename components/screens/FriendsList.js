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
      <View>
        {friends.forEach((friend) => {
          {
            console.log("Friend detected!");
          }
          <Friend friend={friend} />;
        })}
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
});

export default FriendsList;
