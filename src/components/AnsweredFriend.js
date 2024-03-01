import React from "react";
import { View, Text, StyleSheet } from "react-native";
import ProfilePictureFriend from "./ProfilePictureFriend";

const AnsweredFriend = ({ firstName, lastName, tag, activityData }) => {
  const responseTime = Math.round(
    activityData.totalResponseTime / activityData.numberOfInvites
  );

  const acceptButtonHandler = () => {
    console.log("Accept Pressed");
  };

  const crossButtonHandler = () => {
    console.log("Cross Pressed");
  };

  return (
    <View style={styles.friend}>
      <ProfilePictureFriend />
      <View style={styles.friendTextBox}>
        <Text style={styles.friendTextName}>{`${firstName} ${lastName}`}</Text>
        <Text style={styles.friendTextTag}>@{tag}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  friend: {
    flexDirection: "row",
  },
  friendTextBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 10,
    marginLeft: 20,
  },
  friendTextName: {
    fontSize: 12,
    color: "#F8F8F8",
    fontFamily: "HelveticaNeue-Bold",
  },
  friendTextTag: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue-Italic",
  },
  friendText: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "HelveticaNeue",
  },
});

export default AnsweredFriend;
