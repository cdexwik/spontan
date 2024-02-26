import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashedLine from "../components/DashedLine";
import ProfilePictureFriend from "../components/ProfilePictureFriend";
import AcceptButton from "../components/AcceptButton";

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
      <View style={styles.container}>
        <View style={styles.friend}>
          <ProfilePictureFriend />
          <View style={styles.friendTextBox}>
            <Text
              style={styles.friendTextName}
            >{`${firstName} ${lastName}`}</Text>
            <Text style={styles.friendTextTag}>@ {tag}</Text>
            <Text
              style={styles.friendText}
            >{`Response Time: ${responseTime} s`}</Text>
          </View>
          {pendingRequest && <AcceptButton onClick />}
        </View>
        <DashedLine />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
  },
  friend: {
    flexDirection: "row",
  },
  friendTextBox: {
    flexDirection: "column",
    paddingVertical: 10,
    marginRight: 20,
  },
  friendTextName: {
    fontSize: 12,
    color: "#F8F8F8",
    fontWeight: "bold",
  },
  friendTextTag: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#A0A0A0",
  },
  friendText: {
    fontSize: 12,
    color: "#A0A0A0",
  },
});

export default Friend;
