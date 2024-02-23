import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Friend from "./Friend";

function renderFriendsCB(friend) {
  return (
    <Friend
      key={friend.userid}
      firstName={friend.firstName}
      lastName={friend.lastName}
      tag={friend.tag}
      pendingRequest={friend.pendingRequest}
      activityData={friend.activityData}
    />
  );
}

const FriendsList = ({ friends }) => {
  if (!friends.length || friends.length === 0) {
    return (
      <View style={styles.container}>
        {console.log("No friends")}
        <Text>No friends!</Text>
      </View>
    );
  } else {
<<<<<<< HEAD
    return <View>{friends.map(renderFriendsCB)}</View>;
=======
    return (
      <View style={styles.container}>
        {friends.map((friend) => {
          return <Friend key={friend[0]} friend={friend} />;
        })}
      </View>
    );
>>>>>>> d4e14aa2d3049f8999cad3496907c6f9ab405c87
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
