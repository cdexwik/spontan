import React from "react";
import { View, Text, StyleSheet } from "react-native";
import DashedLine from "../components/DashedLine";
import ProfilePictureFriend from "../components/ProfilePictureFriend";
import AcceptButton from "../components/AcceptButton";
import CrossButton from "./CrossButton";

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

  const acceptButtonHandler = () => {
    console.log("Accept Pressed");
  };

  const crossButtonHandler = () => {
    console.log("Cross Pressed");
  };

  return (
    <View style={styles.container}>
      <View style={styles.friend}>
        <View style={styles.left}>
          <ProfilePictureFriend />
        </View>
        <View style={styles.friendTextBox}>
          <Text
            style={styles.friendTextName}
          >{`${firstName} ${lastName}`}</Text>
          <Text style={styles.friendTextTag}>@{tag}</Text>
          <Text
            style={styles.friendText}
          >{`Response Time: ${responseTime} s`}</Text>
        </View>
        {pendingRequest && (
          <View style={styles.rightContainer}>
            <AcceptButton onPress={acceptButtonHandler} />
            <CrossButton size={13} onPress={crossButtonHandler} />
          </View>
        )}
        {!pendingRequest && (
          <View style={styles.rightContainer}>
            <CrossButton size={13} onPress={crossButtonHandler} />
          </View>
        )}
      </View>
      <DashedLine />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "stretch",
  },
  friend: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "98%",
  },
  left: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    marginLeft: 20,
  },
  friendTextBox: {
    flexDirection: "column",
    paddingVertical: 10,
    marginLeft: -50,
  },
  friendTextName: {
    fontSize: 12,
    color: "#F8F8F8",
    fontWeight: "bold",
    fontFamily: "Helvetica Neue",
  },
  friendTextTag: {
    fontSize: 12,
    fontStyle: "italic",
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  friendText: {
    fontSize: 12,
    color: "#A0A0A0",
    fontFamily: "Helvetica Neue",
  },
  rightContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },
  rightSpace: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    marginRight: 10,
  },
});

export default Friend;
