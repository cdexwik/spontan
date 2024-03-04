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
          <ProfilePictureFriend
            size={45}
            //This should be changed to the link of the corresponding profile picture
            src={
              "https://upload.wikimedia.org/wikipedia/commons/1/18/React_Native_Logo.png"
            }
          />
        </View>
        <View style={styles.center}>
          <View style={styles.friendTextBox}>
            <Text
              style={styles.friendTextName}
            >{`${firstName} ${lastName}`}</Text>
            <Text style={styles.friendTextTag}>@{tag}</Text>
            <Text
              style={styles.friendText}
            >{`Response Time: ${responseTime} s`}</Text>
          </View>
        </View>
        {pendingRequest && (
          <View style={styles.right}>
            <AcceptButton onPress={acceptButtonHandler} />
            <CrossButton size={13} onPress={crossButtonHandler} />
          </View>
        )}
        {!pendingRequest && (
          <View style={styles.right}>
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
  center: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  friendTextBox: {
    flexDirection: "column",
    justifyContent: "flex-start",
    paddingVertical: 10,
    flex: 1,
    marginLeft: -40,
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
    fontFamily: "HelveticaNeue-Normal",
  },
  right: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginRight: 10,
  },
});

export default Friend;
