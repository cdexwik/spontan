import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Friend = ({
  userid,
  firstName,
  lastName,
  tag,
  pendingRequest,
  activityData,
}) => {
  console.log(activityData);
  const responseTime = Math.round(
    activityData.totalResponseTime / activityData.numberOfInvites
  );

  return (
    <View>
      <Text>{`${firstName} ${lastName}`}</Text>
      <Text>{tag}</Text>
      <Text>{`Response Time: ${responseTime} seconds`}</Text>
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
