import React from "react";
import { View, Text, StyleSheet } from "react-native";

<<<<<<< HEAD
const Friend = ({
  userid,
  firstName,
  lastName,
  tag,
  pendingRequest,
  activityData,
}) => {
  const responseTime = Math.round(
    activityData.totalResponseTime / activityData.numberOfInvites
  );

  return (
    <View>
      <Text>{`${firstName} ${lastName}`}</Text>
      <Text>{tag}</Text>
      <Text>{`Response Time: ${responseTime} seconds`}</Text>
=======
const Friend = ({ friend }) => {
  return (
    <View style={styles.container}>
      {console.log("From FriendCard")}
      {console.log(friend)}
      <Text>{friend[3]}</Text>
>>>>>>> d4e14aa2d3049f8999cad3496907c6f9ab405c87
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
