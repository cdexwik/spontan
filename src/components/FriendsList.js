import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Friend from "./Friend";

function renderFriendsCB(friend) {
  {
    //console.log(friend);
  }
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
        <Text
          style={{
            fontSize: 16,
            color: "#A0A0A0",
            fontFamily: "HelveticaNeue-BoldItalic",
            alignSelf: "center",
            marginTop: 20,
          }}
        >
          No friends!
        </Text>
      </View>
    );
  } else {
    return <View style={styles.container}>{friends.map(renderFriendsCB)}</View>;
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    alignContent: "space-between",
    justifyContent: "center",
  },
});

export default FriendsList;
