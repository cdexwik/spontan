import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Friend from "../screens/Friend";

function renderFriendsCB(friend) {
  {
    console.log(friend);
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

const SearchList = ({ filterdUsers }) => {
  return (
    <View style={styles.container}>{filterdUsers.map(renderFriendsCB)}</View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //backgroundColor: "green",
    marginBottom: 28,
  },
});

export default SearchList;
