import React from "react";
import { View, Text } from "react-native";
import Friend from "./Friend";

const FriendsList = (friends) => {
  console.log("From FL");
  console.log(friends);

  if (!friends.length || friends.length === 0) return <Text>No friends!</Text>;
  else {
    return (
      <View>
        {friends.forEach((friend) => {
          <Friend friend={friend} />;
        })}
      </View>
    );
  }
};

export default FriendsList;
