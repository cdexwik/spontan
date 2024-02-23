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
  const responseTime = Math.round(
    activityData.totalResponseTime / activityData.numberOfInvites
  );

  return (
    <View>
      <Text style={styles.text}>{`${firstName} ${lastName}`}</Text>
      <Text style={styles.text}>{tag}</Text>
      <Text
        style={styles.text}
      >{`Response Time: ${responseTime} seconds`}</Text>
      <Text style={styles.text}>-</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2B2B2B",
    alignItems: "center",
  },
  text: {
    color: "#F8F8F8",
    fontSize: 14,
    textAlign: "center",
    fontFamily: "Helvetica Neue",
    fontStyle: "italic",
    fontWeight: "500",
  },
});

export default Friend;
